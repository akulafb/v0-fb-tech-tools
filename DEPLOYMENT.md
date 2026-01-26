# Vercel Deployment Guide - GitHub Integration

## Quick Setup Steps

### 1. Sign in to Vercel
- Go to [vercel.com](https://vercel.com)
- Sign in with your GitHub account (recommended for seamless integration)

### 2. Import Your Repository
1. Click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find and select **`akulafb/v0-ai-tool-repertoire`**
4. Click **"Import"**

### 3. Configure Project Settings
Vercel will auto-detect your Next.js project. Verify these settings:

- **Framework Preset:** Next.js (auto-detected)
- **Root Directory:** `./` (leave as default)
- **Build Command:** `npm run build` (or `pnpm build` if you prefer)
- **Output Directory:** `.next` (auto-detected)
- **Install Command:** `npm install` (or `pnpm install`)

### 4. Environment Variables (if needed)
If your app requires any environment variables:
- Click **"Environment Variables"**
- Add any required variables (e.g., API keys, database URLs)
- For now, your app doesn't seem to need any based on the code

### 5. Deploy!
- Click **"Deploy"**
- Vercel will:
  - Install dependencies
  - Build your Next.js app
  - Deploy to production
  - Provide you with a live URL (e.g., `v0-ai-tool-repertoire.vercel.app`)

## Continuous Deployment

Once connected, Vercel will automatically:
- ✅ Deploy every push to `main` branch
- ✅ Create preview deployments for pull requests
- ✅ Show build logs and deployment status
- ✅ Provide instant rollback capabilities

## Custom Domain (Optional)

After deployment:
1. Go to your project settings
2. Navigate to **"Domains"**
3. Add your custom domain
4. Follow DNS configuration instructions

## Your Repository
- **GitHub:** https://github.com/akulafb/v0-ai-tool-repertoire
- **Branch:** `main`

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility (Vercel uses Node 18+ by default)

### Environment Variables
- Add any required env vars in Vercel dashboard
- They'll be available at build time and runtime

### Need Help?
- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
