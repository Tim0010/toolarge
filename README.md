# Toolage - International Sourcing & Logistics Platform

Toolage is a comprehensive platform designed to connect Zambian businesses with global markets, providing end-to-end solutions for international sourcing, logistics, and supply chain management.

![Toolage Platform](https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=85)

## Features

- **Global Sourcing**: Connect with verified suppliers in China, India, and South Africa
- **International Shipping**: Manage ocean freight, air freight, and express courier shipments
- **Customs Clearance**: Streamline import/export documentation and compliance
- **Logistics Management**: Track shipments and manage local deliveries
- **Warehouse Management**: Inventory tracking and storage solutions
- **Payment Processing**: Secure international payment options
- **Agent Support**: Connect with logistics experts for personalized assistance

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/Tim0010/toolarge.git
   ```

2. Navigate to the project directory:

   ```
   cd toolarge
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Building for Production

To create a production build:

```
npm run build
```

This creates a `build` directory with optimized production files.

To test the production build locally:

```
npx serve -s build
```

## Deployment

### GitHub Pages

1. Update the `homepage` field in `package.json`:

   ```json
   "homepage": "https://tim0010.github.io/toolarge"
   ```

2. Install GitHub Pages package:

   ```
   npm install --save-dev gh-pages
   ```

3. Add deployment scripts to `package.json`:

   ```json
   "scripts": {
     // ... existing scripts
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

4. Deploy to GitHub Pages:
   ```
   npm run deploy
   ```

### Netlify or Vercel

1. Create an account on [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/)
2. Connect your GitHub repository
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
4. Deploy

## Technologies Used

- React.js
- Material UI
- React Router
- CSS3 with custom animations

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Material UI for the component library
- Unsplash for the stock images
- Create React App for the initial project setup
