# Nishant Pharma Website

A frontend-only Next.js website for Nishant Pharma, ready to deploy on Vercel.

## Prerequisites

- Node.js `>=22.13.0`
- No database, API, worker, or server configuration is required.

## Deploy on Vercel

1. Import `https://github.com/0001omshukla/Nishantpharma` into Vercel.
2. Keep the framework preset as **Next.js**.
3. Use the default build command, or set it to `npm run build`.
4. Leave the output directory and install command at their defaults.

Vercel will install dependencies, run `next build`, and serve the generated Next.js application.

## Project Shape

- edit site code under `app/`
- `app/` contains the pages and components
- `public/` contains static images and other assets
- `next.config.ts` contains the Next.js configuration

This project has no backend routes, database, authentication service, or server
actions. The contact form opens WhatsApp or the visitor's email client directly.

## Local Commands

- `npm install`: install dependencies
- `npm run dev`: start the Next.js development server
- `npm run build`: create the production build
- `npm run start`: serve the production build
- `npm run lint`: run ESLint

## Learn More

- [Next.js documentation](https://nextjs.org/docs)
- [Vercel documentation](https://vercel.com/docs)
