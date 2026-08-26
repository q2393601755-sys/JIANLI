const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 8898;
const root = path.join(__dirname, "..", "out");

const mime = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".txt": "text/plain",
  ".mp3": "audio/mpeg",
};

http
  .createServer((req, res) => {
    let urlPath = decodeURIComponent(req.url.split("?")[0]);
    if (urlPath.endsWith("/")) urlPath += "index.html";
    const filePath = path.join(root, urlPath);
    if (!filePath.startsWith(root) || !fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
      res.writeHead(404);
      res.end("Not Found");
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      "Content-Type": mime[ext] || "application/octet-stream",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "Accept-Ranges": "bytes",
    });
    fs.createReadStream(filePath).pipe(res);
  })
  .listen(port, () => console.log(`Test server on ${port}`));
