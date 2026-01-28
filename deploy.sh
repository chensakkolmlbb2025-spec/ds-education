#!/bin/bash

# DS Education - Vercel Deployment Script
# This script helps you deploy your project to Vercel

set -e

echo "🚀 DS Education - Vercel Deployment Helper"
echo "=========================================="
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if git is initialized
if [ ! -d .git ]; then
    echo -e "${RED}❌ Error: Git repository not initialized${NC}"
    echo "Please run: git init"
    exit 1
fi

echo -e "${GREEN}✓ Git repository found${NC}"

# Check for uncommitted changes
if [[ -n $(git status -s) ]]; then
    echo -e "${YELLOW}⚠ You have uncommitted changes${NC}"
    echo ""
    git status -s
    echo ""
    read -p "Do you want to commit all changes? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git add .
        read -p "Enter commit message: " commit_msg
        git commit -m "$commit_msg"
        echo -e "${GREEN}✓ Changes committed${NC}"
    fi
fi

# Run build test
echo ""
echo "📦 Testing production build..."
npm run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Build successful${NC}"
else
    echo -e "${RED}❌ Build failed - fix errors before deploying${NC}"
    exit 1
fi

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo ""
    echo -e "${YELLOW}⚠ Vercel CLI not found${NC}"
    read -p "Do you want to install it? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        npm install -g vercel
        echo -e "${GREEN}✓ Vercel CLI installed${NC}"
    else
        echo "Please install manually: npm install -g vercel"
        exit 1
    fi
fi

echo ""
echo "=========================================="
echo "Deployment Options:"
echo "=========================================="
echo "1. Deploy to production (vercel --prod)"
echo "2. Deploy preview (vercel)"
echo "3. Push to GitHub only"
echo "4. Exit"
echo ""

read -p "Select option (1-4): " option

case $option in
    1)
        echo ""
        echo "🚀 Deploying to production..."
        vercel --prod
        ;;
    2)
        echo ""
        echo "🔍 Creating preview deployment..."
        vercel
        ;;
    3)
        echo ""
        read -p "Enter remote name (default: origin): " remote
        remote=${remote:-origin}
        read -p "Enter branch name (default: main): " branch
        branch=${branch:-main}
        git push $remote $branch
        echo -e "${GREEN}✓ Pushed to GitHub${NC}"
        echo "Deploy via Vercel dashboard: https://vercel.com/dashboard"
        ;;
    4)
        echo "Deployment cancelled"
        exit 0
        ;;
    *)
        echo -e "${RED}Invalid option${NC}"
        exit 1
        ;;
esac

echo ""
echo -e "${GREEN}=========================================="
echo "✓ Deployment Complete!"
echo "==========================================${NC}"
echo ""
echo "Next steps:"
echo "1. Check deployment status in Vercel dashboard"
echo "2. Test your live site"
echo "3. Configure custom domain (if needed)"
echo ""
