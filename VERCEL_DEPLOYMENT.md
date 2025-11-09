# Vercel Deployment Guide

This guide will help you deploy your Next.js portfolio website to Vercel.

## Prerequisites

1. A Vercel account (sign up at [vercel.com](https://vercel.com))
2. A MongoDB database (use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for free cloud hosting)
3. Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### 1. Set up MongoDB Atlas (if not already done)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. Get your connection string (MongoDB URI)
5. Whitelist your IP address (or use `0.0.0.0/0` for all IPs in development)

### 2. Prepare your code

The project has been configured for Vercel deployment:
- ✅ Express backend converted to Next.js API routes
- ✅ MongoDB connection optimized for serverless functions
- ✅ Environment variables configured
- ✅ Vercel configuration file created

### 3. Deploy to Vercel

#### Option A: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Follow the prompts to complete deployment

#### Option B: Deploy via GitHub (Recommended)

1. Push your code to GitHub (if not already done)
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Add environment variables (see below)
7. Click "Deploy"

### 4. Configure Environment Variables

In your Vercel project settings, add the following environment variables:

- **MONGODB_URI**: Your MongoDB connection string
  - Format: `mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority`
- **NODE_ENV**: Set to `production`

#### How to add environment variables in Vercel:

1. Go to your project dashboard on Vercel
2. Click on "Settings"
3. Click on "Environment Variables"
4. Add each variable:
   - Name: `MONGODB_URI`
   - Value: Your MongoDB connection string
   - Environment: Production, Preview, Development (select all)
5. Click "Save"

### 5. Verify Deployment

1. After deployment, Vercel will provide you with a URL
2. Visit your deployed website
3. Test the contact form to ensure the API is working
4. Check Vercel logs for any errors

## Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact API endpoint
│   └── ...
├── lib/
│   └── mongodb.ts                # MongoDB connection utility
├── models/
│   └── Contact.ts                # Contact model
└── vercel.json                   # Vercel configuration
```

## Important Notes

1. **MongoDB Connection**: Make sure your MongoDB Atlas cluster allows connections from Vercel's IP addresses. Use `0.0.0.0/0` in Network Access to allow all IPs (suitable for development).

2. **Environment Variables**: Never commit `.env.local` to Git. The `.gitignore` file is already configured to ignore it.

3. **API Routes**: All API routes are now in `app/api/` and work as serverless functions on Vercel.

4. **Backend Directory**: The `backend/` directory is no longer needed for Vercel deployment. You can keep it for reference or remove it.

## Troubleshooting

### Connection Issues

If you're experiencing MongoDB connection issues:
- Verify your MongoDB URI is correct
- Check that your IP is whitelisted in MongoDB Atlas
- Ensure your MongoDB cluster is running
- Check Vercel logs for detailed error messages

### Build Errors

If the build fails:
- Check that all dependencies are in `package.json`
- Verify TypeScript types are correct
- Check Vercel build logs for specific errors

### API Route Issues

If API routes are not working:
- Verify the route path matches (`/api/contact`)
- Check that environment variables are set correctly
- Review serverless function logs in Vercel dashboard

## Next Steps

- Set up custom domain in Vercel settings
- Configure preview deployments for pull requests
- Set up monitoring and analytics
- Add authentication if needed for admin routes

## Support

For more information, refer to:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)

