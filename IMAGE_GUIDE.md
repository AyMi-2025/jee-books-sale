# How to Add Your Book Images

## Option 1: Create an Images Folder (Recommended)

1. In the same folder as your website files, create a new folder called `images`
2. Add your book photos to this folder
3. Name them clearly (e.g., `physics-hcverma-vol1.jpg`, `chemistry-morrison.jpg`)
4. Update the `image` field in `script.js`:

```javascript
{
    id: 1,
    title: "Concepts of Physics Vol 1",
    image: "images/physics-hcverma-vol1.jpg"  // ← Use this path
}
```

## Option 2: Upload to Image Hosting

1. Upload photos to:
   - **Imgur**: https://imgur.com (free, easy)
   - **Google Drive**: Make the image publicly accessible and get the direct link
   - **Cloudinary**: https://cloudinary.com (free tier available)

2. Get the direct image URL
3. Use it in `script.js`:

```javascript
{
    id: 1,
    title: "Concepts of Physics Vol 1",
    image: "https://i.imgur.com/abc123.jpg"  // ← Use direct URL
}
```

## Option 3: Keep Placeholder Images

The current placeholder images from Unsplash will work, but they won't show your actual books.

## Image Tips

✅ **DO:**
- Use clear, well-lit photos
- Show the book cover prominently
- Keep images under 1MB for faster loading
- Use JPG format (smaller file size)
- Name files descriptively

❌ **DON'T:**
- Use very large image files (>2MB)
- Use blurry or dark photos
- Forget to upload images to GitHub when deploying

## Example Folder Structure

```
jee-books-store/
├── index.html
├── style.css
├── script.js
├── README.md
└── images/
    ├── physics-hcverma-vol1.jpg
    ├── physics-hcverma-vol2.jpg
    ├── physics-irodov.jpg
    ├── chemistry-morrison.jpg
    ├── chemistry-tandon.jpg
    ├── math-rdsharma.jpg
    └── math-loney.jpg
```

## Quick Image Resize Guide

If your images are too large:

**On Windows:**
- Right-click image → Open with → Paint
- Resize → By percentage → 50%
- Save

**On Mac:**
- Open with Preview
- Tools → Adjust Size
- Width: 800 pixels
- Save

**Online Tool:**
- Visit: https://imageresizer.com
- Upload, resize to 800px width
- Download

---

**Remember:** After adding images to the `images` folder, make sure to upload the entire folder to GitHub along with your other files!
