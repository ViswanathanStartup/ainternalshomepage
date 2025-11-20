# AInternals Homepage

A modern, single-page website showcasing developer tools that solve real problems. Built for developers who want practical, easy-to-use tools without the complexity.

## 🎯 About AInternals

AInternals is a collection of **150+ developer tools** organized into 15 categories, designed to solve everyday problems developers face. Each tool is:

- ✅ **Practical** - Solves real problems you face daily
- ✅ **Simple** - Easy to launch with minimal setup
- ✅ **Quality-focused** - Well-crafted with attention to detail
- ✅ **Free** - No commercial intent, built for the developer community

### Tool Categories

1. **Daily Dev Annoyances** - Quick fixes for everyday frustrations
2. **Code Quality & Analysis** - Improve code health and maintainability
3. **Documentation & Communication** - Better docs and team collaboration
4. **Testing & QA** - Comprehensive testing and quality assurance
5. **Performance & Optimization** - Speed up your applications
6. **Collaboration & Team Tools** - Work better with your team
7. **Learning & Career** - Grow your skills and advance your career
8. **Data & API Tools** - Work with APIs and data formats
9. **DevOps & Infrastructure** - Deploy and manage infrastructure
10. **Git & Version Control** - Master version control workflows
11. **Security & Privacy** - Secure your applications
12. **Frontend Specific** - Tools for frontend development
13. **Backend Specific** - Backend development utilities
14. **Mobile Development** - Mobile app development tools
15. **Miscellaneous Productivity** - Boost your daily productivity

## 🚀 Features

- **Modern Design**: Clean, dark-themed UI with gradient accents
- **Smooth Animations**: Framer Motion animations for engaging UX
- **Category Filtering**: Filter tools by category with interactive tabs
- **Responsive Design**: Works seamlessly across all devices
- **Tools Showcase**: Scalable system to display all 150+ tools
- **Live Status Badges**: See which tools are live vs coming soon
- **Direct Links**: Each tool links to its own subdomain (e.g., jsondiffviewer.ainternals.com)

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11.0
- **Deployment**: Vercel

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ViswanathanStartup/ainternalshomepage.git
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
│   ├── globals.css           # Global styles and animations
│   ├── layout.tsx            # Root layout with metadata
│   ├── page.tsx              # Main homepage with tools showcase
│   ├── privacy/page.tsx      # Privacy policy
│   ├── terms/page.tsx        # Terms of service
│   ├── cookies/page.tsx      # Cookie policy
│   └── api/
│       └── waitlist/
│           └── route.ts      # Email waitlist API endpoint
├── data/
│   └── tools.ts              # Tools data and categories
├── public/                   # Static assets
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

## 🔧 Adding New Tools

To add a new tool to the homepage:

1. Open `data/tools.ts`
2. Add a new entry to the `tools` array:

```typescript
{
  id: 'your-tool-id',
  name: 'Your Tool Name',
  description: 'Brief description of what your tool does',
  url: 'https://yourtool.ainternals.com',
  category: 'Daily Dev Annoyances', // Choose from existing categories
  tags: ['tag1', 'tag2', 'tag3'],
  status: 'live' // or 'coming-soon'
}
```

3. The tool will automatically appear on the homepage under the correct category tab!

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

1. Push your code to GitHub

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "New Project"

4. Import your repository

5. Vercel will automatically detect Next.js settings

6. Click "Deploy"

### Environment Variables

The homepage requires minimal configuration. If you need to add features requiring environment variables:

1. Create a `.env.local` file locally
2. Add your variables
3. In Vercel dashboard: Settings → Environment Variables
4. Add the same variables there

## 🎨 Customization

### Update Content

- **Tagline & Description**: Edit the text in `app/page.tsx`
- **Tool Categories**: Modify `data/tools.ts` categories array
- **Tools List**: Add/edit tools in `data/tools.ts` tools array
- **LinkedIn Profile**: Update the LinkedIn URL in `app/page.tsx`

### Styling

- **Colors**: Edit `tailwind.config.js` to change the color scheme
- **Animations**: Modify Framer Motion properties in `app/page.tsx`
- **Layout**: Adjust the grid layout in the tools section

### Legal Pages

- **Privacy Policy**: Edit `app/privacy/page.tsx`
- **Terms of Service**: Edit `app/terms/page.tsx`
- **Cookie Policy**: Edit `app/cookies/page.tsx`

## 📝 Build for Production

```bash
npm run build
npm start
```

The production build is optimized for performance with:
- Server-side rendering (SSR)
- API routes for email collection
- Optimized images and assets
- Minified CSS and JavaScript

## 🗺️ Roadmap

- [x] Single-page homepage design
- [x] Category-based tool filtering
- [x] JSON Diff Viewer (Live)
- [ ] Add remaining 149 tools across all categories
- [ ] Search functionality for tools
- [ ] Tool usage analytics
- [ ] Individual tool pages with detailed documentation
- [ ] User favorites/bookmarking system

## 🤝 Contributing

This is a personal project, but suggestions are welcome! Feel free to:
- Open issues for bug reports or feature requests
- Submit PRs for improvements
- Share your tool ideas

## 📄 License

This project is licensed under the MIT License.

## 💬 Connect

Built by [Viswanathan Santhanam](https://www.linkedin.com/in/viswanathansanthanam/)

For questions or collaboration: Connect on LinkedIn

---

**Built by a developer who cares about solving real problems** ❤️
