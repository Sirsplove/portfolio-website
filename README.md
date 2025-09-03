# Splove - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Styled Components. Features smooth animations, dark theme, and mobile-first design.

## 🚀 Features

- **Modern Design**: Clean, professional portfolio layout with dark theme
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Smooth scroll animations powered by Framer Motion
- **Sections**: Hero, About, Skills, Projects, Experience, Contact, and Footer
- **Performance**: Optimized build with code splitting and lazy loading
- **Accessibility**: Keyboard navigation and screen reader friendly

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Styled Components
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Build Tool**: Create React App
- **Deployment**: Vercel (configured)

## 📱 Sections

1. **Hero**: Introduction with call-to-action and social links
2. **About**: Personal introduction with skills overview
3. **Skills**: Categorized technical skills with proficiency levels
4. **Projects**: Showcase of portfolio projects with live demos
5. **Experience**: Work history and education timeline
6. **Contact**: Contact form and information
7. **Footer**: Social links and copyright information

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## 🚀 Deployment

### Vercel (Recommended)

This project is configured for Vercel deployment:

1. **Connect to Vercel**: The repository is already connected to Vercel
2. **Automatic Deployments**: Every push to main branch triggers a new deployment
3. **Configuration**: See `vercel.json` for deployment settings

### Manual Deployment

To deploy manually:

```bash
# Build the project
npm run build

# The build folder contains your production-ready app
# Upload the contents of the build folder to your hosting provider
```

### Other Platforms

- **GitHub Pages**: Use `npm run build` and upload to GitHub Pages
- **Netlify**: Drag and drop the build folder or connect your repository
- **AWS S3**: Upload build folder contents to an S3 bucket

## 🔧 Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## 📝 Customization

1. **Content**: Update text content in each component
2. **Styling**: Modify colors and themes in `src/styles/GlobalStyles.ts`
3. **Projects**: Add your projects in `src/components/Projects.tsx`
4. **Skills**: Update skills in `src/components/Skills.tsx`
5. **Experience**: Modify work history in `src/components/Experience.tsx`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!
