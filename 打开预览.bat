@echo off
chcp 65001 >nul
echo ==========================================
echo   正在启动网站服务器...
echo ==========================================
echo.

cd /d "%~dp0\out"

powershell -ExecutionPolicy Bypass -File "server.ps1"
