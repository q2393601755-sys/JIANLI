/**
 * Post-build script: Convert absolute paths to relative paths
 * for USB / file:// protocol deployment.
 *
 * Usage: node scripts/post-build.js
 *
 * Fixes for file:// protocol:
 * 1. Remove crossorigin attributes (breaks file:// CORS)
 * 2. Convert asset paths in HTML/CSS to relative
 * 3. Inject window.__relbase + src interceptor at <head> start (before any JS)
 * 4. CSS fallback (reveal content if JS fails)
 * 5. Force full page navigation (bypass Next.js client router)
 * 6. Convert directory links to explicit index.html paths
 */

const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");

if (!fs.existsSync(outDir)) {
  // Non-export builds (e.g. Vercel server build) produce .next/ instead of out/
  console.log("out/ directory not found (non-export build) — skipping post-build.");
  process.exit(0);
}

function getDepth(filePath) {
  const relative = path.relative(outDir, filePath);
  const parts = relative.split(path.sep).filter(Boolean);
  return parts.length - 1;
}

function getPrefix(depth) {
  if (depth === 0) return "./";
  return "../".repeat(depth);
}

// Script injected at <head> start — runs before ANY external JS
// 1. Sets window.__relbase for runtime path resolution
// 2. Overrides src property setter on img/video/audio/source/iframe
// 3. MutationObserver watches for setAttribute('src', ...) calls too
const HEAD_INJECT = (prefix) => `<script>window.__relbase="${prefix}";(function(){var r=window.__relbase;function fix(v){if(typeof v!=="string")return v;if(v.length>0&&v[0]==="/"&&v[1]!=="/")return r+v.slice(1);return v}["img","video","audio","source","iframe"].forEach(function(t){var p=window["HTML"+t.charAt(0).toUpperCase()+t.slice(1)+"Element"];if(!p)return;var d=Object.getOwnPropertyDescriptor(p.prototype,"src");if(!d||!d.set)return;Object.defineProperty(p.prototype,"src",{set:function(v){d.set.call(this,fix(v))},get:d.get,configurable:true})});if(window.MutationObserver){var m=new MutationObserver(function(ms){ms.forEach(function(mut){if(mut.type==="attributes"&&mut.attributeName==="src"){var v=mut.target.getAttribute("src");if(v&&v[0]==="/"&&v[1]!=="/")mut.target.setAttribute("src",r+v.slice(1))}if(mut.type==="childList")mut.addedNodes.forEach(function(n){if(n.nodeType!==1)return;n.querySelectorAll&&n.querySelectorAll("img,video,audio,source").forEach(function(el){var v=el.getAttribute("src");if(v&&v[0]==="/"&&v[1]!=="/")el.setAttribute("src",r+v.slice(1))})})})});m.observe(document.documentElement,{childList:true,subtree:true,attributes:true,attributeFilter:["src"]})}})();</script>`;

function fixHtmlFile(fullPath) {
  const depth = getDepth(fullPath);
  const prefix = getPrefix(depth);

  let content = fs.readFileSync(fullPath, "utf8");
  const original = content;

  // Step 1: Remove crossorigin attributes (breaks file:// protocol)
  content = content.replace(/\s+crossorigin=""/g, "");
  content = content.replace(/\s+crossorigin/g, "");

  // Step 2: Fix "./" prefixed paths (from assetPrefix: "./")
  content = content.replace(/src="\.\//g, `src="${prefix}`);
  content = content.replace(/href="\.\//g, `href="${prefix}`);
  content = content.replace(/url\(\.\//g, `url(${prefix}`);

  // Step 2b: Fix RSC flight data asset specs. The embedded
  // self.__next_f payloads reference chunks/fonts as \"./_next/...\",
  // which resolve relative to the page URL — on subpages they 404,
  // hydration throws ChunkLoadError and every interactive control
  // (language toggle included) dies. They must match the script/link
  // attribute paths rewritten above.
  content = content.split('\\"./_next/').join('\\"' + prefix + '_next/');

  // Step 3: Fix "/" prefixed paths (public/ assets)
  content = content.replace(/src="\/(?!\/)/g, `src="${prefix}`);
  content = content.replace(/href="\/(?!\/)/g, `href="${prefix}`);
  content = content.replace(/url\(\//g, `url(${prefix}`);
  content = content.replace(/srcset="\/(?!\/)/g, `srcset="${prefix}`);

  // Step 3b: Remove data-nimg and loading="lazy" from img tags
  // data-nimg: prevents Next.js Image component from hydrating and
  //   overwriting the correct pre-rendered src attribute
  // loading="lazy": on file:// protocol, IntersectionObserver may not
  //   trigger correctly, causing images to never load
  content = content.replace(/\s+data-nimg="[^"]*"/g, "");
  content = content.replace(/\s+loading="lazy"/g, "");

  // Step 4: Inject __relbase + src interceptor at <head> start (before any JS)
  // This ensures the interceptor is in place before any async scripts execute
  if (!content.includes("__relbase")) {
    content = content.replace("<head>", "<head>" + HEAD_INJECT(prefix));
  }

  // Step 5: CSS fallback - reveal content if JS fails to load
  if (!content.includes("fallback-reveal")) {
    const fallbackCSS = '<style id="fallback-reveal">@keyframes fallback-show{to{opacity:1;transform:none}}[style*="opacity:0"]{animation:fallback-show 0s 3s forwards}</style>';
    content = content.replace("</head>", fallbackCSS + "</head>");
  }

  // Step 6: Force full page navigation (bypass Next.js client router)
  if (!content.includes("force-nav")) {
    const navScript = '<script id="force-nav">document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a");if(!a)return;var h=a.getAttribute("href");if(!h)return;if(h[0]==="."||h[0]==="/"){e.preventDefault();e.stopPropagation();if(h.slice(-1)==="/"&&h.slice(-2)!=="//")h+="index.html";window.location.href=h}},true)</script>';
    content = content.replace("</head>", navScript + "</head>");
  }

  // Step 7: Convert directory links to explicit index.html paths
  content = content.replace(/href="(\.\.?\/[^"]*)"/g, function(match, p1) {
    if (p1.endsWith('/') && !p1.endsWith('//')) {
      return 'href="' + p1 + 'index.html"';
    }
    return match;
  });

  if (content !== original) {
    fs.writeFileSync(fullPath, content, "utf8");
    const rel = path.relative(outDir, fullPath);
    console.log(`  Fixed: ${rel} (depth=${depth}, prefix=${prefix})`);
  }
}

function fixCssFile(fullPath) {
  const depth = getDepth(fullPath);
  const prefix = getPrefix(depth);

  let content = fs.readFileSync(fullPath, "utf8");
  const original = content;

  content = content.replace(/url\(\.\//g, `url(${prefix}`);
  content = content.replace(/url\(\//g, `url(${prefix}`);

  if (content !== original) {
    fs.writeFileSync(fullPath, content, "utf8");
    const rel = path.relative(outDir, fullPath);
    console.log(`  Fixed CSS: ${rel} (depth=${depth}, prefix=${prefix})`);
  }
}

// Turbopack runtime bakes assetPrefix "./" into chunk URLs as r="./_next/".
// That resolves relative to the current page's directory, so dynamically
// loaded chunks 404 on subpages (hydration dies, language toggle included).
// Rewrite it to use the per-page __relbase injected into each HTML file,
// then rename the file — same-name chunks get served stale from browser /
// proxy caches, a fresh name guarantees the patched code is fetched.
const patchedRuntimeFiles = [];

function fixRuntimeChunkPath(fullPath) {
  let content = fs.readFileSync(fullPath, "utf8");
  const original = content;

  content = content.replace(
    /"\.\/_next\/"/g,
    '(window.__relbase||"./")+"_next/"'
  );

  if (content !== original) {
    fs.writeFileSync(fullPath, content, "utf8");
    patchedRuntimeFiles.push(fullPath);
    console.log(`  Fixed runtime base path: ${path.relative(outDir, fullPath)}`);
  }
}

function renamePatchedRuntimes() {
  for (const oldPath of patchedRuntimeFiles) {
    const oldBase = path.basename(oldPath);
    const newBase = oldBase.replace(/\.js$/, ".usbfix.js");
    const newPath = path.join(path.dirname(oldPath), newBase);
    fs.renameSync(oldPath, newPath);
    console.log(`  Renamed: ${oldBase} -> ${newBase}`);

    walkFiles(outDir, (f) => {
      if (path.extname(f) !== ".html") return;
      let c = fs.readFileSync(f, "utf8");
      if (c.includes(oldBase)) {
        fs.writeFileSync(f, c.split(oldBase).join(newBase), "utf8");
      }
    });
  }
}

function fixFile(fullPath) {
  const ext = path.extname(fullPath);
  if (ext === ".html") fixHtmlFile(fullPath);
  else if (ext === ".css") fixCssFile(fullPath);
  else if (
    ext === ".js" &&
    fullPath.includes(`${path.sep}_next${path.sep}`)
  ) {
    fixRuntimeChunkPath(fullPath);
  }
}

function walkFiles(dir, cb) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkFiles(fullPath, cb);
    } else {
      cb(fullPath);
    }
  }
}

console.log("Post-build: Converting paths for USB deployment...");
walkFiles(outDir, fixFile);
renamePatchedRuntimes();

// Create server.ps1 (PowerShell HTTP server with Range request support for video playback)
const serverScript = `$port = 8888
$root = $PSScriptRoot

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()

Start-Process "http://localhost:$port/index.html"

Write-Host "Server running at http://localhost:$port"
Write-Host "Press Ctrl+C to stop."

$mimeMap = @{
    ".html"  = "text/html"
    ".css"   = "text/css"
    ".js"    = "application/javascript"
    ".json"  = "application/json"
    ".png"   = "image/png"
    ".jpg"   = "image/jpeg"
    ".jpeg"  = "image/jpeg"
    ".gif"   = "image/gif"
    ".svg"   = "image/svg+xml"
    ".ico"   = "image/x-icon"
    ".mp4"   = "video/mp4"
    ".webm"  = "video/webm"
    ".woff"  = "font/woff"
    ".woff2" = "font/woff2"
    ".ttf"   = "font/ttf"
    ".otf"   = "font/otf"
    ".txt"   = "text/plain"
    ".xml"   = "application/xml"
    ".wasm"  = "application/wasm"
}

while ($listener.IsListening) {
    try { $context = $listener.GetContext() } catch { break }

    $request  = $context.Request
    $response = $context.Response

    try {
        $rawUrl = [Uri]::UnescapeDataString($request.Url.AbsolutePath)
        if ($rawUrl.EndsWith("/")) { $rawUrl += "index.html" }
        $filePath = Join-Path $root $rawUrl.TrimStart("/")

        if (-not (Test-Path $filePath -PathType Leaf)) {
            $response.StatusCode = 404
            $response.Close()
            continue
        }

        $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
        $mimeType = if ($mimeMap.ContainsKey($ext)) { $mimeMap[$ext] } else { "application/octet-stream" }
        $response.ContentType = $mimeType

        # Always revalidate code files so a rebuilt USB stick never serves
        # stale cached chunks (same filenames across builds).
        if (@(".html", ".js", ".css", ".json") -contains $ext) {
            $response.Headers.Add("Cache-Control", "no-cache")
        }

        $fileStream = [System.IO.File]::OpenRead($filePath)
        $fileSize = $fileStream.Length

        $rangeHeader = $request.Headers["Range"]
        if ($rangeHeader -and $rangeHeader.StartsWith("bytes=")) {
            $rangePart = $rangeHeader.Substring(6)
            $parts = $rangePart.Split("-")
            $start = [long]$parts[0]
            $end = if ($parts[1] -ne "") { [long]$parts[1] } else { $fileSize - 1 }

            if ($start -ge $fileSize) {
                $fileStream.Close()
                $response.StatusCode = 416
                $response.Close()
                continue
            }

            $length = $end - $start + 1
            $response.StatusCode = 206
            $response.Headers.Add("Content-Range", "bytes $start-$end/$fileSize")
            $response.ContentLength64 = $length

            $fileStream.Seek($start, [System.IO.SeekOrigin]::Begin) | Out-Null
            $chunkSize = 65536
            $buffer = New-Object byte[] $chunkSize
            $remaining = $length
            $outStream = $response.OutputStream
            while ($remaining -gt 0) {
                $toRead = [Math]::Min($chunkSize, $remaining)
                $read = $fileStream.Read($buffer, 0, $toRead)
                $outStream.Write($buffer, 0, $read)
                $remaining -= $read
            }
        } else {
            $response.StatusCode = 200
            $response.ContentLength64 = $fileSize
            $chunkSize = 65536
            $buffer = New-Object byte[] $chunkSize
            $outStream = $response.OutputStream
            while ($fileStream.Position -lt $fileStream.Length) {
                $read = $fileStream.Read($buffer, 0, $chunkSize)
                $outStream.Write($buffer, 0, $read)
            }
        }
    } catch {
        # Client disconnected or error - continue serving
    } finally {
        if ($fileStream) { $fileStream.Close() }
        try { $response.Close() } catch {}
    }
}

$listener.Stop()
`;
fs.writeFileSync(path.join(outDir, "server.ps1"), serverScript, "utf8");
console.log("Created: server.ps1");

// Create 启动网站.bat (starts PowerShell HTTP server instead of file:// for video playback)
const batContent = '@echo off\r\ncd /d "%~dp0"\r\npowershell -ExecutionPolicy Bypass -File "server.ps1"\r\n';
fs.writeFileSync(path.join(outDir, "启动网站.bat"), batContent, "utf8");
console.log("Created: 启动网站.bat");

// Create 使用说明.txt
const readmeContent = `章程 CHENG ZHANG - AI视觉创作者作品集
===========================================

如何使用：
1. 将整个文件夹复制到U盘
2. 双击「启动网站.bat」即可在浏览器中打开网站
3. 无需联网，无需安装任何软件
4. 关闭网站时，关闭命令行窗口即可停止服务器

注意事项：
- 请勿删除或移动文件夹内的任何文件
- 网站包含视频文件，请确保U盘有足够空间（建议4GB以上）
- 推荐使用 Chrome 或 Edge 浏览器打开
- 首次启动时Windows可能弹出防火墙提示，点击「允许」即可

联系方式：
微信二维码在网站「联系」页面
`;
fs.writeFileSync(path.join(outDir, "使用说明.txt"), readmeContent, "utf8");
console.log("Created: 使用说明.txt");

console.log("\nDone! Site is ready for USB / file:// deployment.");
