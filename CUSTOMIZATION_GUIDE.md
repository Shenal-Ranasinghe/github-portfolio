# Quick Tips & Customization Guide

## 🎨 Customizing Your Portfolio

### Profile Picture
**Location:** `assets/images/profile.jpg`

```
Recommended specs:
- Size: 800x800px (or larger square)
- Format: JPG or PNG
- File size: < 500KB
- Style: Professional headshot
```

### Volunteering Section
**File:** `index.html` (lines ~405-470)

You can update:
- Event count (currently "10+ Events Organized")
- Student reach (currently "100+ Students Reached")
- Add more volunteering cards in the grid
- Update responsibilities list

### Life Beyond Academics
**File:** `index.html` (lines ~473-550)

Customize the 6 activity cards:
1. Change icons (use Font Awesome icons: https://fontawesome.com/icons)
2. Update descriptions to match your actual interests
3. Add/remove cards as needed
4. Modify headings

### Colors & Theme
**File:** `styles.css` (lines 1-40)

Main colors defined in `:root`:
```css
--accent-primary: #00f5ff;    /* Cyan */
--accent-secondary: #7b2ff7;  /* Purple */
--accent-tertiary: #ff006e;   /* Pink */
```

Change these to customize your color scheme!

---

## 🔧 Common Modifications

### Add More Volunteering Activities
```html
<div class="volunteering-card">
    <div class="volunteering-icon">
        <i class="fas fa-ICON-NAME"></i>
    </div>
    <h3>Your Role</h3>
    <p class="organization">Organization Name</p>
    <p>Description of your role and impact</p>
</div>
```

### Add More Life Activities
```html
<div class="life-card">
    <div class="life-icon">
        <i class="fas fa-ICON-NAME"></i>
    </div>
    <h3>Activity Title</h3>
    <p>Description of this activity and why it matters to you.</p>
</div>
```

---

## 🐛 Troubleshooting

### Profile Picture Not Showing
1. Check filename is exactly `profile.jpg` (case-sensitive on Linux)
2. Verify file is in `assets/images/` folder
3. Check browser console for errors (F12)
4. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### Navigation Not Smooth
- Ensure JavaScript is enabled
- Check `script.js` is loading properly
- Verify section IDs match navigation links

### Animations Not Working
- Update browser to latest version
- Check CSS animations are enabled
- Some older browsers may not support all effects

### Mobile Menu Not Opening
- Check JavaScript console for errors
- Verify `script.js` is linked correctly in HTML
- Test on different mobile browsers

---

## 📱 Testing Checklist

Before going live:
- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on mobile (iOS and Android)
- [ ] Check all navigation links work
- [ ] Verify all animations are smooth
- [ ] Test contact form (if connected)
- [ ] Check loading speed (should be < 3 seconds)
- [ ] Validate HTML (https://validator.w3.org/)
- [ ] Check accessibility (color contrast, keyboard navigation)
- [ ] Test on different screen sizes (phone, tablet, laptop, desktop)

---

## 🚀 Performance Tips

1. **Optimize Images:**
   - Compress profile picture before uploading
   - Use WebP format for better compression
   - Consider lazy loading for project images

2. **Minify Code (for production):**
   - Minify CSS and JavaScript
   - Remove unused CSS rules
   - Combine files to reduce HTTP requests

3. **Use CDN:**
   - Current Font Awesome and Google Fonts use CDN ✅
   - Consider CDN for other resources

---

## 🎯 SEO Optimization

Current setup includes:
- Meta description ✅
- Semantic HTML ✅
- Alt text for images ✅

To improve:
1. Add Open Graph tags for social sharing
2. Include structured data (JSON-LD)
3. Create sitemap.xml
4. Add robots.txt
5. Optimize page titles for keywords

---

## 📞 Support

If you need to make more changes:
1. Backup your files first
2. Edit one section at a time
3. Test after each change
4. Use browser DevTools (F12) to debug

Common files to edit:
- `index.html` - Content and structure
- `styles.css` - Styling and animations
- `script.js` - Interactive features

---

**Pro Tip:** Keep a backup of your working version before making major changes!

Happy customizing! 🎉
