$ErrorActionPreference = "Stop"
New-Item -ItemType Directory -Force -Path "temp_stage"
Move-Item -Path "DESIGN.md" -Destination "temp_stage" -ErrorAction SilentlyContinue
Move-Item -Path "*.html" -Destination "temp_stage" -ErrorAction SilentlyContinue
Move-Item -Path "*.jpeg" -Destination "temp_stage" -ErrorAction SilentlyContinue
Move-Item -Path "*.md" -Destination "temp_stage" -ErrorAction SilentlyContinue

Write-Host "Creating Next.js App..."
npx --yes create-next-app@14.2.15 . --typescript --eslint --tailwind --app --src-dir --import-alias "@/*" --use-npm

Write-Host "Moving files back..."
Move-Item -Path "temp_stage\*" -Destination "." -Force
Remove-Item -Path "temp_stage" -Recurse -Force

Write-Host "Installing additional dependencies..."
npm install framer-motion lucide-react clsx tailwind-merge resend
Write-Host "Setup finished successfully."
