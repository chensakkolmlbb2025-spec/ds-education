# Vercel Deployment Guide - DS Education

## 🚀 Quick Deployment Steps

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "Add New Project"
   - Import your `pixel-perfect-clone` repository

3. **Configure Project**
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Environment Variables** (Optional)
   - Add any environment variables from `.env.example`
   - Click "Environment Variables" in project settings
   - Add variables with their values

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your site will be live at `https://your-project.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # For production deployment
   vercel --prod
   
   # For preview deployment
   vercel
   ```

4. **Follow the prompts**
   - Set up and deploy: Yes
   - Which scope: Select your account
   - Link to existing project: No (first time) / Yes (subsequent)
   - Project name: ds-education (or your preferred name)
   - Directory: ./
   - Auto-detected settings: Yes

---

## 📋 Pre-Deployment Checklist

### ✅ Required Files (Already Created)
- [x] `vercel.json` - Vercel configuration
- [x] `.env.example` - Environment variables template
- [x] `package.json` - Dependencies and scripts
- [x] `vite.config.ts` - Vite configuration

### ✅ Build Test
Run a local build to ensure everything works:
```bash
npm run build
npm run preview
```

### ✅ Environment Variables
If you need environment variables:
1. Copy `.env.example` to `.env.local`
2. Fill in your values
3. Add same variables to Vercel dashboard

---

## 🔧 Vercel Configuration Explained

### `vercel.json` Settings

```json
{
  "buildCommand": "npm run build",       // Command to build your app
  "outputDirectory": "dist",             // Where build files are output
  "framework": "vite",                   // Framework detection
  "rewrites": [...]                      // SPA routing support
}
```

### Key Features Configured:
- ✅ **SPA Routing**: All routes redirect to `index.html`
- ✅ **Asset Caching**: Static assets cached for 1 year
- ✅ **Security Headers**: XSS protection, frame options, content type
- ✅ **Performance**: Optimized cache settings

---

## 🌐 Custom Domain Setup

### Add Custom Domain to Vercel

1. **In Vercel Dashboard**
   - Go to your project
   - Navigate to "Settings" → "Domains"
   - Add your domain: `dseducation.com`

2. **Configure DNS Records**
   Add these records in your domain registrar:

   **For Root Domain (dseducation.com):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   **For WWW Subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Wait for Verification**
   - Vercel will auto-verify (usually 1-2 hours)
   - SSL certificate will be automatically provisioned

---

## 🔄 Continuous Deployment

### Automatic Deployments
Once connected to GitHub, Vercel will automatically:
- ✅ Deploy every push to `main` branch (production)
- ✅ Create preview deployments for pull requests
- ✅ Run build checks before deploying

### Branch Deployments
- `main` branch → Production deployment
- Other branches → Preview deployments
- Pull requests → Preview deployments with unique URLs

---

## 📊 Post-Deployment

### Verify Deployment
After deployment, test these pages:
- ✅ Homepage: `https://your-domain.com/`
- ✅ Services: `https://your-domain.com/services`
- ✅ Contact: `https://your-domain.com/contact`
- ✅ Testimonials: `https://your-domain.com/testimonials`
- ✅ Foundation: `https://your-domain.com/foundation`
- ✅ Partner Countries: `https://your-domain.com/partner/singapore`

### Check Analytics (if configured)
1. Vercel Analytics (built-in)
2. Google Analytics (if GA_TRACKING_ID set)
3. Performance metrics in Vercel dashboard

### Monitor Performance
- Check Vercel dashboard for build times
- Monitor Core Web Vitals
- Review error logs if issues occur

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Test build locally
npm run build

# Check for TypeScript errors
npm run lint

# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### 404 Errors on Routes
- Ensure `vercel.json` has correct rewrites
- Check that build output is in `dist` folder

### Environment Variables Not Working
- Prefix all Vite env vars with `VITE_`
- Add to Vercel dashboard, not just `.env.local`
- Redeploy after adding new env vars

### Slow Performance
- Check asset sizes in build output
- Enable Vercel Analytics for insights
- Consider image optimization

---

## 📈 Optimization Tips

### Performance
1. **Enable Vercel Analytics**
   - Go to Analytics tab in Vercel
   - Enable Web Analytics
   - Monitor Core Web Vitals

2. **Image Optimization**
   - Use WebP format for images
   - Compress images before deployment
   - Consider using Vercel Image Optimization

3. **Code Splitting**
   - Already configured with Vite
   - Routes are lazy-loaded
   - Check bundle size in build output

### SEO
- ✅ Sitemap already created (`/public/sitemap.xml`)
- ✅ Robots.txt configured (`/public/robots.txt`)
- ✅ Meta tags implemented (React Helmet)
- ✅ Structured data added (JSON-LD)

### Security
- ✅ Security headers configured in `vercel.json`
- ✅ HTTPS enforced by Vercel
- ✅ XSS protection enabled
- ✅ Frame options set

---

## 🔗 Useful Links

- **Vercel Documentation**: https://vercel.com/docs
- **Vite Deployment Guide**: https://vitejs.dev/guide/static-deploy.html
- **Your Vercel Dashboard**: https://vercel.com/dashboard
- **Vercel CLI Docs**: https://vercel.com/docs/cli

---

## 🆘 Support

### Vercel Support
- Documentation: https://vercel.com/docs
- Community: https://github.com/vercel/vercel/discussions
- Status: https://www.vercel-status.com/

### Project Issues
- Check build logs in Vercel dashboard
- Review error messages in Functions logs
- Test locally with `npm run build && npm run preview`

---

**Last Updated**: January 29, 2026  
**Version**: 1.0  
**Project**: DS Education - Global Education Consulting

---

## 🎉 You're Ready to Deploy!

Your project is fully configured for Vercel deployment. Simply follow the steps above and your site will be live in minutes!

**Recommended Next Steps:**
1. Test build locally: `npm run build`
2. Push to GitHub
3. Connect to Vercel
4. Deploy! 🚀
