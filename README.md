# Synthetic blog website

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/vicentezavasdki-1170s-projects/v0-synthetic-blog-website)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/uCqeXD4q4Bf)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/vicentezavasdki-1170s-projects/v0-synthetic-blog-website](https://vercel.com/vicentezavasdki-1170s-projects/v0-synthetic-blog-website)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/uCqeXD4q4Bf](https://v0.app/chat/uCqeXD4q4Bf)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## Cloudflare Deployment

This project is configured to be deployed as a Cloudflare Worker with Assets.

### For Cloudflare Dashboard (Workers & Pages)

When setting up deployment in the Cloudflare dashboard, use these settings:

- **Build Command**: `npx @cloudflare/next-on-pages`
- **Build Output Directory**: `.vercel/output/static`

The `@cloudflare/next-on-pages` command will automatically run `next build` first, then convert the output for Cloudflare Workers.

### Manual Deployment from CLI

\`\`\`bash
# Build the Next.js app first
npm run build

# Then build and deploy with Cloudflare
npm run pages:build
npx wrangler deploy
\`\`\`

### Local Development

To preview the application as it would run on Cloudflare:

\`\`\`bash
npm run pages:preview
\`\`\`

### Configuration

- **Compatibility Flags**: The `wrangler.toml` file automatically sets the `nodejs_compat` flag.
- **Environment Variables**: Set your environment variables in the Cloudflare dashboard or `.dev.vars` for local development.
