@echo off
cd frontend
echo Installing frontend dependencies...
call npm install
echo Starting frontend...
npm run dev
pause
