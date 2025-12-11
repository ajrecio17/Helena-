# Helena• Musicians Website

A modern, responsive static website for Helena• Musicians featuring neon-inspired design with Tailwind CSS.

## 🎵 About

Helena• Musicians provides professional entertainment services for all occasions and events. This website showcases their three service tiers (Duo, Trio, Full Band) and allows clients to submit booking inquiries.

**Location:** Santa Cruz, Laguna, Philippines

**Tagline:** "All Occasions, All Events, We Got You!"

## 🌟 Features

- **Neon-Inspired Design** - Modern dark theme with hot pink and magenta accents
- **Responsive Layout** - Fully responsive design for mobile, tablet, and desktop
- **Interactive Elements** - Smooth animations, scroll reveal effects, and hover transitions
- **Service Showcase** - Three service tiers with detailed descriptions
- **Booking Form** - Easy-to-use booking inquiry form with mailto integration
- **Contact Information** - Multiple ways to get in touch (phone, email, Facebook)
- **Keyboard Shortcuts** - Press 'B' for booking, 'C' for contact sections
- **Accessible** - Semantic HTML and proper form accessibility

## 📁 Project Structure

```
helena-musicians/
├── index.html      # Main HTML file
├── styles.css      # External CSS styling
├── script.js       # Interactive JavaScript
├── .gitignore      # Git ignore rules
└── README.md       # This file
```

## 🛠 Technologies Used

- **HTML5** - Semantic structure
- **Tailwind CSS** - Utility-first CSS framework via CDN
- **Vanilla JavaScript** - No dependencies
- **Git** - Version control

## 🎨 Color Palette

- **Dark Background:** `#1a0f15`
- **Hot Pink:** `#ff1493`
- **Magenta:** `#c4004c`
- **Gold:** `#d4af37`
- **Cream:** `#f5f0e8`

## ✨ Interactive Features

### JavaScript Functionality

1. **Scroll Reveal Animation** - Elements animate into view as you scroll
2. **Form Submission** - Converts booking form to email with validation
3. **Smooth Scrolling** - Enhanced navigation with smooth transitions
4. **Parallax Effect** - Hero section background elements respond to scroll
5. **Ripple Button Effect** - Visual feedback on button clicks
6. **Active Navigation** - Highlights current section in navigation bar
7. **Notification System** - Success/error messages for form submissions
8. **Keyboard Shortcuts** - Quick navigation with keyboard commands
9. **Mobile Ready** - Mobile menu support framework

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.)
- Git (for version control)

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/helena-musicians.git
cd helena-musicians
```

2. Open the project in your code editor:
```bash
code .
```

3. Open `index.html` in your browser or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Using VS Code Live Server extension
# Right-click index.html → Open with Live Server
```

4. Visit `http://localhost:8000` in your browser

## 📧 Booking Integration

The booking form uses `mailto:` to generate emails. When users submit the form, it will:
1. Open the default email client
2. Pre-fill the subject and body with booking details
3. Send to: peperr111ws@gmail.com and jericdechavez07@gmail.com

To use a different email service, modify the `mailtoLink` in `script.js`.

## 🔧 Customization

### Change Colors
Edit the CSS custom properties in `styles.css`:
```css
:root {
    --helena-dark: #1a0f15;
    --helena-pink: #ff1493;
    --helena-magenta: #c4004c;
    --helena-gold: #d4af37;
    --helena-cream: #f5f0e8;
}
```

### Modify Content
Simply edit the HTML sections in `index.html` to update:
- Service descriptions
- Contact information
- Testimonials or other content

### Adjust Animations
Modify keyframe animations in `styles.css` to change timing, delay, or effects.

## 📞 Contact Information

- **Phone:** 0981 176 2967 / 0906 724 6852
- **Email:** peperr111ws@gmail.com / jericdechavez07@gmail.com
- **Location:** Santa Cruz, Laguna, Philippines
- **Facebook:** Helena• | Hileina Mae Dela Cruz

## 🚢 Deployment

### GitHub Pages (Free)

1. Create a repository on GitHub named `helena-musicians` (or any name)
2. Push your code to the repository
3. Go to **Settings → Pages**
4. Set **Source** to "Deploy from a branch"
5. Select **main** branch and **/ (root)** folder
6. Your site will be live at `https://yourusername.github.io/helena-musicians`

### Other Hosting Options
- Netlify (zero-config deployment)
- Vercel (Jamstack focused)
- Firebase Hosting
- AWS S3 + CloudFront

## 📝 Git Workflow

```bash
# Check status
git status

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Helena musicians website"

# Add remote repository
git remote add origin https://github.com/yourusername/helena-musicians.git

# Push to GitHub
git branch -M main
git push -u origin main

# Future updates
git add .
git commit -m "Your commit message"
git push origin main
```

## 🎯 Future Enhancements

- [ ] Add testimonials section
- [ ] Gallery/portfolio section
- [ ] Email backend integration (FormSubmit, Netlify Forms, etc.)
- [ ] Multiple language support
- [ ] Blog or news section
- [ ] Integration with calendar/booking system
- [ ] Audio/video samples

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For questions or updates, please contact:
- peperr111ws@gmail.com
- jericdechavez07@gmail.com

---

**Built with ❤️ for Helena• Musicians**
