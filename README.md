# CMAKEY - Corporate B2B Portal

A modern, professional website for CMAKEY, designed to showcase diverse industrial operations, build credibility with major clients, and efficiently capture and manage partner inquiries.

## Overview

CMAKEY is a corporate B2B portal that serves as a digital storefront for industrial business operations. It combines stunning visual design with robust functionality to establish a strong online presence and facilitate client engagement.

## Features

- **Professional Showcase**: Display comprehensive information about industrial operations
- **Credibility Building**: Present company credentials and achievements to potential clients
- **Inquiry Management**: Capture and manage partner inquiries efficiently
- **Responsive Design**: Fully responsive and mobile-optimized interface
- **Modern UI/UX**: Smooth animations and interactive elements with Framer Motion
- **Email Notifications**: Automated email system for inquiry confirmations and notifications

## Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Email Service**: Nodemailer
- **Image Hosting**: Cloudinary & Unsplash

## Project Structure

```
cmakey/
├── .env.example          # Environment variables template
├── .eslintrc.json        # ESLint configuration
├── .gitignore            # Git ignore rules
├── next.config.ts        # Next.js configuration
├── next-env.d.ts         # TypeScript definitions for Next.js
├── package.json          # Project dependencies
└── README.md             # This file
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- SMTP credentials (Gmail or other email service)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/denare/cmakey.git
   cd cmakey
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Configure your environment**
   
   Edit `.env.local` with your actual credentials:
   ```dotenv
   # Email Configuration (Nodemailer)
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=465

   # Admin Credentials
   ADMIN_USERNAME=your_admin_username
   ADMIN_PASSWORD=your_admin_password
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Configuration

### Email Setup (Gmail)

1. Enable 2-Step Verification on your Google Account
2. Generate an [App Password](https://support.google.com/accounts/answer/185833)
3. Use the app password in the `EMAIL_PASS` environment variable

### Image Hosting

The application is configured to fetch images from:
- **Unsplash** (`images.unsplash.com`) - Free stock photos
- **Cloudinary** (`res.cloudinary.com`) - Optimized image delivery

## Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Usage

### Capturing Inquiries

The portal provides forms for potential clients to submit inquiries. These submissions are:
- Automatically validated on the client side
- Sent to the admin email for review
- Tracked for follow-up

### Admin Panel

Access the admin credentials configured in your `.env.local` file to manage inquiries and site content.

## Code Quality

- **Linting**: ESLint with Next.js recommended rules
- **TypeScript**: Strict type checking enabled
- **Code Style**: Consistent formatting across the project

## Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Deploy to Other Platforms

This Next.js application can be deployed to any platform that supports Node.js:
- AWS
- Azure
- DigitalOcean
- Heroku
- Self-hosted servers

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `EMAIL_USER` | SMTP email address | `cmakeycompanylimited@gmail.com` |
| `EMAIL_PASS` | SMTP password/app password | `your-app-password-here` |
| `EMAIL_HOST` | SMTP server host | `smtp.gmail.com` |
| `EMAIL_PORT` | SMTP server port | `465` |
| `ADMIN_USERNAME` | Admin panel username | `your_admin_username` |
| `ADMIN_PASSWORD` | Admin panel password | `your_admin_password` |

## Performance Optimization

- **Image Optimization**: Automatic image optimization with Next.js
- **Code Splitting**: Automatic code splitting per route
- **Font Optimization**: Optimized font loading
- **Remote Image Patterns**: Configured for Unsplash and Cloudinary

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

This project is proprietary software. All rights reserved.

## Contact & Support

For inquiries or support regarding this project, please contact:
- **Company**: CMAKEY
- **Email**: cmakeycompanylimited@gmail.com
- **Email**: support@cmakey.com

## Changelog

### Version 1.0.0
- Initial release
- B2B portal setup
- Inquiry management system
- Email notifications

---

**Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and Framer Motion, with Denis D as the developer**
