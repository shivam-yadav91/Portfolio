@echo off
echo ===================================================
echo     Starting Portfolio Project...
echo ===================================================

cd client

IF NOT EXIST "node_modules" (
    echo.
    echo [!] 'node_modules' folder is missing.
    echo [!] Installing dependencies... (This may take a few minutes)
    echo.
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo.
        echo [X] Installation failed. Please check your internet connection.
        pause
        exit /b %ERRORLEVEL%
    )
    echo.
    echo [V] Dependencies installed!
)

echo.
echo ===================================================
echo     Launching Development Server...
echo ===================================================
echo.
echo [!] The browser should open automatically.
echo [!] If not, visit: http://localhost:5173
echo.

call npm run dev
pause
