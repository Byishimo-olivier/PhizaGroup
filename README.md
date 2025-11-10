# PhizerGroup React Website

A modern, responsive website for PhizerGroup built with React, Tailwind CSS, and React Router. This website showcases the company's three main business divisions: Logistics & Transport, Premium Apartments, and Wine Distribution.

## 🌟 Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Multi-language Support**: English, French, and Kinyarwanda translations
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Components**: Image carousels, booking forms, and contact forms
- **SEO Ready**: Semantic HTML structure for better search engine optimization
- **Fast Loading**: Optimized images and code splitting

## 🏗️ Built With

- **React 18** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **React Router v6** - Client-side routing
- **React Icons** - Beautiful icon library
- **EmailJS** - Client-side email services (ready to configure)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
   ```bash
   cd c:\Users\HP\Downloads\PhizerGroup\phizergroup
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📁 Project Structure

```
phizergroup/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/              # Images, logos, videos
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.js        # Navigation component
│   │   ├── Footer.js        # Footer component
│   │   └── Hero.js          # Hero section with carousel
│   ├── context/             # React Context for state management
│   │   └── LanguageContext.js  # Multi-language support
│   ├── pages/               # Page components
│   │   ├── Home.js          # Landing page
│   │   ├── About.js         # About us page
│   │   ├── Services.js      # Services overview
│   │   ├── Logistics.js     # Logistics services
│   │   ├── Apartments.js    # Apartment listings
│   │   ├── Wines.js         # Wine collection
│   │   ├── Partners.js      # Business partners
│   │   └── Contact.js       # Contact form and info
│   ├── App.js               # Main app component
│   ├── index.js             # App entry point
│   └── index.css            # Global styles with Tailwind
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── package.json
```

## 🌐 Pages Overview

### 🏠 Home Page
- Hero carousel with service highlights
- Service cards with navigation links
- Mission and vision section
- Partners showcase
- Call-to-action sections

### 📋 About Page
- Company story and history
- Core values presentation
- Team member profiles
- Achievement statistics

### 🚛 Logistics Page
- Service categories (Import/Export/Transit)
- Process workflow diagram
- Quote request form

### 🏢 Apartments Page
- Property listings with photo galleries
- Interactive booking modal
- Amenities and features

### 🍷 Wines Page
- Wine collection gallery with filtering
- Product details modal
- Team profiles and expertise

### 🤝 Partners Page
- Partner categories by business type
- Company showcases
- Partnership benefits

### 📞 Contact Page
- Contact form with validation
- Business information cards
- Social media integration

## 🎨 Customization

### Adding Your Content

1. **Replace placeholder images** in `src/assets/` with your actual photos
2. **Update company information** in the page components
3. **Configure email service** in Contact.js using EmailJS
4. **Add your social media links** in Footer.js and Contact.js
5. **Update translations** in `src/context/LanguageContext.js`

### Multi-language Support

The website supports three languages:
- English (en) - Default
- French (fr)
- Kinyarwanda (rw)

To modify translations, edit the `translations` object in `src/context/LanguageContext.js`.

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to Vercel

1. Push your code to a Git repository
2. Connect your repository to [Vercel](https://vercel.com)
3. Configure your custom domain in Vercel dashboard

### Deploy to Netlify

1. Drag and drop the `build` folder to [Netlify](https://netlify.com)
2. Or connect your Git repository for continuous deployment

## ⚙️ Configuration

### EmailJS Setup (Contact Forms)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the contact forms in `src/pages/Contact.js` and `src/pages/Logistics.js` with your service details

### Environment Variables

Create a `.env` file in the root directory:

```bash
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_USER_ID=your_user_id
```

## 📈 Next Steps

1. **Add real content and images**
2. **Set up EmailJS for contact forms**
3. **Configure Google Maps integration**
4. **Add backend API for dynamic content**
5. **Implement user authentication (if needed)**
6. **Add blog/news section**
7. **Integrate analytics (Google Analytics)**
8. **Add SEO meta tags**

## 🛠️ Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## 🔧 Troubleshooting

### Common Issues

1. **Tailwind classes not working**: Ensure the path in `tailwind.config.js` is correct
2. **Routing not working in production**: Configure your hosting provider for SPA routing
3. **Images not loading**: Check file paths and ensure images are in the `public` folder or imported properly

---

**🎉 Your PhizerGroup website is ready!** The application is now running at [http://localhost:3000](http://localhost:3000)

### Quick Navigation
- **Home**: Landing page with hero carousel and service overview
- **About**: Company information and team profiles  
- **Services**: Overview of all three business divisions
- **Logistics**: Freight and transport services with quote form
- **Apartments**: Premium accommodation listings with booking
- **Wines**: Wine collection and distribution services
- **Partners**: Business partnerships and collaborations
- **Contact**: Get in touch form and business information

## 📝 License

This project is built for PhizerGroup. All rights reserved.
