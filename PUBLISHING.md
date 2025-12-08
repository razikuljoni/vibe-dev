# Publishing Guide - Vibe Dev Tools

Complete guide to build, package, publish, and maintain the Vibe Dev Tools extension.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Build & Package](#build--package)
3. [Publishing](#publishing)
4. [GitHub Preparation](#github-preparation)
5. [Adding Themes](#adding-themes)
6. [Adding File Icons](#adding-file-icons)
7. [Adding Product Icons](#adding-product-icons)
8. [Maintenance](#maintenance)

---

## Prerequisites

### System Requirements

- **Node.js** v16+ ([download](https://nodejs.org/))
- **npm** v7+ or **yarn** v1.22+
- **Visual Studio Code** v1.74.0+

### Install Global Tools

```bash
npm install -g @vscode/vsce
```

Verify installation:
```bash
vsce --version
```

---

## Build & Package

### 1. Install Dependencies

```bash
cd vibe-dev-tools
npm install
```

### 2. Package as VSIX

Create a `.vsix` file for local installation or marketplace:

```bash
npm run package
# or
vsce package
```

Output: `vibe-dev-tools-1.0.0.vsix` (ready for distribution)

### 3. Test Locally

#### Install from VSIX
1. Open VS Code
2. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
3. Type "Extensions: Install from VSIX"
4. Select the `.vsix` file

#### Debug in Extension Development Host
1. Open folder in VS Code: `code vibe-dev-tools`
2. Press `F5` to launch debug environment
3. Test themes, icons, snippets, commands
4. Use `Cmd+Shift+P` to trigger commands:
   - "Vibe: Activate File Icons"
   - "Vibe: Activate Product Icons"
   - "Vibe: Choose File Icon Theme…"
   - "Vibe: Choose Product Icon Theme…"

---

## Publishing

### Step 1: Create Publisher Account

1. Visit [VS Code Marketplace](https://marketplace.visualstudio.com/manage)
2. Sign in with Microsoft account
3. Click "Create Publisher" and choose a unique ID (e.g., `vibe-tools`)
4. In Azure DevOps: Generate Personal Access Token (PAT)

### Step 2: Configure Publisher

Edit `package.json`:
```json
{
  "publisher": "your-publisher-id",
  "name": "vibe-dev-tools",
  "displayName": "Vibe Dev Tools - Complete Developer Suite"
}
```

### Step 3: Login with vsce

```bash
vsce login your-publisher-id
# When prompted, paste your Personal Access Token
```

### Step 4: Publish to Marketplace

```bash
# Publish current version
npm run publish

# Or publish with version bump
vsce publish minor   # 1.0.0 → 1.1.0
vsce publish patch   # 1.0.0 → 1.0.1
vsce publish major   # 1.0.0 → 2.0.0
```

### Step 5: Update Version

After publishing, update `package.json`:
```json
{
  "version": "1.0.1"
}
```

And update `CHANGELOG.md`:
```markdown
## [1.0.1] - 2024-12-06

### Fixed
- Fixed file icon mappings for newly added icons
- Added missing folder icon definitions

### Added
- Product icon theme support
- New theme switcher commands
```

---

## GitHub Preparation

### Create Repository

1. Go to [GitHub.com](https://github.com/new)
2. Create new repo: `vibe-dev-tools`
3. Copy repo URL

### Initialize and Push

```bash
cd /path/to/vibe-dev-tools

# Initialize git
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: Vibe Dev Tools extension

- 11 premium color themes
- 300+ file icon definitions
- 90+ folder icons
- Product icons theme
- JavaScript/TypeScript/React snippets
- Full VS Code & Cursor support"

# Add remote
git remote add origin https://github.com/YOUR_USERNAME/vibe-dev-tools.git

# Push to main
git branch -M main
git push -u origin main
```

### Add to Marketplace (Optional)

In VS Code Marketplace:
1. Link GitHub repo in publisher settings
2. Enable "Publish from CI/CD" if desired
3. Add repository URL to `package.json`:
```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/YOUR_USERNAME/vibe-dev-tools"
  }
}
```

---

## Adding Themes

### Create a New Theme

1. **Create theme file**: `themes/my-theme.json`

```json
{
  "name": "Vibe - My Theme",
  "settings": [
    {
      "scope": "comment",
      "settings": { "foreground": "#6A737D" }
    },
    {
      "scope": "string",
      "settings": { "foreground": "#032F62" }
    },
    {
      "scope": "constant",
      "settings": { "foreground": "#005CC5" }
    }
  ],
  "tokenColors": [
    {
      "scope": "keyword",
      "settings": { "foreground": "#D73A49" }
    }
  ]
}
```

2. **Register in `package.json`**:

```json
{
  "contributes": {
    "themes": [
      {
        "label": "Vibe - My Theme",
        "uiTheme": "vs-dark",
        "path": "./themes/my-theme.json"
      }
    ]
  }
}
```

3. **Test locally** with `F5` debug

4. **Update `CHANGELOG.md`** mentioning the new theme

### Theme Design Tips

- Use consistent accent colors across light/dark variants
- Test with code in multiple languages
- Ensure sufficient contrast (WCAG AA standard)
- Preview in VS Code before committing
- Document color palette in comments

---

## Adding File Icons

### Add Icon Assets

1. **Create SVG**: `icons/file-icons/files/my-icon.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill="#FF6B35" d="M2 2h28v28H2z"/>
  <text x="16" y="20" text-anchor="middle" fill="#fff" font-size="6">
    MY
  </text>
</svg>
```

Guidelines:
- Use 32x32 viewBox
- Keep under 5KB
- Optimize with [SVGOMG](https://jakearchibald.github.io/svgomg/)
- Test at different sizes

### Register in Icon Theme

Edit `icons/vibe-file-icon-theme.json`:

```json
{
  "iconDefinitions": {
    "my-icon": {
      "iconPath": "./file-icons/files/my-icon.svg"
    }
  },
  "fileExtensions": {
    "myext": "my-icon",
    "myfile": "my-icon"
  },
  "fileNames": {
    ".myconfig": "my-icon",
    "myconfig.json": "my-icon"
  }
}
```

### Test Icons

```bash
npm run package
# Install .vsix and verify in File Explorer
```

---

## Adding Product Icons

Product icons are toolbar and UI icons. Create icon font-based themes:

1. **Create product icon theme file**: `icons/vibe-product-icon-theme.json`

```json
{
  "fonts": [
    {
      "id": "vibe-product-icons",
      "src": [
        {
          "path": "./icons/product-icons/vibe-icons.woff",
          "format": "woff"
        }
      ],
      "style": "normal",
      "weight": "normal"
    }
  ],
  "iconDefinitions": {
    "add": { "fontCharacter": "\\e001" },
    "remove": { "fontCharacter": "\\e002" }
  }
}
```

2. **Register in `package.json`**:

```json
{
  "contributes": {
    "productIconThemes": [
      {
        "id": "vibe-product-icons",
        "label": "Vibe Product Icons",
        "path": "./icons/vibe-product-icon-theme.json"
      }
    ]
  }
}
```

3. **Activate with command**:

```bash
# Press Cmd+Shift+P and run "Vibe: Activate Product Icons"
```

---

## Maintenance

### Update Workflows

#### Monthly Check
- [ ] Verify all icons render correctly
- [ ] Test themes on latest VS Code
- [ ] Review open issues/PRs
- [ ] Update dependencies: `npm update`

#### Before Release
- [ ] Run `vsce package` (validate no warnings)
- [ ] Test all 11 themes
- [ ] Test file icon theme
- [ ] Test product icons
- [ ] Test all snippets (JS/TS/React)
- [ ] Update `CHANGELOG.md`
- [ ] Increment version in `package.json`

### Troubleshooting

#### Package Too Large
- Add unused folders to `.vscodeignore`
- Optimize large SVG files
- Remove node_modules: `npm prune --production`

#### Icons Not Showing
1. Verify icon definition in JSON (no typos)
2. Check SVG file exists and path is correct
3. Reload VS Code window (`Cmd+R`)
4. Check file name casing

#### Theme Not Loading
1. Validate JSON syntax: `jq . themes/my-theme.json`
2. Test with simpler theme first
3. Check token scope syntax

### Version Scheme

Follow [Semantic Versioning](https://semver.org/):
- **MAJOR** (1.0.0): Breaking changes, big features
- **MINOR** (1.1.0): New themes/icons, new features
- **PATCH** (1.0.1): Bug fixes, refinements

---

## File Checklist for Publishing

Ensure these files exist before packaging:

- ✅ `package.json` - Manifest with all contributions
- ✅ `extension.js` - Main extension code
- ✅ `README.md` - Feature overview
- ✅ `CHANGELOG.md` - Version history
- ✅ `LICENSE` - MIT license
- ✅ `.vscodeignore` - Exclusions
- ✅ `assets/icon.png` - Extension icon (128x128px)
- ✅ `themes/*.json` - All theme files (11 total)
- ✅ `icons/vibe-file-icon-theme.json` - Icon theme
- ✅ `icons/file-icons/files/*.svg` - 300+ file icons
- ✅ `icons/file-icons/folders/*.svg` - 90+ folder icons
- ✅ `snippets/*.json` - JS/TS/React snippets
- ✅ `docs/` - Documentation files

---

## Quick Commands

```bash
# Package extension
npm run package

# Publish to marketplace
npm run publish

# Debug locally
# Open in VS Code and press F5

# Validate package
vsce package

# List assets in package
unzip -l vibe-dev-tools-1.0.0.vsix | grep -E "(svg|json|md)" | wc -l
```

---

## Resources

- [VS Code Extension API](https://code.visualstudio.com/api)
- [Marketplace Publishing](https://code.visualstudio.com/docs/editor/extension-marketplace)
- [Icon Theme Format](https://code.visualstudio.com/docs/getstarted/themes#_file-icon-themes)
- [vsce CLI](https://github.com/microsoft/vscode-vsce)

---

**Last Updated**: December 6, 2025
