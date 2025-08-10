# 🏫 School Website Project

![School Website Preview](https://kaziranga-high-school.netlify.app/)

A modern, responsive website for schools with teacher profiles, location information, and classroom galleries. Built with pure HTML, CSS, and JavaScript.

## ✨ Features

- **Four Complete Pages**:
  - 🏠 Home page with school overview
  - 👩‍🏫 Teachers directory with profiles
  - 📍 Interactive location map
  - 🏫 Classroom photo gallery

- **Modern UI Elements**:
  - Sleek navigation with smooth animations
  - Responsive card-based design
  - Interactive elements with hover effects
  - Mobile-friendly hamburger menu

- **Technical Highlights**:
  - Pure CSS (no frameworks)
  - Vanilla JavaScript for interactivity
  - Google Maps API integration
  - Lightbox image gallery
  - Teacher profile modals

## 🛠️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/school-website.git
   cd school-website
   ```

2. **Set up Google Maps API** (optional for location page):
   - Get an API key from [Google Cloud Console](https://console.cloud.google.com/)
   - Replace `YOUR_API_KEY` in `index.html`

3. **Add your content**:
   - Replace placeholder images in `/images` folder
   - Update teacher info in `teachers.html`
   - Customize school details throughout

## 📂 File Structure

```
school-website/
├── index.html          # Home page
├── teachers.html       # Faculty directory
├── location.html       # School location
├── classrooms.html     # Photo gallery
├── images/             # All website images
│   ├── hero-bg.jpg     # Main banner image
│   ├── teachers/       # Faculty photos
│   └── classrooms/     # Classroom photos
├── script.js           # Main JavaScript
└── README.md           # This file
```

## 🎨 Customization

### Change Colors
Modify the CSS variables in `styles.css`:
```css
:root {
  --primary: #2c3e50;       /* Dark blue */
  --secondary: #3498db;     /* Light blue */
  --accent: #e74c3c;        /* Red */
  /* ... */
}
```

### Add More Teachers
Edit `teachers.html`:
```html
<div class="teacher-card" data-teacher-id="11">
  <div class="teacher-image">
    <img src="images/teachers/new-teacher.jpg" alt="New Teacher">
  </div>
  <div class="teacher-info">
    <h3 class="teacher-name">New Teacher</h3>
    <p class="teacher-position">Subject Teacher</p>
    <p class="teacher-subjects">Mathematics</p>
  </div>
</div>
```

## 🌐 Live Demo

[View Live Demo](https://kaziranga-high-school.netlify.app/)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📧 Contact

Project Maintainer - [Ximanta Bhuyan](mailto:ximanta@outlook.in)

---

**Happy Coding!** 🚀
