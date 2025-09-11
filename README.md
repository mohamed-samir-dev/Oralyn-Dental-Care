# 🦷 Oralyn Dental Care

<div align="center">

![Oralyn Logo](./public/dental-care.png)

**A modern, professional dental care application built with React, TypeScript, and Vite**

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

[🚀 Live Demo](https://oralyn-dental-care-enjvu74hd-mohamed-samir-devs-projects.vercel.app/)

</div>

---

## 📸 Screenshots

<div align="center">

### 🏠 Homepage

![Homepage Screenshot](./public/screencapture-localhost-5173-2025-09-09-18_37_28.png)

### 🏥 Services Section

_Professional dental services showcase_

### 👨‍⚕️ Doctors Profile

_Meet our professional dental team_

### 📱 Mobile Responsive

_Optimized for all devices_

</div>

---

## ✨ Features

### 🎨 **Modern UI/UX**

- Clean, professional design with smooth animations
- Glass morphism effects and modern styling
- Intuitive navigation and user experience

### 📱 **Responsive Design**

- Mobile-first approach
- Optimized for all devices and screen sizes
- Touch-friendly interface

### 🔧 **Technical Excellence**

- **TypeScript**: Full type safety and better developer experience
- **React 19**: Latest React features and performance optimizations
- **Vite**: Lightning-fast development and build process
- **ESLint**: Code quality and consistency enforcement

### 🏥 **Dental Care Features**

- **Service Showcase**: Comprehensive dental service information
- **Doctor Profiles**: Professional team presentation
- **Patient Testimonials**: Real patient feedback and reviews
- **Contact System**: Easy appointment booking and contact
- **Smart Language Detection**: Automatic Arabic/English based on user location
- **Multi-language Support**: Full Arabic and English translations

### 📊 **Performance & Accessibility**

- **WCAG 2.1 AA Compliant**: Full accessibility support
- **SEO Optimized**: Search engine friendly structure
- **Performance Optimized**: Fast loading and smooth interactions
- **Progressive Enhancement**: Works on all browsers

---

## 🚀 Tech Stack

| Category          | Technology                |
| ----------------- | ------------------------- |
| **Frontend**      | React 19, TypeScript      |
| **Build Tool**    | Vite 7.1.2                |
| **Styling**       | CSS3, Tailwind CSS 4.1.13 |
| **Routing**       | React Router DOM 7.8.2    |
| **Icons**         | FontAwesome 7.0.1         |
| **Geolocation**   | IP-based Location Detection|
| **Linting**       | ESLint 9.33.0             |
| **Type Checking** | TypeScript 5.8.3          |

---

## 📦 Quick Start

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 8.0.0

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/mohamed-samir-dev/oralyn.git
cd oralyn
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

```bash
cp .env.example .env
# Edit .env with your configuration
```

4. **Start development server**

```bash
npm run dev
```

5. **Open your browser**

```
http://localhost:5173
```

---

## 🛠️ Available Scripts

| Script               | Description                              |
| -------------------- | ---------------------------------------- |
| `npm run dev`        | Start development server with hot reload |
| `npm run build`      | Build for production                     |
| `npm run preview`    | Preview production build locally         |
| `npm run lint`       | Run ESLint for code quality              |
| `npm run lint:fix`   | Auto-fix ESLint issues                   |
| `npm run type-check` | Run TypeScript type checking             |
| `npm run format`     | Format code with Prettier                |
| `npm run clean`      | Clean build artifacts and cache          |

---

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header/          # Navigation header with mobile menu
│   ├── Home/            # Hero section and main content
│   ├── Service/         # Dental services showcase
│   ├── Doctors/         # Doctor profiles and team
│   ├── Testimonials/    # Patient testimonials
│   ├── Contact/         # Contact form and information
│   ├── Footer/          # Site footer with links
│   └── Analysis/        # Analytics and statistics
├── contexts/            # React contexts
│   ├── LanguageContext.tsx  # Multi-language support
│   └── useLanguage.ts       # Language hook
├── middleware/          # Application middleware
│   └── LanguageMiddleware.tsx # Auto language detection
├── services/            # External services
│   └── geolocation.ts   # Location detection service
├── hooks/               # Custom React hooks
│   ├── useCounter.ts    # Counter animations
│   └── Testimonial.ts   # Testimonial management
├── pages/               # Page components
│   └── HomePage.tsx     # Main homepage layout
├── constants/           # Application constants
│   ├── index.ts         # App configuration
│   └── translations.ts  # Language translations
├── styles/              # Global styles
│   └── globals.css      # Global CSS variables and styles
├── types/               # TypeScript definitions
│   └── index.ts         # Type definitions
├── App.tsx              # Main application component
└── main.tsx             # Application entry point
```

---

## 🎨 Design System

### Color Palette

- **Primary**: `#000000` (Black)
- **Secondary**: `#333333` (Dark Gray)
- **Background**: `rgba(255, 255, 255, 0.98)` (Glass White)
- **Accent**: Gradient overlays and shadows

### Typography

- **Font Family**: Inter, system fonts
- **Headings**: 600-700 weight
- **Body**: 400-500 weight
- **Letter Spacing**: Optimized for readability

### Components

- **Glass Morphism**: Backdrop blur effects
- **Smooth Animations**: CSS transitions and transforms
- **Responsive Grid**: Flexible layouts
- **Accessibility**: ARIA labels and keyboard navigation

---

## 🔧 Configuration

### Environment Variables

Create a `.env` file based on `.env.example`:

```env
# Application
VITE_APP_NAME="Oralyn Dental Care"
VITE_API_BASE_URL="http://localhost:3000/api"

# Features
VITE_ENABLE_ONLINE_BOOKING="true"
VITE_ENABLE_ANALYTICS="true"

# Contact Information
VITE_CONTACT_PHONE="+20 1012486445"
VITE_CONTACT_EMAIL="mohammedsamiermouawad@gmail.com"

# Social Media
VITE_FACEBOOK_URL="https://www.facebook.com/share/1GZtCVVXwh/"
VITE_INSTAGRAM_URL="https://www.instagram.com/msamir.dev?igsh=b3Nra3hrd3QxMTc"
```

### TypeScript Configuration

The project uses strict TypeScript configuration:

- Strict mode enabled
- No implicit any
- Unused locals detection
- Path mapping for clean imports

---

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify

```bash
npm run build
# Upload dist/ folder to Netlify
```

### Deploy to GitHub Pages

```bash
npm run build
# Configure GitHub Pages to serve from dist/
```

---

## 🧪 Testing & Quality

### Code Quality

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Format checking
npm run format:check
```

### Performance Analysis

```bash
# Bundle analysis
npm run build:analyze
```

### Browser Testing

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

---

## 🌐 Features in Detail

### 🌍 **Smart Language Detection**

- Automatic Arabic for users from Egypt and 22 other Arabic countries
- IP-based geolocation with multiple fallback services
- 24-hour caching for optimal performance
- Manual language toggle with preference memory
- Graceful fallbacks if detection fails

### 🏥 **Dental Services**

- Comprehensive service catalog
- Detailed treatment information
- Before/after galleries
- Pricing transparency

### 👨‍⚕️ **Doctor Profiles**

- Professional credentials
- Specializations and expertise
- Patient reviews and ratings
- Appointment booking

### 📱 **Patient Experience**

- Online appointment scheduling
- Treatment history tracking
- Educational resources
- Emergency contact system

### 🔒 **Security & Privacy**

- HIPAA compliance ready
- Secure data handling
- Privacy-first design
- Encrypted communications

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Maintain test coverage
- Use semantic commit messages
- Update documentation as needed

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support & Contact

<div align="center">

### 🏥 **Dental Services**

📞 **Phone**: +20 1012486445  
📧 **Email**: mohammedsamiermouawad@gmail.com

### 💻 **Technical Support**

🐛 **Bug Reports**: [GitHub Issues](https://github.com/your-username/oralyn/issues)  
💡 **Feature Requests**: [GitHub Discussions](https://github.com/mohamed-samir-dev/oralyn/discussions)  
📖 **Documentation**: [Wiki](https://github.com/mohamed-samir-dev/oralyn/wiki)

### 🌐 **Social Media**

[![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/share/1GZtCVVXwh/)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)]("https://www.instagram.com/msamir.dev?igsh=b3Nra3hrd3QxMTc)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mohammed-samier-mouawad/)

</div>

---

## 🔄 Changelog

### Version 1.0.0 (Current)

- ✅ Initial release with core features
- ✅ Professional service components
- ✅ Responsive design implementation
- ✅ TypeScript integration
- ✅ Accessibility improvements
- ✅ Smart geolocation-based language detection
- ✅ Multi-language support (Arabic/English)
- ✅ Doctor profile system
- ✅ Patient testimonials
- ✅ Contact and booking system

### Upcoming Features

- 🔄 Online appointment booking
- 🔄 Patient portal integration
- 🔄 Live chat support
- 🔄 Payment processing
- 🔄 Mobile app companion

---

<div align="center">

**Made with ❤️ by the Mohammed Samier **

_Transforming dental care through technology_

⭐ **Star this repository if you found it helpful!** ⭐

</div>
