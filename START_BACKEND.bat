@echo off
cd backend
echo Installing backend dependencies...
call npm install
echo Starting backend...
npm run dev
pause
