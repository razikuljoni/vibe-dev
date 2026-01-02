# Vibe Dev Tools - Complete Developer Suite

A comprehensive VS Code extension suite featuring premium dark themes, modern file icons, folder icons, and productivity snippets for JavaScript, TypeScript, and React development.

## Features

### 🎨 Premium Dark Themes (11 Themes)
- **Vibe - Knightfall** - Elegant dark theme with purple accents
- **Vibe - Midnight Dark** - Deep dark theme with blue tones
- **Vibe - Abyssal Blue** - Rich blue dark theme
- **Vibe - Midnight Owl** - Night owl inspired theme
- **Vibe - Atom One Dark** - Popular Atom-inspired theme
- **Vibe - Arctis** - Cool arctic blue theme
- **Vibe - Arctics Dark** - Darker arctic variant
- **Vibe - Ayu Dark Bordered** - Ayu dark with borders
- **Vibe - Ayu Mirage Bordered** - Ayu mirage variant
- **Vibe - GitHub Dimmed** - GitHub's dimmed dark theme
- **Vibe - XCode Civik** - XCode-inspired theme

### 📁 Modern File & Folder Icons
- **300+ file type icons** - React, TypeScript, JavaScript, JSON, and more
- **90+ folder icons** - Colored folders, framework-specific icons (Angular, React, Vue, etc.)
- **Technology-specific icons** - AWS, Azure, Docker, Firebase, MongoDB, and many more

### ⚡ Productivity Snippets
Includes snippets for:
- JavaScript (ES6+)
- TypeScript
- React (JSX/TSX)

## Installation

### From VSIX File
1. Download the latest `.vsix` file
2. Open VS Code
3. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
4. Type "Install from VSIX"
5. Select the downloaded file

### From Marketplace (when published)
1. Open VS Code
2. Go to Extensions (`Cmd+Shift+X` or `Ctrl+Shift+X`)
3. Search for "Vibe Dev Tools"
4. Click Install

## Usage

### Activating a Theme
1. Press `Cmd+K Cmd+T` (Mac) or `Ctrl+K Ctrl+T` (Windows/Linux)
2. Select any "Vibe -" theme from the list

### Activating File Icons
1. Press `Cmd+Shift+P` or `Ctrl+Shift+P`
2. Type "File Icon Theme"
3. Select "Vibe File Icons"

### Using Snippets
Snippets are automatically available in JavaScript, TypeScript, and React files. Type the prefix and press Tab.

## What's Included

```
vibe-dev-tools/
├── themes/          # 11 premium color themes
├── icons/           # File and folder icons
│   ├── file-icons/
│   │   ├── files/   # 300+ file icons
│   │   └── folders/ # 90+ folder icons
│   └── vibe-file-icon-theme.json
├── snippets/        # Code snippets
│   ├── javascript.json
│   ├── typescript.json
│   └── react.json
└── package.json
```

## Requirements
- VS Code version 1.74.0 or higher
- Works with Cursor and other VS Code forks

## Development

### Release Automation

This project uses automated release management with [standard-version](https://github.com/conventional-changelog/standard-version) for:
- Automatic version bumping
- CHANGELOG.md generation
- Git tag creation
- Extension packaging

**Quick Start:**
```bash
# Install dependencies
pnpm install

# Create a release (auto-detects version bump)
pnpm run release

# Or specify version type
pnpm run release:minor  # 1.0.0 → 1.1.0
pnpm run release:major  # 1.0.0 → 2.0.0
pnpm run release:patch  # 1.0.0 → 1.0.1
```

**Important:** Use [Conventional Commits](https://www.conventionalcommits.org/) for your commit messages:
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `chore:` - Maintenance tasks

For detailed release instructions, see [RELEASE.md](./RELEASE.md).

### Project Structure

```
vibe-dev-tools/
├── assets/           # Extension icon and assets
│   └── icon.png     # Extension icon (128x128px)
├── themes/          # 11 premium color themes
├── icons/            # File and folder icons
├── snippets/         # Code snippets
├── package.json      # Extension manifest
├── CHANGELOG.md      # Auto-generated changelog
└── RELEASE.md        # Release automation guide
```

## License
MIT

## Credits
This extension combines and curates themes and icons from various open-source projects. See individual theme files for specific attributions.
