# Oyffa - AI, Automation & Custom Software Solutions

[![Website](https://img.shields.io/website?url=https%3A%2F%2Foyffa.com)](https://oyffa.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)

> Research-driven product company specializing in Artificial Intelligence, Automation, and Custom Software Solutions. Founded by IIT alumni engineers.

## 🚀 Live Website

Visit our website: [https://oyffa.com](https://oyffa.com)

## 🏢 About Oyffa

Oyffa is a research-driven technology company founded by IIT alumni, specializing in:

- **AI & Machine Learning**: Custom AI solutions, LLM integration, NLP, Computer Vision
- **Automation Solutions**: RPA, Workflow automation, ETL pipelines
- **Mobile Development**: Native iOS/Android, Flutter, Progressive Web Apps
- **Web Development**: React.js, Next.js, SaaS platforms, Cloud-native architecture
- **Quantum Computing**: Research and development in quantum algorithms
- **Low-Code/No-Code**: Rapid development platforms and citizen developer tools

## 🛠️ Technology Stack

### Frontend
- **Framework**: React 18.3.1 with TypeScript
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: Lucide React
- **Build Tool**: Vite 5.4.2
- **Deployment**: Vercel/Netlify ready

### Development Tools
- **Linting**: ESLint with TypeScript support
- **Code Quality**: Prettier, Husky pre-commit hooks
- **Package Manager**: npm
- **Version Control**: Git with conventional commits

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/oyffa-website.git
cd oyffa-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
```

## 📁 Project Structure

```
oyffa-website/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── styles/           # Global styles
│   │   └── global.css
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # App entry point
│   └── vite-env.d.ts     # Vite type definitions
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── README.md            # Project documentation
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#0066ff) to Purple (#6c5ce7) gradient
- **Secondary**: Teal (#00b894) accents
- **Neutral**: Gray scale from #1a1a1a to #fafafa
- **Status**: Success, Warning, Error variants

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800
- **Scale**: Responsive typography with proper line heights

### Spacing
- **System**: 8px base unit (0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem, 6rem)
- **Responsive**: Mobile-first approach with proper breakpoints

## 📱 Responsive Design

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px - 1400px
- **Large Desktop**: 1400px+

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_APP_TITLE=Oyffa
VITE_CONTACT_EMAIL=hello@oyffa.com
VITE_CONTACT_PHONE=+91 8607629309
```

### Tailwind Configuration
The project uses a custom Tailwind configuration with:
- Custom color palette
- Extended spacing scale
- Custom animations
- Responsive breakpoints

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify
```bash
# Build command: npm run build
# Publish directory: dist
```

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Convention
We use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new service section
fix: resolve mobile navigation issue
docs: update README with deployment instructions
style: improve button hover animations
refactor: optimize component structure
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Oyffa Team**
- **Website**: [https://oyffa.com](https://oyffa.com)
- **Email**: hello@oyffa.com
- **Phone**: +91 8607629309
- **Business Inquiries**: hello@oyffa.com
- **Research Collaboration**: research@oyffa.com

## 🏆 Founded by IIT Alumni

Oyffa is proudly founded by IIT alumni engineers with expertise in:
- Artificial Intelligence & Machine Learning
- Software Architecture & System Design
- Research & Development
- Product Management
- Business Strategy

---

**Built with ❤️ by the Oyffa Team**

*Transforming Ideas into Intelligent Solutions*