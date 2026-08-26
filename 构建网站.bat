@echo off
chcp 65001 >nul
echo ==========================================
echo   正在构建网站，请稍等...
echo ==========================================
echo.

set PATH=C:\Program Files\nodejs;%PATH%

cd /d "%~dp0"

call npm run build

if %errorlevel% equ 0 (
    echo.
    echo ==========================================
    echo   构建成功！
    echo   网站文件在 out 文件夹里
    echo   把 out 文件夹复制到U盘即可使用
    echo ==========================================
    echo.
    echo 正在打开 out 文件夹...
    explorer "out"
) else (
    echo.
    echo 构建失败，请检查错误信息
)

pause
