# Command Reference - Quick Start

Essential commands for building, testing, and publishing Vibe Dev Tools.

## Development Workflow

```bash
cd vibe-dev-tools

# Install dependencies
npm install

# Test locally: Open VS Code and press F5
code .

# Package extension (.vsix file)
npm run package

# Publish to VS Code Marketplace
npm run publish
```

---

## Build Commands

### Package Extension

```bash
npm run package
```

Creates `vibe-dev-tools-1.0.0.vsix` ready for distribution.

### Publish to Marketplace

```bash
npm run publish
```

### Publish with Version Bump

```bash
vsce publish patch    # 1.0.0 → 1.0.1
vsce publish minor    # 1.0.0 → 1.1.0
vsce publish major    # 1.0.0 → 2.0.0
```

---

## Testing Commands

### Test Locally (Debug Mode)

```bash
# Open folder in VS Code
code .

# Press F5 to launch Extension Development Host
# Test in the new window
```

### Install from VSIX

Option 1: Command line
```bash
code --install-extension vibe-dev-tools-1.0.0.vsix
```

Option 2: VS Code UI
1. Press `Cmd+Shift+P` or `Ctrl+Shift+P`
2. Type "Install from VSIX"
3. Select `.vsix` file

### Validate Package

```bash
vsce package
```

Checks for errors, validates JSON, verifies all paths exist.

---

## Extension Commands (User)

Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux):

| Command | Triggers |
|---------|----------|
| **Vibe: Activate File Icons** | Enables Vibe file icons |
| **Vibe: Activate Product Icons** | Enables Vibe product icons |
| **Vibe: Choose File Icon Theme…** | Opens file icon picker |
| **Vibe: Choose Product Icon Theme…** | Opens product icon picker |
| **Color Theme** | Switch color themes |
| **File Icon Theme** | Switch file/folder icons |
| **Product Icon Theme** | Switch UI icons |

---

## GitHub Setup

```bash
# Initialize repository
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial: Vibe Dev Tools extension

- 11 color themes
- 300+ file icons
- 90+ folder icons
- Product icons
- JS/TS/React snippets"

# Connect to GitHub
git remote add origin https://github.com/YOUR_USER/vibe-dev-tools.git

# Push to main
git branch -M main
git push -u origin main
```

---

## Version Management

Edit `package.json`:
```json
{
  "version": "1.0.1"
}
```

Update `CHANGELOG.md`:
```markdown
## [1.0.1] - 2024-12-06

### Added
- New file icons

### Fixed
- Fixed icon mappings
```

---

## File Structure

```
vibe-dev-tools/
├── extension.js                # Main code
├── package.json               # Manifest
├── themes/                    # 11 color themes
├── icons/
│   ├── vibe-file-icon-theme.json
│   └── file-icons/
│       ├── files/            # 300+ icons
│       └── folders/          # 90+ icons
├── snippets/                  # JS/TS/React
└── docs/                      # Documentation
```

---

## Adding Assets

### New Theme
1. Create `themes/my-theme.json`
2. Add to `package.json` contributes.themes
3. Test: Press F5

### New File Icon
1. Create `icons/file-icons/files/icon.svg`
2. Add to `icons/vibe-file-icon-theme.json` iconDefinitions
3. Map extension in fileExtensions
4. Test: Press F5

### New Folder Icon
1. Create `icons/file-icons/folders/folder-name.svg`
2. Add definitions + mappings in icon theme JSON
3. Test: Press F5

---

## Publishing Checklist

- [ ] Update version in `package.json`
- [ ] Update `CHANGELOG.md`
- [ ] Test locally with F5
- [ ] Run `npm run package` (no errors)
- [ ] Test .vsix installation
- [ ] Test all themes load
- [ ] Test file icons appear
- [ ] Test product icons work
- [ ] Run `npm run publish`
- [ ] Verify on VS Code Marketplace

---

## Resources

- [Build](./PUBLISHING.md) - Full build & publish guide
- [Development](./DEVELOPMENT.md) - Dev environment setup
- [Usage](./docs/USAGE.md) - How to use extension
- [Adding Themes](./docs/ADDING-THEMES.md) - Theme creation
- [Adding Icons](./docs/ADDING-ICONS.md) - Icon creation

---

Last Updated: December 6, 2025

### Uninstall Extension
```bash
code --uninstall-extension vibe-tools.vibe-dev-tools
```

## Publishing Commands

### Login to VS Marketplace
```bash
vsce login your-publisher-name
# Enter your Personal Access Token when prompted
```

### Publish Extension
```bash
npm run publish
# or
vsce publish
```

### Publish Specific Version
```bash
vsce publish patch  # 1.0.0 -> 1.0.1
vsce publish minor  # 1.0.0 -> 1.1.0
vsce publish major  # 1.0.0 -> 2.0.0
```

### Publish Pre-release
```bash
vsce publish --pre-release
```

## Validation Commands

### Validate Package
```bash
vsce package --no-yarn
```

This checks:
- All required files exist
- JSON files are valid
- Icon paths are correct
- Manifest is complete

### List Package Contents
```bash
vsce ls
```

Shows all files that will be included in the package.

### Verify Icon Paths
```bash
# Check if all referenced icons exist
cd icons/file-icons
find . -name "*.svg" | wc -l
```

## Git Commands

### Initialize Repository
```bash
git init
git add .
git commit -m "Initial commit: Vibe Dev Tools v1.0.0"
```

### Tag Version
```bash
git tag v1.0.0
git push origin v1.0.0
```

### Setup Remote
```bash
git remote add origin https://github.com/your-username/vibe-dev-tools.git
git branch -M main
git push -u origin main
```

## Maintenance Commands

### Update Dependencies
```bash
npm update
npm outdated  # Check for outdated packages
```

### Update vsce
```bash
npm install -g @vscode/vsce@latest
```

### Clean Build Artifacts
```bash
rm -f *.vsix
rm -rf node_modules
npm install
```

## Development Workflow

### Complete Build & Test Flow
```bash
# 1. Install dependencies
npm install

# 2. Make changes to themes/icons/snippets

# 3. Package extension
npm run package

# 4. Install and test
code --install-extension vibe-dev-tools-1.0.0.vsix

# 5. Test themes and icons in VS Code

# 6. If good, commit changes
git add .
git commit -m "Add new theme"

# 7. Publish (when ready)
vsce publish
```

### Quick Iteration
```bash
# Make changes -> Package -> Install
npm run package && code --install-extension vibe-dev-tools-1.0.0.vsix --force
```

## File Management Commands

### Add New Theme
```bash
# 1. Copy existing theme
cp themes/knightfall.json themes/my-theme.json

# 2. Edit theme colors
# Edit themes/my-theme.json

# 3. Register in package.json
# Add theme to contributes.themes array

# 4. Test
npm run package
```

### Add New Icons
```bash
# 1. Add SVG files
cp my-icon.svg icons/file-icons/files/

# 2. Register in theme
# Edit icons/vibe-file-icon-theme.json

# 3. Map extensions
# Add to fileExtensions or fileNames

# 4. Test
npm run package
```

### Add New Snippets
```bash
# 1. Edit snippet file
# snippets/javascript.json or typescript.json or react.json

# 2. Test immediately (no rebuild needed for snippets)
# Reload VS Code window
```

## Troubleshooting Commands

### Check Extension Status
```bash
code --list-extensions --show-versions | grep vibe
```

### View Extension Logs
```bash
# In VS Code:
# 1. View -> Output
# 2. Select "Extensions" from dropdown
```

### Validate JSON Files
```bash
# Validate all JSON files
find . -name "*.json" -not -path "./node_modules/*" -exec echo "Checking: {}" \; -exec node -e "JSON.parse(require('fs').readFileSync('{}'))" \;
```

### Check Package Size
```bash
ls -lh vibe-dev-tools-*.vsix
```

**Note**: Marketplace limit is 50MB

## Platform-Specific Commands

### macOS
```bash
# Install extension
open -a "Visual Studio Code" vibe-dev-tools-1.0.0.vsix

# Uninstall
rm -rf ~/.vscode/extensions/vibe-tools.vibe-dev-tools-*
```

### Windows
```powershell
# Install extension
code --install-extension vibe-dev-tools-1.0.0.vsix

# Uninstall
Remove-Item -Recurse -Force "$env:USERPROFILE\.vscode\extensions\vibe-tools.vibe-dev-tools-*"
```

### Linux
```bash
# Install extension
code --install-extension vibe-dev-tools-1.0.0.vsix

# Uninstall
rm -rf ~/.vscode/extensions/vibe-tools.vibe-dev-tools-*
```

## CI/CD Commands

### GitHub Actions Example
```yaml
- name: Install dependencies
  run: npm install

- name: Package extension
  run: npm run package

- name: Publish extension
  run: vsce publish
  env:
    VSCE_PAT: ${{ secrets.VSCE_TOKEN }}
```

## Quick Reference

| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Package | `npm run package` |
| Install locally | `code --install-extension *.vsix` |
| Publish | `vsce publish` |
| Validate | `vsce ls` |
| Version patch | `vsce publish patch` |
| Version minor | `vsce publish minor` |
| Version major | `vsce publish major` |
| Login | `vsce login publisher-name` |
| List contents | `vsce ls` |

## Environment Variables

### VSCE_PAT
Personal Access Token for publishing:
```bash
export VSCE_PAT="your-token-here"
vsce publish
```

### NODE_ENV
```bash
NODE_ENV=production npm run package
```

## Aliases (Optional)

Add to `.bashrc` or `.zshrc`:
```bash
alias vibe-build="cd ~/vibe-dev-tools && npm run package"
alias vibe-install="code --install-extension ~/vibe-dev-tools/vibe-dev-tools-*.vsix --force"
alias vibe-dev="vibe-build && vibe-install"
```

Then simply run:
```bash
vibe-dev  # Builds and installs in one command
```
