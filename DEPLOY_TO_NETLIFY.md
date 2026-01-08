# 🚀 Quick Netlify Deployment Guide

## Method 1: One-Command Deploy (CLI)

### First Time Setup:

You need to link your local project to your Netlify site.

**Run this command:**

```bash
netlify link
```

This will:

1. Ask you to log in to Netlify (opens browser)
2. Show you a list of your sites
3. Select "talentswype.com" from the list
4. Link your local project to that site

### Deploy (Every Time):

After linking, just run:

```bash
npm run deploy
```

This will:

- ✓ Build your project
- ✓ Deploy to production
- ✓ Show you the live URL

---

## Method 2: Drag & Drop (No CLI needed)

1. Go to: https://app.netlify.com
2. Click on your "talentswype.com" site
3. Go to "Deploys" tab
4. Drag your `dist` folder into the deploy zone
5. Wait 30-60 seconds
6. Done! ✅

---

## After Deployment - Verify Everything Works

Visit these URLs to confirm the fixes:

1. ✅ https://talentswype.com/
2. ✅ https://talentswype.com/blog (should NOT be 404)
3. ✅ https://talentswype.com/founder (should NOT be 404)
4. ✅ https://talentswype.com/robots.txt
5. ✅ https://talentswype.com/sitemap.xml

---

## Then: Update Google Search Console

### 1. Submit Sitemap

- Go to: https://search.google.com/search-console
- Click "Sitemaps"
- Enter: `sitemap.xml`
- Click "Submit"

### 2. Request Indexing

- Click "URL Inspection"
- Test each URL:
  - https://talentswype.com/blog
  - https://talentswype.com/founder
- Click "Request Indexing" for each

### 3. Validate Fixes

- Go to "Pages" → "Why pages aren't indexed"
- Click on "Not found (404)"
- Click "Validate Fix" button
- Repeat for "Page with redirect"

---

## Timeline

- **Deployment**: Instant (30-60 seconds)
- **Validation Start**: Immediate (after you click "Validate Fix")
- **Google Re-crawl**: 3-7 days
- **Full Indexing**: 1-2 weeks

---

## Need Help?

If you see any errors, share:

1. The error message
2. Which step you're on
3. Screenshot if possible
