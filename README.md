# Oralyn Dental Care

A modern, professional dental care application built with React, TypeScript, and Vite.

## 🦷 About

Oralyn is a comprehensive dental care platform that provides information about dental services, allows patients to learn about treatments, and offers a professional interface for dental practice management.

## ✨ Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Responsive Design**: Optimized for all devices and screen sizes
- **TypeScript**: Full type safety and better developer experience
- **Professional Services**: Comprehensive dental service information
- **Statistics Dashboard**: Real-time practice statistics and metrics
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Performance**: Optimized with Vite for fast development and builds

## 🚀 Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 with CSS Custom Properties
- **Routing**: React Router DOM
- **Icons**: FontAwesome
- **Linting**: ESLint with TypeScript support

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/oralyn.git
cd oralyn
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header/         # Navigation header
│   ├── Home/           # Home page component
│   ├── service/        # Services section
│   └── index.ts        # Component exports
├── constants/          # Application constants
├── styles/            # Global styles
├── types/             # TypeScript type definitions
├── App.tsx            # Main application component
└── main.tsx           # Application entry point
```

## 🎨 Design System

The application uses a comprehensive design system with:

- **CSS Custom Properties**: Consistent colors, typography, and spacing
- **Component Architecture**: Modular, reusable components
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG 2.1 AA compliance

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_NAME=Oralyn Dental Care
```

### TypeScript Configuration

The project uses strict TypeScript configuration for better type safety and code quality.

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

## 🧪 Testing

```bash
# Run type checking
npm run type-check

# Run linting
npm run lint
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Development Team**: Oralyn Development Team
- **Design**: Professional UI/UX Design
- **Maintenance**: Active development and support

## 📞 Support

For support, email support@oralyn.com or create an issue in the repository.

## 🔄 Changelog

### Version 1.0.0
- Initial release
- Professional service component
- Responsive design implementation
- TypeScript integration
- Accessibility improvements

---

Made with ❤️ by the Oralyn Development Team