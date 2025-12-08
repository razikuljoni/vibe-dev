# DEVELOPMENT.md - Quick Start for Developers

Complete reference for building, testing, and extending Vibe Dev Tools.

## Quick Setup

```bash
# Clone or download the repository
cd vibe-dev-tools

# Install dependencies
npm install

# Launch debug environment
code .
# Then press F5
```

---

## Build & Package Commands

```bash
# Install dependencies
npm install

# Package extension (.vsix file)
npm run package

# Publish to VS Code Marketplace
npm run publish

# Publish with version bump
vsce publish patch    # 1.0.0 → 1.0.1
vsce publish minor    # 1.0.0 → 1.1.0
vsce publish major    # 1.0.0 → 2.0.0
```

---

## Project Structure

```
vibe-dev-tools/
├── extension.js                    # Main extension entry point
├── package.json                    # VS Code extension manifest
├── README.md                       # Extension overview
├── CHANGELOG.md                    # Version history
├── PUBLISHING.md                   # Full publishing guide
├── DEVELOPMENT.md                  # This file
├── LICENSE                         # MIT license
├── .vscodeignore                   # Files to exclude from package
│
├── assets/                         # Extension assets
│   └── icon.png                    # Extension icon (128x128)
│
├── themes/                         # Color themes
│   ├── knightfall.json
│   ├── midnight-dark.json
│   ├── abyssal-blue.json
│   ├── midnight-owl.json
│   ├── atom-one-dark.json
│   ├── arctis.json
│   ├── arctics-dark.json
│   ├── ayu-dark-bordered.json
│   ├── ayu-mirage-bordered.json
│   ├── github-dimmed.json
│   └── x-code-civik.json
│
├── icons/                          # File & folder icons
│   ├── vibe-file-icon-theme.json   # Icon theme definition
│   └── file-icons/
│       ├── files/                  # 300+ file icons (SVG)
│       │   ├── javascript.svg
│       │   ├── typescript.svg
│       │   ├── react.svg
│       │   └── ...
│       └── folders/                # 90+ folder icons (SVG)
│           ├── folder.svg
│           ├── folder-src.svg
│           ├── folder-components.svg
│           └── ...
│
├── snippets/                       # Code snippets
│   ├── javascript.json
│   ├── typescript.json
│   └── react.json
│
├── file-icons/                     # Additional icon packs
│   ├── atomic-symbols/
│   │   ├── productIcons/           # Product icon theme
│   │   └── src/                    # TypeScript source
│   ├── vscode-react-icons/
│   └── vscode-symbols/
│
├── docs/                           # User documentation
│   ├── ADDING-THEMES.md
│   ├── ADDING-ICONS.md
│   ├── BUILDING.md
│   └── USAGE.md
│
├── .vscode/                        # VS Code dev settings
│   ├── launch.json                 # Debug configuration
│   ├── settings.json               # Editor settings
│   └── tasks.json                  # Build tasks
│
└── .github/                        # GitHub templates (optional)
    ├── ISSUE_TEMPLATE/
    └── workflows/
```

---

## Adding Features

### Add a New Theme

1. Create theme file: `themes/my-awesome.json`

```json
{
  "name": "Vibe - My Awesome",
  "settings": [
    {
      "scope": "comment",
      "settings": {
        "foreground": "#6A737D"
      }
    },
    {
      "scope": "string",
      "settings": {
        "foreground": "#0398FC"
      }
    }
  ]
}
```

2. Register in `package.json` under `contributes.themes`:

```json
{
  "label": "Vibe - My Awesome",
  "uiTheme": "vs-dark",
  "path": "./themes/my-awesome.json"
}
```

3. Test with `F5` (Extension Development Host)

4. Package and test: `npm run package`

### Add File Icons

1. Create SVG: `icons/file-icons/files/myicon.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill="#FF6B35" d="M2 2h28v28H2z"/>
</svg>
```

2. Register in `icons/vibe-file-icon-theme.json`:

```json
{
  "iconDefinitions": {
    "my-icon": {
      "iconPath": "./file-icons/files/myicon.svg"
    }
  },
  "fileExtensions": {
    "myext": "my-icon"
  }
}
```

3. Test with `F5`

### Add Folder Icons

1. Create SVG: `icons/file-icons/folders/folder-myname.svg`

2. Register definition + both collapsed/expanded variants:

```json
{
  "iconDefinitions": {
    "folder-myname": {
      "iconPath": "./file-icons/folders/folder-myname.svg"
    },
    "folder-myname-open": {
      "iconPath": "./file-icons/folders/folder-myname-open.svg"
    }
  },
  "folderNames": {
    "myname": "folder-myname"
  },
  "folderNamesExpanded": {
    "myname": "folder-myname-open"
  }
}
```

### Add Product Icons

See [PUBLISHING.md - Adding Product Icons](./PUBLISHING.md#adding-product-icons) for detailed steps.

---

## Testing

### Test Locally

1. Press `F5` to launch Extension Development Host
2. New VS Code window opens with extension loaded
3. Open any project and test:
   - Themes: `Cmd+K Cmd+T`
   - File icons: Verify in File Explorer
   - Product icons: Check toolbar
   - Snippets: Type snippet prefix + `Tab`

### Test Packaged Extension

1. Package: `npm run package`
2. Open VS Code → Extensions
3. Click ⋯ menu → "Install from VSIX"
4. Select `vibe-dev-tools-1.0.0.vsix`
5. Reload window and test

### Validation

```bash
# Validate package structure
vsce package

# Check for issues (no output = success)
```

---

## Extension Commands

User can trigger these via `Cmd+Shift+P`:

| Command | ID | Description |
|---------|----|----|
| **Vibe: Activate File Icons** | `vibe.switchFileIcons` | Apply Vibe file icons |
| **Vibe: Activate Product Icons** | `vibe.switchProductIcons` | Apply Vibe product icons |
| **Vibe: Choose File Icon Theme…** | `vibe.chooseFileIcons` | Show file icon picker |
| **Vibe: Choose Product Icon Theme…** | `vibe.chooseProductIcons` | Show product icon picker |

Implemented in `extension.js`.

---

## Key Files Reference

### extension.js

Main extension code that registers commands:
- `vibe.switchFileIcons` - Apply file icons
- `vibe.switchProductIcons` - Apply product icons
- `vibe.chooseFileIcons` - Open file icon selector
- `vibe.chooseProductIcons` - Open product icon selector

### package.json

VS Code manifest containing:

- **name/displayName/version** - Metadata
- **publisher** - Marketplace publisher
- **icon** - Extension icon
- **contributes.themes** - 11 color themes
- **contributes.iconThemes** - File icon themes
- **contributes.productIconThemes** - Product icon themes
- **contributes.snippets** - JS/TS/React snippets
- **contributes.commands** - User-facing commands
- **activationEvents** - When to load extension

### vibe-file-icon-theme.json

Icon theme definition with:

- **iconDefinitions** - Icon paths (300+ file icons, 90+ folder icons)
- **fileExtensions** - Map extensions to icons
- **fileNames** - Map specific filenames to icons
- **folderNames** - Map folder names to icons
- **folderNamesExpanded** - Open folder variants

---

## Debugging Tips

### VS Code DevTools

In Extension Development Host:
- Press `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (Mac) to open DevTools
- Check Console tab for errors
- Inspect Elements

### View Extension Logs

1. Open Extension Development Host
2. View → Output
3. Select "Vibe Dev Tools" from dropdown
4. See debug output

### Check Configuration

In debug terminal:

```javascript
// In Console
console.log(vscode.workspace.getConfiguration('workbench').get('iconTheme'))
console.log(vscode.workspace.getConfiguration('workbench').get('colorTheme'))
```

---

## Publishing Workflow

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Test package: `npm run package`
4. Commit changes: `git commit -am "Version bump"`
5. Publish: `npm run publish`
6. Tag release: `git tag v1.0.0 && git push --tags`

See [PUBLISHING.md](./PUBLISHING.md) for detailed steps.

---

## Contributing

When modifying the extension:

1. Create a feature branch: `git checkout -b feature/my-feature`
2. Make changes
3. Test with `F5`
4. Package and test: `npm run package`
5. Update `CHANGELOG.md`
6. Commit and push
7. Open Pull Request

---

## Resources

- [VS Code Extension API](https://code.visualstudio.com/api)
- [Extension Publishing](https://code.visualstudio.com/docs/editor/extension-marketplace)
- [Icon Themes](https://code.visualstudio.com/docs/getstarted/themes#_file-icon-themes)
- [Color Theme Format](https://code.visualstudio.com/docs/getstarted/themes)
- [vsce Documentation](https://github.com/microsoft/vscode-vsce)

---

## FAQ

**Q: Why is my icon not showing?**

A: Check:
1. Icon path is correct in JSON
2. SVG file exists
3. Icon is referenced in fileExtensions/folderNames
4. Reload VS Code window

**Q: How do I test without packaging?**

A: Press `F5` to run in Extension Development Host.

**Q: Can I use PNG icons?**

A: Yes, but SVG is preferred (scalable, smaller file size).

**Q: How do I add icons for a specific project type?**

A: Map filenames or folder names in icon theme JSON, or use language-specific patterns.

**Q: What's the maximum extension size?**

A: 200 MB. Keep .vscodeignore up-to-date to exclude unnecessary files.

---

**Last Updated**: December 6, 2025
