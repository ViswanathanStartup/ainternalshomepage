# AInternals Homepage

A beautiful, modern homepage for AInternals - the essential utilities that millions of AI developers use daily.

## 🚀 Features

- **Modern Design**: Built with Next.js 14, React 18, and Tailwind CSS
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Fully Responsive**: Works seamlessly across all devices
- **Optimized for Performance**: Static export for blazing-fast load times
- **Ready for Vercel**: One-click deployment to Vercel

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ainternalshomepage
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
ainternalshomepage/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── Hero.tsx              # Hero section
│   ├── Vision.tsx            # Vision section
│   ├── Mission.tsx           # Mission section
│   ├── Values.tsx            # Company values
│   ├── CTA.tsx               # Call-to-action section
│   └── Footer.tsx            # Footer component
├── public/                   # Static assets
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to link your project

### Option 2: Deploy via Git

1. Push your code to GitHub/GitLab/Bitbucket

2. Go to [vercel.com](https://vercel.com)

3. Click "New Project"

4. Import your repository

5. Vercel will automatically detect Next.js and configure the build settings

6. Click "Deploy"

### Environment Variables (if needed)

No environment variables are required for the basic homepage. If you add features that need them:

1. Create a `.env.local` file
2. Add your variables
3. In Vercel dashboard, go to Settings → Environment Variables
4. Add the same variables

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      },
    },
  },
}
```

### Content

- **Hero Section**: Edit `components/Hero.tsx`
- **Vision**: Edit `components/Vision.tsx`
- **Mission**: Edit `components/Mission.tsx`
- **Values**: Edit `components/Values.tsx`
- **CTA**: Edit `components/CTA.tsx`
- **Footer**: Edit `components/Footer.tsx`

## 📝 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `out` folder.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 💬 Support

For support, email support@ainternals.com or join our Discord community.

---

Built with ❤️ by the AInternals team
Ainternals home page
