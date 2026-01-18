# Auto-Deployment Setup Guide

## 🔄 How to Enable Automatic Updates

### Option 1: GitHub Integration (Recommended)
1. **Go to Netlify Dashboard**
2. **Add new site** → **Import an existing project**
3. **Connect to GitHub**
4. **Select repository**: `PramodhMakr/websiteBST`
5. **Build settings** (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `dist`
6. **Deploy site**

### ✅ After Setup:
- Make changes locally
- Commit and push to GitHub
- Netlify automatically builds and deploys
- **Live site updates in 2-3 minutes!**

### Option 2: Keep Current Drag & Drop
1. Make changes locally
2. Run: `npm run build`
3. Drag new `dist/` folder to Netlify
4. Site updates manually

## 🎯 Recommended Workflow

### For Auto-Deploy (GitHub Integration):
```bash
# Make your changes
git add .
git commit -m "Your update message"
git push origin main
# 🎉 Netlify auto-deploys!
```

### For Manual Deploy:
```bash
# Make your changes
npm run build
# Drag dist/ folder to Netlify
```

## ⚡ Benefits of Auto-Deploy:
- ✅ Automatic updates on every push
- ✅ Rollback to previous versions
- ✅ Deploy previews for pull requests
- ✅ Build logs and error tracking
- ✅ Custom domains and SSL included

## 🔧 Current Status:
- ❌ Your current deployment: Manual (drag & drop)
- ✅ Ready for: Auto-deploy setup
- 📁 Repository: `PramodhMakr/websiteBST` (already pushed)

**Recommendation: Switch to GitHub integration for automatic updates!**
