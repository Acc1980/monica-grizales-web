#!/bin/bash
set -e

echo "=== Deploying Mónica Grizales Web ==="

APP_DIR="/var/www/monica-grizales"

cd "$APP_DIR"

echo ">> Pulling latest changes..."
git pull origin main

echo ">> Installing dependencies..."
npm ci --production=false

echo ">> Building application..."
npm run build

echo ">> Restarting PM2..."
pm2 restart monica-grizales --update-env || pm2 start ecosystem.config.js

echo ">> Saving PM2 process list..."
pm2 save

echo "=== Deploy complete ==="
