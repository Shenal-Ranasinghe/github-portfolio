# Life Beyond Academics - Setup Guide

## 📸 How to Add Your Photos

### Directory Structure
```
assets/images/
├── travel/          (for travelling-hiking.html)
├── fitness/         (for gym-fitness.html)
├── family/          (for family-friends.html)
└── placeholder-*.svg (fallback images)
```

### Adding Photos to Each Section

#### 1. **Travelling & Hiking**
- Place your photos in `assets/images/travel/`
- Name them: `placeholder1.jpg`, `placeholder2.jpg`, etc. (up to placeholder6.jpg)
- Or edit the HTML to use custom filenames

#### 2. **GYM & Fitness**
- Place your photos in `assets/images/fitness/`
- Name them: `placeholder1.jpg`, `placeholder2.jpg`, etc. (up to placeholder6.jpg)
- Or edit the HTML to use custom filenames

#### 3. **Family & Friends**
- Place your photos in `assets/images/family/`
- Name them: `placeholder1.jpg`, `placeholder2.jpg`, etc. (up to placeholder6.jpg)
- Or edit the HTML to use custom filenames

### Photo Specifications
- **Format:** JPG, PNG, or WebP
- **Recommended size:** 800x800px (square)
- **Max file size:** 500KB per image (compressed)
- **Aspect ratio:** 1:1 (square) works best

---

## ✏️ How to Customize Content

### Main Portfolio Page (`index.html`)

**Location:** Lines ~463-523 (Life Beyond Academics section)

You can edit:
- Card descriptions
- Icons (use Font Awesome: https://fontawesome.com/icons)
- Button text

### Individual Life Pages

#### **travelling-hiking.html**
Edit these sections:
1. **Hero text** (lines 44-46): Update the subtitle
2. **Intro** (lines 53-56): Change the description
3. **Gallery captions** (lines 61-101): Update titles and descriptions for each photo
4. **Stories** (lines 108-149): Replace with your actual travel stories and dates

#### **gym-fitness.html**
Edit these sections:
1. **Hero text**: Your fitness motto
2. **Intro**: Your fitness philosophy
3. **Stats** (lines 108-135): Add your actual numbers (training days, PRs, streak)
4. **Stories**: Replace with your real fitness journey stories

#### **family-friends.html**
Edit these sections:
1. **Hero text**: Personal message
2. **Intro**: What family/friends mean to you
3. **Gallery captions**: Names and moments
4. **Stories**: Real stories about your relationships
5. **Gratitude section** (lines 150-157): Write your heartfelt message

---

## 🎨 Customizing the Look

### Colors
Edit `life/life-pages.css` to change colors:
- Uses the same CSS variables from main `styles.css`
- Primary color: `--accent-primary`
- Secondary: `--accent-secondary`

### Layout
- **Gallery grid**: Change `grid-template-columns` in `.photo-gallery`
- **Card sizing**: Adjust `minmax()` values
- **Spacing**: Modify padding and gap values

---

## 🚀 Quick Start Checklist

- [ ] Add your photos to the respective folders
- [ ] Edit the intro text on each page
- [ ] Update gallery image captions
- [ ] Write your personal stories
- [ ] Add actual dates and numbers
- [ ] Update the gratitude section (family page)
- [ ] Update fitness stats (gym page)
- [ ] Test all links work correctly
- [ ] Check on mobile devices

---

## 📝 Tips for Great Content

### Photography Tips
1. Use high-quality images with good lighting
2. Keep aspect ratios consistent
3. Compress images before uploading (use TinyPNG or similar)
4. Show variety - action shots, candid moments, group photos

### Writing Tips
1. **Be authentic** - Write in your own voice
2. **Be specific** - Use real dates, names, locations
3. **Show emotion** - Don't be afraid to get personal
4. **Keep it balanced** - Mix humor with heartfelt moments

### Story Ideas
- **Travel**: First solo trip, most challenging hike, best view
- **Fitness**: Starting journey, biggest achievement, workout philosophy
- **Family/Friends**: Favorite memories, lessons learned, inside jokes

---

## 🔧 Troubleshooting

### Images Not Showing
1. Check file names match exactly (case-sensitive)
2. Verify files are in correct folders
3. Check image format is supported (JPG, PNG, WebP)
4. Clear browser cache (Ctrl+Shift+R)

### Layout Issues
1. Ensure all HTML tags are closed properly
2. Check CSS file is linked correctly
3. Verify no typos in class names

### Links Not Working
1. Check relative paths are correct (`../` goes up one directory)
2. Verify file names match exactly
3. Test from the main index.html page

---

## 📱 Mobile Responsiveness

All pages are fully responsive and work on:
- Desktop (1920px+)
- Laptop (1366px)
- Tablet (768px)
- Mobile (375px+)

Test on different devices to ensure everything looks good!

---

## 🎯 Advanced Customization

### Adding More Photos
1. Copy an existing `.gallery-item` div
2. Update the image source
3. Change the overlay text
4. Gallery auto-adjusts to fit more items

### Adding New Stories
1. Copy a `.story-card` div
2. Update the icon (Font Awesome icon name)
3. Write your new story
4. Cards stack automatically

### Changing Layouts
- **2-column gallery**: Change to `repeat(2, 1fr)`
- **4-column gallery**: Change to `repeat(4, 1fr)`
- Experiment with different grid layouts!

---

## 💡 Ideas to Make It Unique

1. **Add video embeds** - Include YouTube links
2. **Create timeline** - Show progression over time
3. **Add quotes** - Inspirational quotes that motivate you
4. **Include achievements** - Specific milestones reached
5. **Link social media** - Connect to Instagram, Strava, etc.

---

Need help? Check the main portfolio sections for examples and inspiration!

Happy customizing! 🎉
