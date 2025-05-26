## Personal Portfolio

A sleek, interactive portfolio web app that showcases projects, skills, and technologies in a clean, user-friendly interface. Built with React and modern web tools, it’s designed to be responsive and easy to update — perfect for sharing your work and experience online.

The portfolio is built using **Next.js** with animations, theme switching, token-based access for private content, and modular components for easy scalability and maintenance.

![Portfolio Website](https://abimael-common-assets.s3.eu-west-1.amazonaws.com/myproject-resources/portfolio-preview.png)

## 🔗 Live Demo

[Visit the live site](https://your-deployed-url.com)

## 📚 Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [FAQs](#faqs)

---

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: `styled-components`
- **Authentication**: Firebase Token-based Access
- **Animations**: Custom SVG and Lottie animations
- **Hosting**: Vercel (recommended), also exportable as static site
- **Utilities**: Context API, Custom Hooks, Dynamic Theming

---

## ✨ Features

- Interactive and animated hero section
- Projects gallery with previews and animations
- Secure access to private content via Firebase token modal
- Background animation (particle-style)
- Responsive design for all screen sizes
- Access request modal with API endpoints

---

## ⚙️ Installation and Setup

Clone the repository:

```bash
git clone https://github.com/your-username/portfolio.git
```

Navigate into the project directory:

```bash
cd portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

For a production build:

```bash
npm run build
```

To export as a static site:

```bash
npm run export
```

The exported site will be in the /out folder.

## 🌐 Deployment
You can deploy the app using Vercel or any static site hosting:

Deploy to Vercel (Recommended)
Push your code to GitHub.

Go to vercel.com, sign in with GitHub, and import the project.

Set build command to npm run build and output directory to out.

## 🧑‍💻 Usage
Navigate to the homepage to explore content.

Click projects to view interactive previews.

Use the palette button to toggle theme.

Click Access Private Content to input token for hidden sections.

Update or customize styles via theme.js or styled components.

## 🖼️ Screenshots
Add screenshots inside the public/images folder and link them here.

markdown
![Portfolio Preview](public/images/fotovibes.png)
❓ FAQs
Q1: How do I request access to private content?
A: Click the Access Request button and submit your email. A token will be sent if approved.

Q2: Can I customize the color palette?
A: Yes, use the PaletteChanger component or modify the theme settings in theme.js.

Q3: Is the site mobile responsive?
A: Yes, the portfolio is fully responsive across all devices.

Q4: Where are the main files located?
A:

    Components: src/components/
    
    Pages: src/pages/
    
    Styles: src/styles/
    
    Firebase config: src/auth/firebaseConfig.js

📫 Contact
Author: Abimael García
GitHub: @your-github
Email: your.email@example.com

---
```
