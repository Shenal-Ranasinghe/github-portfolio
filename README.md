# Shenal Ranasinghe - Portfolio Website

🎯 **Professional Portfolio** | RF/IC Design Enthusiast | Electronic & Telecommunication Engineering

## 🌟 Overview

This is a modern, responsive portfolio website showcasing my work in RFIC design, embedded systems, and antenna engineering. The website features an RF/IC themed design with interactive animations and a clean, professional layout.

## ✨ Features

- **🎨 RF/IC Themed Design**: Custom SVG graphics featuring RF circuits, LC-VCO components, and antenna elements
- **🌓 Dark/Light Mode**: Toggle between dark and light themes with persistent storage
- **📱 Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **⚡ Interactive Animations**: 
  - Typing animation with rotating text
  - Floating RF circuit visualization
  - Circuit background with animated nodes
  - Smooth scroll animations
  - Hover effects on cards and links
- **🔍 Project Filtering**: Dynamic filter system for ongoing and completed projects
- **📊 Organized Sections**:
  - Hero section with SVG RF circuit
  - About me
  - Education timeline
  - Work experience
  - Skills categorized by domain
  - Project showcase
  - Achievements & certifications
  - Contact form

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Custom properties, animations, flexbox, grid
- **JavaScript (ES6+)**: Interactive features and animations

### Design
- **Google Fonts**: Inter (body text) & Fira Code (monospace)
- **Font Awesome 6.4.0**: Icons
- **Custom SVG Graphics**: RF circuit visualizations

### Color Scheme
- **Dark Theme**:
  - Navy: `#0A192F`
  - Cyan Accent: `#64FFDA`
  - Light Slate: `#CCD6F6`
- **Light Theme**:
  - Light Background: `#F8F9FA`
  - Blue Accent: `#0D6EFD`
  - Dark Text: `#212529`

## 📁 Project Structure

```
github-portfolio/
│
├── index.html          # Main HTML structure
├── styles.css          # Comprehensive styling with animations
├── script.js           # Interactive features and animations
└── README.md           # Project documentation
```

## 🚀 Getting Started

### View Locally

1. Clone the repository:
```bash
git clone https://github.com/Shenal-Ranasinghe/github-portfolio.git
```

2. Navigate to the project folder:
```bash
cd github-portfolio
```

3. Open `index.html` in your browser:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

Or simply double-click the `index.html` file.

### Deploy

This is a static website and can be deployed on any static hosting service:
- **GitHub Pages**: Enable GitHub Pages in repository settings
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repository
- **Cloudflare Pages**: Connect and deploy

## 💡 Key Features Explained

### Typing Animation
Rotates through multiple roles:
- RFIC Design Enthusiast
- Embedded Systems Engineer
- Antenna Design Specialist
- Electronics Engineering Student

### Project Filtering
Interactive filter buttons to show:
- All projects
- Ongoing projects
- Completed projects

### Circuit Background Animation
Canvas-based animation featuring:
- 50 animated nodes
- Dynamic connections between nodes
- RF-themed cyan color scheme

### Responsive Design
Breakpoints:
- **Desktop**: > 768px
- **Tablet**: 768px
- **Mobile**: 480px

## 📱 Mobile Features

- Hamburger menu for navigation
- Optimized touch targets
- Responsive typography
- Stacked layout for cards
- Touch-friendly buttons

## 🎯 Performance

- Lightweight (no heavy frameworks)
- Fast loading time
- Optimized animations
- Efficient DOM manipulation
- LocalStorage for theme persistence

## 📞 Contact Information

- **Email**: shenalranasinghe2001@gmail.com
- **Phone**: +94 70 128 3289
- **LinkedIn**: [shenal-ranasinghe-4a5684207](https://linkedin.com/in/shenal-ranasinghe-4a5684207)
- **GitHub**: [Shenal-Ranasinghe](https://github.com/Shenal-Ranasinghe)
- **Location**: Colombo, Sri Lanka

## 🔧 Customization

### Changing Colors
Edit CSS custom properties in `styles.css`:
```css
:root {
    --navy: #0A192F;
    --cyan: #64FFDA;
    /* ... */
}
```

### Adding Projects
Add project cards in `index.html` within the projects section:
```html
<div class="project-card" data-status="completed">
    <!-- Project content -->
</div>
```

### Modifying Typing Text
Edit the texts array in `script.js`:
```javascript
const texts = [
    'Your Title 1',
    'Your Title 2',
    // ...
];
```

## 📄 License

This project is open source and available for personal and educational use.

## 🙏 Acknowledgments

- University of Moratuwa - Electronic & Telecommunication Engineering
- Paraqum Technologies (Pvt) Ltd
- Open source community

---

**Built with 💚 by Shenal Ranasinghe**

*Last Updated: January 2025*
