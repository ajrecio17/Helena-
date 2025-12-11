# GitHub Upload Instructions for Helena• Musicians Website

## Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Sign in with your GitHub account (create one if you don't have one)
3. Fill in the details:
   - **Repository name:** `helena-musicians` (or any name you prefer)
   - **Description:** "A modern, responsive website for Helena• Musicians"
   - **Visibility:** Choose "Public" (so anyone can see it)
   - **Initialize with README:** Leave unchecked (we already have one)
4. Click "Create repository"

## Step 2: Copy Your Repository URL

After creating the repository, you'll see a page with a green "Code" button.
- Copy the HTTPS URL (should look like: `https://github.com/yourusername/helena-musicians.git`)

## Step 3: Configure Git with Your Credentials

Run these commands in PowerShell (one time setup):

```powershell
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

## Step 4: Add Remote and Push to GitHub

In PowerShell, navigate to your Helena folder and run:

```powershell
cd "c:\Users\amilj\Desktop\Leina\Helena"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOURUSERNAME/helena-musicians.git

# Push your code to GitHub
git push -u origin main
```

Replace `YOURUSERNAME` with your actual GitHub username!

## Step 5: Verify Upload

1. Go to https://github.com/yourusername/helena-musicians
2. You should see all your files (index.html, styles.css, script.js, README.md)
3. Your code is now on GitHub! 🎉

## Step 6: Enable GitHub Pages (Optional but Recommended)

This will host your website for FREE at `https://yourusername.github.io/helena-musicians`

1. Go to your repository settings
2. Click "Pages" in the left sidebar
3. Under "Source," select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click "Save"
5. Wait 2-3 minutes for deployment
6. Your site will be live! ✨

## Step 7: Future Updates

When you make changes:

```powershell
cd "c:\Users\amilj\Desktop\Leina\Helena"

# Check what changed
git status

# Stage your changes
git add .

# Commit with a message
git commit -m "Update: Added new features"

# Push to GitHub
git push origin main
```

## Troubleshooting

### Error: "fatal: unable to access repository"
- Check your internet connection
- Verify the repository URL is correct
- You may need to set up GitHub authentication (SSH key or Personal Access Token)

### Error: "Permission denied"
- Generate a Personal Access Token at https://github.com/settings/tokens
- Use this token as your password when prompted

### GitHub Pages not showing
- Make sure your repository is public
- Wait 3-5 minutes for deployment
- Check the Actions tab to see if build succeeded

## Tips

✅ Keep your README.md updated with relevant information
✅ Use meaningful commit messages
✅ Push regularly to avoid losing work
✅ Tag releases for version management (git tag v1.0.0)

---

Need help? Check GitHub's official docs: https://docs.github.com
