# 🚀 How to Deploy to GitHub Pages

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (e.g., `portfolio`)
3. **Don't** initialize with README (we already have files)
4. Make it **public** (required for free GitHub Pages)

## Step 2: Update Vite Config

**Important**: Open `vite.config.ts` and change the `base` to match your repo name:

```typescript
base: '/your-repo-name/', // e.g., '/portfolio/'
```

If your repo is named `portfolio`, use `/portfolio/`
If your repo is named `rajarshimalo.github.io`, use `/`

## Step 3: Initialize Git and Push

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial commit: Premium data analytics portfolio

Co-Authored-By: Claude <noreply@anthropic.com>"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

## Step 5: Wait for Deployment

- The GitHub Action will automatically build and deploy
- Check the **Actions** tab to see deployment progress
- Once complete (green checkmark), your site will be live!

## Your Live URL

Your portfolio will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

Example: `https://rajarshimalo.github.io/portfolio/`

---

## Alternative: Manual Deployment (if GitHub Actions doesn't work)

```bash
# Build the project
npm run build

# Install gh-pages package
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

---

## Using Custom Domain (Optional)

If you have a custom domain:

1. Add a `CNAME` file in the `public/` folder with your domain:
   ```
   yourdomain.com
   ```

2. Configure your domain's DNS with a CNAME record pointing to:
   ```
   YOUR_USERNAME.github.io
   ```

3. In GitHub Settings → Pages, enter your custom domain

---

## Troubleshooting

**Problem**: Blank page after deployment
- **Solution**: Check that `base` in `vite.config.ts` matches your repo name

**Problem**: 404 errors for assets
- **Solution**: Make sure `base` has a trailing slash: `/portfolio/`

**Problem**: GitHub Actions failed
- **Solution**: Check Settings → Actions → General → Workflow permissions
- Ensure "Read and write permissions" is enabled

**Problem**: gh-pages branch not appearing
- **Solution**: Wait a few minutes after first push, then refresh

---

## Quick Commands Reference

```bash
# Start development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Push updates
git add .
git commit -m "Update: [your changes]"
git push
```

Every time you push to the `main` branch, GitHub Actions will automatically rebuild and deploy your site! 🎉
