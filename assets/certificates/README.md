# Certificates Folder

## How to Add Your Certificates

### Step 1: Prepare Your Certificate Files

1. **Save your certificates** from Eindhoven University of Technology
2. **Supported formats**: PDF (recommended), JPG, PNG
3. **Recommended file names**:
   - `rf-circuit-design.pdf` - For "RF and Millimeter-Wave Circuit Design"
   - `microwave-antennas.pdf` - For "Microwave Engineering and Antennas"

### Step 2: Add Files to This Folder

Simply copy your certificate files into this folder:
```
assets/certificates/
├── rf-circuit-design.pdf
├── microwave-antennas.pdf
└── README.md (this file)
```

### Step 3: Update File Names (if needed)

If you use different file names, update the `index.html` file:

**Find these lines in index.html:**
```html
<button class="view-certificate-btn" onclick="openCertificate('assets/certificates/rf-circuit-design.pdf')">
<button class="view-certificate-btn" onclick="openCertificate('assets/certificates/microwave-antennas.pdf')">
```

**Change the file paths** to match your actual file names.

### Alternative: Use LinkedIn Certificate URLs

If your certificates are on LinkedIn, you can link directly:
```html
<button class="view-certificate-btn" onclick="window.open('https://www.linkedin.com/...')">
```

### Tips:
- **PDF format** works best for viewing in the modal
- **Keep file sizes reasonable** (under 5MB) for faster loading
- **Use descriptive names** without spaces or special characters
- **Test locally** before pushing to GitHub

## Features of the Certificate Viewer

✅ **Modal Popup** - Professional fullscreen viewer
✅ **Download Button** - Visitors can download your certificates
✅ **Responsive** - Works on mobile and desktop
✅ **Keyboard Support** - Press ESC to close
✅ **Click Outside** - Click backdrop to close
✅ **Smooth Animations** - Fade in and slide up effects

---

**Questions?** Check the main README.md or open an issue.
