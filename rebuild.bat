@echo off
chcp 65001 >nul
echo Cleaning temp...
powershell -NoProfile -Command "Remove-Item 'C:\Users\ADMINI~1\AppData\Local\Temp\trae-agent-toolhost\jobs\*' -Recurse -Force -ErrorAction SilentlyContinue"
echo Building...
cd /d "h:\zc\简历网址"
call npm run build:usb > "h:\zc\简历网址\build-output.txt" 2>&1
echo BUILD_EXIT_CODE=%ERRORLEVEL% >> "h:\zc\简历网址\build-output.txt"
