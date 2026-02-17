This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deploying to Netlify (2026 guide)

This repository is configured for Netlify with a root `netlify.toml` that points Netlify to the app folder (`food-bev-template`) and sets a compatible Node version.

### 1) Push this repo to GitHub/GitLab/Bitbucket

Netlify works best with Next.js when it builds from your Git provider.

### 2) Create the site in Netlify

1. Log in to Netlify.
2. Click **Add new project** → **Import an existing project**.
3. Select your Git provider and this repository.
4. Keep the detected settings from `netlify.toml`.
5. Click **Deploy site**.

### 3) Environment variables (if needed)

If you add secrets later (API keys, etc.), add them in:

- **Site configuration** → **Environment variables**

Then redeploy.

### 4) Verify deployment

After deploy:

- Open the Netlify URL.
- Check key routes.
- If you use forms/functions later, verify those endpoints in production.

### 5) Future updates

Every push to your configured branch (usually `main`) triggers a new deploy automatically.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
