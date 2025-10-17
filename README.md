# Yashvanth R - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, featuring a contact form with email functionality, resume download, and smooth animations.

## 🚀 Features

- **Modern Design**: Clean, professional UI with dark theme
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Contact Form**: Functional contact form with email notifications
- **Resume Download**: One-click resume download functionality
- **Smooth Animations**: Framer Motion animations for enhanced UX
- **Social Links**: Direct links to social media profiles
- **Performance Optimized**: Built with Next.js 14 App Router

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + Custom Components
- **Animations**: Framer Motion
- **Email Service**: Nodemailer + SendGrid/Gmail SMTP
- **Icons**: React Icons
- **Font**: Geist Font Family

## 📧 Email Configuration

The contact form supports two email services:

### SendGrid (Production - Recommended)
1. Create account at [SendGrid](https://sendgrid.com)
2. Get API key from Settings → API Keys
3. Add to environment variables

### Gmail SMTP (Development/Fallback)
1. Enable 2-Factor Authentication on Gmail
2. Generate App Password: Account → Security → App passwords
3. Add credentials to environment variables

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

   Update `.env.local` with your credentials:
   ```env
   # Email Configuration
   # SendGrid (Production)
   SENDGRID_API_KEY=your_sendgrid_api_key_here

   # Gmail SMTP (Development/Fallback)
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_gmail_address@gmail.com
   SMTP_PASS=your_gmail_app_password_here

   # Email Settings
   FROM_EMAIL=your_email@gmail.com
   TO_EMAIL=your_email@gmail.com
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.js          # Email API endpoint
│   ├── contact/
│   │   └── page.jsx              # Contact page
│   ├── work/
│   │   └── page.jsx              # Work/Projects page
│   ├── globals.css               # Global styles
│   ├── layout.js                 # Root layout
│   └── page.jsx                  # Homepage
├── components/
│   ├── ui/                       # Reusable UI components
│   ├── Photo.jsx                 # Profile photo component
│   ├── Social.jsx                # Social links component
│   └── Stats.jsx                 # Statistics component
├── public/
│   ├── assets/                   # Static assets
│   └── resume/                   # Resume files
├── .env.local                    # Environment variables
├── .env.example                  # Environment template
└── README.md
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Deploy to Vercel**
   ```bash
   npm run build
   ```
   
   Or use the [Vercel Platform](https://vercel.com/new)

2. **Environment Variables**
   
   Add these in Vercel Dashboard → Settings → Environment Variables:
   - `SENDGRID_API_KEY`
   - `FROM_EMAIL`
   - `TO_EMAIL`
   - `SMTP_USER` (if using Gmail fallback)
   - `SMTP_PASS` (if using Gmail fallback)

### Other Platforms

The app can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📧 Contact Form API

The contact form uses a Next.js API route (`/api/contact`) that:

1. **Validates** form data
2. **Tries SendGrid** first (if configured)
3. **Falls back to Gmail SMTP** if SendGrid fails
4. **Returns JSON response** with success/error status

### API Endpoint: `POST /api/contact`

**Request Body:**
```json
{
  "firstname": "John",
  "lastname": "Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "service": "frontend",
  "message": "Hello, I'd like to work with you!"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully via SendGrid"
}
```

### Email Templates
- Customize email HTML in `app/api/contact/route.js`
- Update email subject and content

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

