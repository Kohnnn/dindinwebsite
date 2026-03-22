$ErrorActionPreference = "Stop"
Write-Host "Creating Next.js App in portfolio-app..."
npx --yes create-next-app@14.2.15 portfolio-app --typescript --eslint --tailwind --app --src-dir --import-alias "@/*" --use-npm

Write-Host "Moving files to root..."
Get-ChildItem -Path "portfolio-app" -Force | Move-Item -Destination "." -Force
Remove-Item -Path "portfolio-app" -Recurse -Force

Write-Host "Installing additional dependencies..."
npm install framer-motion lucide-react clsx tailwind-merge resend
Write-Host "Setup finished successfully."
