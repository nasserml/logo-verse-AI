# 🌌🚀 **LogoVerse AI** - *Unleash the Power of AI in Logo Design Micro Saas App* 🎨🤖

[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/nasserml/logo-verse-AI)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Built%20with-Next.js-black.svg?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Powered by Vercel](https://img.shields.io/badge/Powered%20by-Vercel-000000.svg?logo=vercel)](https://vercel.com/)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen.svg)](https://github.com/nasserml/logo-verse-AI/issues)

---

<img src="public/logo1.jpg" alt="LogoVerse AI Banner" width="25%" style="display: block; margin-left: auto; margin-right: auto; margin-bottom: 20px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-top: 20px;" />

---

## 🎉 **Welcome to LogoVerse AI!**
[Demo Link](https://logoverseai.vercel.app/)
Embark on a creative journey where artificial intelligence meets design. **LogoVerse AI** is an open-source platform that revolutionizes logo creation by leveraging the latest advancements in AI technology. Whether you're a startup founder, designer, or enthusiast, LogoVerse AI empowers you to create stunning logos effortlessly. 🌟 

---

## 📖 **Table of Contents**

- [Features](#-features)
- [Demo](#-demo)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
  - [Running the Application](#running-the-application)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [Roadmap](#-roadmap)
- [Acknowledgments](#-acknowledgments)
- [License](#-license)
- [Contact](#-contact)
- [Community](#-community)
- [Support](#-support)

---

## ✨ **Features**

- **AI-Powered Design Ideas**: Get unique logo concepts generated by cutting-edge AI models like [Google's Gemini](https://ai.google/).
- **Text-to-Image Transformation**: Convert your ideas into visual logos using advanced models from [Hugging Face](https://huggingface.co/).
- **User-Friendly Interface**: An intuitive, step-by-step process to guide you through logo creation.
- **Secure Authentication**: Powered by [Clerk](https://clerk.com/) for secure user management.
- **Seamless Data Management**: Integrated with [Firebase](https://firebase.google.com/) for real-time data storage and retrieval.
- **Flexible Pricing**: Choose between free and premium plans with a credit-based system.
- **Customizable Designs**: Extensive options for colors, styles, and elements to personalize your logo.
- **High-Quality Downloads**: Export your logos in various formats suitable for web, print, and more.
- **Responsive Design**: Access the platform on any device, anywhere.

---

## 🎬 **Demo**

Check out our [live demo](https://logoverse-ai-demo.vercel.app/) to see LogoVerse AI in action!

---

## 🚀 **Getting Started**

### **Prerequisites**

Before you begin, ensure you have met the following requirements:

- **Node.js** (version 18 or later)
- **Package Manager**: Choose one of the following
  - **npm**
  - **yarn**
  - **pnpm**
  - **bun**

### **Installation**

1. **Clone the Repository**

   ```bash
   git clone https://github.com/nasserml/logo-verse-AI.git
   cd logo-verse-AI
   ```

2. **Install Dependencies**

   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn install

   # Using pnpm
   pnpm install

   # Using bun
   bun install
   ```

### **Environment Setup**

Create a `.env.local` file in the root directory based on the `.env.example` file. Populate it with your API keys and configuration details:

```env
NEXT_PUBLIC_GEMINI_API_KEY=your_google_gemini_api_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
HUGGING_FACE_API_KEY=your_hugging_face_api_key
```

> **Note**: Keep your API keys secure and never share them publicly or commit them to version control.

### **Running the Application**

Start the development server:

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev

# Using bun
bun dev
```

Open your browser and navigate to `http://localhost:3000` to access LogoVerse AI.

---

## 🛠 **Usage**

1. **Sign Up / Log In**

   - Click on **"Sign Up"** or **"Log In"** to authenticate via Clerk.

2. **Access the Dashboard**

   - After logging in, you'll be redirected to your dashboard where you can view and manage your saved logos and credits.

3. **Create a New Logo**

   - Click on **"Create Logo"** and follow the guided process:
     - **Title & Description**: Describe your brand or project.
     - **Color Palette**: Select colors that represent your brand identity.
     - **Design Style**: Choose from various styles like modern, classic, minimalistic, etc.
     - **AI Design Ideas**: Optionally, generate ideas to inspire your design.

4. **Generate Logo**

   - Review your selections and click **"Generate Logo"** to let the AI create your custom logo.

5. **Customize and Download**

   - Browse through the generated logos, select your favorite, and download it in your preferred format.

---

## 📂 **Project Structure**

<details>
<summary>Expand to view the detailed project structure</summary>

```bash
logo-verse-AI/
├── .github/                        # GitHub configuration and workflows
├── app/
│   ├── api/                        # API routes
│   │   ├── ai-design-ideas/
│   │   │   └── route.jsx           # AI design ideas endpoint
│   │   ├── ai-logo-model/
│   │   │   └── route.jsx           # AI logo generation endpoint
│   │   └── users/
│   │       └── route.jsx           # User management endpoint
│   ├── create/
│   │   ├── _components/
│   │   │   ├── HeadingDescription.jsx
│   │   │   ├── LogoDesc.jsx
│   │   │   ├── LogoDesigns.jsx
│   │   │   ├── LogoIdea.jsx
│   │   │   ├── LogoPalette.jsx
│   │   │   ├── LogoTitle.jsx
│   │   │   └── PricingModel.jsx
│   │   └── page.jsx                # Logo creation page
│   ├── dashboard/
│   │   ├── _components/
│   │   │   ├── Info.jsx
│   │   │   └── LogoList.jsx
│   │   └── page.jsx                # User dashboard
│   ├── generate-logo/
│   │   └── page.jsx                # Logo generation page
│   ├── _components/
│   │   └── header.jsx              # Header component
│   ├── _context/
│   │   └── UserDetailContext.jsx   # User context provider
│   ├── _data/
│   │   ├── Colors.jsx              # Color palettes
│   │   ├── LogoDesign.jsx          # Design options
│   │   ├── Lookup.jsx              # Lookup data
│   │   └── Prompt.jsx              # AI prompts
│   ├── globals.css                 # Global styles
│   ├── layout.js                   # Main layout
│   ├── page.js                     # Landing page
│   └── provider.jsx                # Providers for context and theming
├── components/                     # Shared components
│   ├── effects/                    # Visual effects
│   │   ├── butterflies.jsx
│   │   └── parallax-images.jsx
│   ├── sections/                   # Page sections
│   │   ├── benefits/
│   │   │   ├── benefit-card.jsx
│   │   │   └── index.jsx
│   │   ├── about.jsx
│   │   ├── cta.jsx
│   │   ├── faq.jsx
│   │   ├── footer.jsx
│   │   ├── how-it-works.jsx
│   │   ├── pricing.jsx
│   │   └── testimonials/
│   │       ├── index.jsx
│   │       ├── testimonial-card.jsx
│   │       └── testimonial-slider.jsx
│   ├── ui/                         # UI elements
│   │   ├── accordion.jsx
│   │   ├── button.jsx
│   │   └── input.jsx
│   ├── features.jsx                # Features section
│   ├── hero-section.jsx            # Hero banner
│   ├── navbar.jsx                  # Navigation bar
│   └── theme-toggle.jsx            # Theme switcher
├── configs/                        # Configuration files
│   ├── AiModel.jsx                 # AI model configurations
│   └── FirebaseConfig.jsx          # Firebase configuration
├── lib/                            # Helper functions
│   └── utils.js                    # Utility functions
├── public/                         # Public assets
│   ├── images/                     # Image assets
│   └── favicon.ico
├── .env.example                    # Example environment variables
├── .gitignore                      # Files to ignore in git
├── jsconfig.json                   # JavaScript configuration
├── middleware.js                   # Middleware for Clerk
├── next.config.mjs                 # Next.js configuration
├── package.json                    # Project metadata and scripts
├── postcss.config.mjs              # PostCSS configuration
└── tailwind.config.mjs             # Tailwind CSS configuration
```

</details>

---

## 🤝 **Contributing**

We welcome contributions of all kinds! Please read our [Contributing Guidelines](CONTRIBUTING.md) to get started.

1. **Fork the Repository**

   Click on the "Fork" button at the top right of the page.

2. **Clone Your Fork**

   ```bash
   git clone https://github.com/nasserml/logo-verse-AI.git
   cd logo-verse-AI
   ```

3. **Create a Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Changes**

   Implement your feature or fix.

5. **Commit and Push**

   ```bash
   git commit -m "Add your commit message"
   git push origin feature/your-feature-name
   ```

6. **Submit a Pull Request**

   Go to the original repository and create a new pull request.

---

## 🛣 **Roadmap**

- [ ] **Multi-Language Support**
- [ ] **Enhanced AI Models Integration**
- [ ] **Mobile App Development**
- [ ] **User Profile Customization**
- [ ] **Social Sharing Features**
- [ ] **Advanced Analytics Dashboard**
- [ ] **Tutorials and Resource Center**

---

## 🙏 **Acknowledgments**

- **[TubeGuruji YouTube Channel](https://www.youtube.com/@TubeGuruji)**: Special thanks for the informative [video tutorial](https://www.youtube.com/watch?v=VjimQ-VEIiE) that inspired aspects of this project.
- **[Google Generative AI](https://ai.google/)**: For providing the powerful Gemini models.
- **[Hugging Face](https://huggingface.co/)**: For the amazing AI model APIs.
- **[Clerk](https://clerk.com/)**: For seamless authentication services.
- **[Firebase](https://firebase.google.com/)**: For robust backend solutions.
- **[Next.js](https://nextjs.org/)** and **[Vercel](https://vercel.com/)**: For an outstanding development and deployment platform.
- **[Shadcn/UI](https://ui.shadcn.com)**: For beautiful UI components.
- **Open-Source Community**: For continuous support and contributions.

---

## 📜 **License**

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this software in accordance with the license.

---

## 📫 **Contact**

If you have any questions, suggestions, or just want to say hello, feel free to reach out!

- **Email**: [mnasserone@gmail.com](mailto:mnasserone@gmail.com)
- **GitHub Issues**: [Create an Issue](https://github.com/nasserml/logo-verse-AI/issues)

---


## 💖 **Support**

If you find this project helpful, please consider giving it a star ⭐ on GitHub.

[![Star us on GitHub](https://img.shields.io/github/stars/nasserml/logo-verse-AI.svg?style=social&label=Star)](https://github.com/nasserml/logo-verse-AI)

---

## ✨ **Let's Create Something Amazing Together!**

Dive into **LogoVerse AI** and bring your brand's vision to life. The universe of logo design is at your fingertips. We're excited to see the incredible logos you'll create! 🎉

---

**LogoVerse AI** - *Where Creativity Meets Innovation* 🌌🎨

