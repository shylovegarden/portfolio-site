# Jonah Eastin - Senior Diagnostic Engineer Portfolio

This is a modern, high-velocity Next.js and Tailwind CSS portfolio built to showcase live production apps (like SHY) and AI-augmented capabilities.

## Features
- **Next.js App Router**: Optimized, fast static site generation
- **Tailwind CSS v4**: Beautiful, minimalist styling with deep dark palettes (`bg-slate-950`) and electric blue accents
- **Responsive Layout**: Designed for all screen sizes (mobile and desktop)
- **Componentized Structure**: Easy to add more projects and update the resume link

## Quickstart (Local Development)

```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment Instructions (Vercel)

Deploying to Vercel is free and takes under a minute.

### Step 1: Push to GitHub

If you haven't already, push this code to a new GitHub repository:

```bash
# Initialize git and add files
git init
git add .
git commit -m "Deploy senior diagnostic portfolio site"

# If using GitHub CLI:
gh repo create portfolio-site --public --source=. --push

# If NOT using GitHub CLI, create an empty repo on github.com manually and run:
# git remote add origin https://github.com/YOUR_USERNAME/portfolio-site.git
# git branch -M main
# git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **Add New Project**.
3. Select your `portfolio-site` repository.
4. Vercel will auto-detect Next.js. Click **Deploy**.
5. Within 60 seconds, your portfolio will be live at a URL like `portfolio-site-xyz.vercel.app`.

### Next Steps (Outreach)

Once live, copy your Vercel URL and send it to recruiters in the St. Louis area using the provided outreach template.
