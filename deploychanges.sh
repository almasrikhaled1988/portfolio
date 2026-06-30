#!/bin/bash

# Configuration
PROJECT_ROOT="/home/kh/APPS/portfolio/portfolio"
DEPLOY_DIR="/var/www/portfolio"

echo "🚀 Starting Portfolio Deployment..."

# 1. Navigate to project
cd $PROJECT_ROOT

# 2. Install dependencies (in case of new ones)
echo "📥 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ npm install failed. Aborting deployment."
    exit 1
fi

# 3. Build Frontend
echo "📦 Building frontend..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Aborting deployment."
    exit 1
fi

# 4. Deploy Static Files to Nginx
echo "🚚 Deploying to $DEPLOY_DIR..."
sudo rm -rf "$DEPLOY_DIR"/*
sudo cp -r dist/* "$DEPLOY_DIR/"

# 5. Reload Nginx
echo "🔄 Reloading Nginx..."
sudo nginx -t

if [ $? -ne 0 ]; then
    echo "❌ Nginx config test failed. Check your nginx configuration."
    exit 1
fi

sudo systemctl reload nginx
echo "✅ Nginx reloaded"

echo ""
echo "✅ Portfolio Deployment Complete! Live at: https://portfolio.khaledalmasri.eu"
