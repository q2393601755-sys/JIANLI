$logFile = "h:\zc\简历网址\convert-log.txt"
"Step 1: Loading types..." | Out-File $logFile -Encoding UTF8

try {
    Add-Type -AssemblyName System.Runtime.WindowsRuntime
    "Step 1: OK - System.Runtime.WindowsRuntime loaded" | Out-File $logFile -Append -Encoding UTF8
} catch {
    "Step 1: FAILED - $_" | Out-File $logFile -Append -Encoding UTF8
    exit 1
}

$asTaskGeneric = ([System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object {
    $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1'
})[0]

$asTaskAction = ([System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object {
    $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncAction'
})[0]

function AwaitOp($op, $resultType) {
    $m = $asTaskGeneric.MakeGenericMethod($resultType)
    $t = $m.Invoke($null, @($op))
    $t.Wait(-1) | Out-Null
    return $t.Result
}

function AwaitAct($act) {
    $t = $asTaskAction.Invoke($null, @($act))
    $t.Wait(-1) | Out-Null
}

"Step 2: Loading WinRT types..." | Out-File $logFile -Append -Encoding UTF8
[Windows.Media.Transcoding.MediaTranscoder, Windows.Media.Transcoding, ContentType=WindowsRuntime] | Out-Null
[Windows.Media.MediaProperties.MediaEncodingProfile, Windows.Media.MediaProperties, ContentType=WindowsRuntime] | Out-Null
[Windows.Storage.StorageFile, Windows.Storage, ContentType=WindowsRuntime] | Out-Null
[Windows.Storage.StorageFolder, Windows.Storage, ContentType=WindowsRuntime] | Out-Null
[Windows.Storage.CreationCollisionOption, Windows.Storage, ContentType=WindowsRuntime] | Out-Null
"Step 2: OK" | Out-File $logFile -Append -Encoding UTF8

$transcoder = New-Object Windows.Media.Transcoding.MediaTranscoder
$profile = [Windows.Media.MediaProperties.MediaEncodingProfile]::CreateMp4([Windows.Media.MediaProperties.VideoEncodingQuality]::HD720p)
"Step 3: Transcoder and profile created" | Out-File $logFile -Append -Encoding UTF8

$videos = @(
    @{ input = "h:\zc\简历网址\public\videos\echo.mp4";       output = "h:\zc\简历网址\public\videos\echo-h264.mp4" }
    @{ input = "h:\zc\简历网址\public\videos\liqiao.mp4";     output = "h:\zc\简历网址\public\videos\liqiao-h264.mp4" }
    @{ input = "h:\zc\简历网址\public\videos\xihu-vlog.mp4";  output = "h:\zc\简历网址\public\videos\xihu-vlog-h264.mp4" }

foreach ($v in $videos) {
    "Step: Converting $($v.input)..." | Out-File $logFile -Append -Encoding UTF8
    try {
        $sourceFile = AwaitOp ([Windows.Storage.StorageFile]::GetFileFromPathAsync($v.input)) ([Windows.Storage.StorageFile])
        "  Source file loaded: $($sourceFile.Path)" | Out-File $logFile -Append -Encoding UTF8

        $outDir = [System.IO.Path]::GetDirectoryName($v.output)
        $destFolder = AwaitOp ([Windows.Storage.StorageFolder]::GetFolderFromPathAsync($outDir)) ([Windows.Storage.StorageFolder])
        $destFile = AwaitOp ($destFolder.CreateFileAsync([System.IO.Path]::GetFileName($v.output), [Windows.Storage.CreationCollisionOption]::ReplaceExisting)) ([Windows.Storage.StorageFile])
        "  Dest file created: $($destFile.Path)" | Out-File $logFile -Append -Encoding UTF8

        $prep = AwaitOp ($transcoder.PrepareFileTranscodeAsync($sourceFile, $destFile, $profile)) ([Windows.Media.Transcoding.PrepareTranscodeResult])

        if ($prep.CanTranscode) {
            "  Transcoding..." | Out-File $logFile -Append -Encoding UTF8
            AwaitAct ($prep.TranscodeAsync())
            "  SUCCESS" | Out-File $logFile -Append -Encoding UTF8
        } else {
            "  FAIL: $($prep.FailureReason)" | Out-File $logFile -Append -Encoding UTF8
        }
    } catch {
        "  ERROR: $_" | Out-File $logFile -Append -Encoding UTF8
    }
}

"Done." | Out-File $logFile -Append -Encoding UTF8
