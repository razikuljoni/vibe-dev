# Building and Publishing Guide

This guide covers building, testing, and publishing the Vibe Dev Tools extension.

## Prerequisites

```bash
# Install Node.js (v16 or higher)
# Install npm or yarn

# Install vsce (Visual Studio Code Extension Manager)
npm install -g @vscode/vsce
```

## Building the Extension

### 1. Install Dependencies

```bash
cd vibe-dev-tools
npm install
```

### 2. Package the Extension

Create a `.vsix` file that can be installed locally:

```bash
npm run package
# or
vsce package
```

This creates a `vibe-dev-tools-1.0.0.vsix` file in the root directory.

### 3. Test the Extension Locally

#### Option A: Install from VSIX
1. Open VS Code
2. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
3. Type "Extensions: Install from VSIX"
4. Select the generated `.vsix` file

#### Option B: Debug Mode
1. Open the `vibe-dev-tools` folder in VS Code
2. Press `F5` to launch Extension Development Host
3. Test themes and icons in the new window

## Publishing to Marketplace

### 1. Create Publisher Account

Visit [Visual Studio Marketplace](https://marketplace.visualstudio.com/manage):
1. Sign in with Microsoft account
2. Create a publisher ID (e.g., "vibe-tools")
3. Get Personal Access Token from Azure DevOps

### 2. Login with vsce

```bash
vsce login your-publisher-name
# Enter your Personal Access Token
```

### 3. Update Publisher Name

Edit `package.json`:
```json
{
  "publisher": "your-actual-publisher-name"
}
```

### 4. Publish

```bash
npm run publish
# or
vsce publish
```

For specific version:
```bash
vsce publish minor  # 1.0.0 -> 1.1.0
vsce publish patch  # 1.0.0 -> 1.0.1
vsce publish major  # 1.0.0 -> 2.0.0
```

## Validation

Before publishing, run validation:

```bash
vsce package --no-yarn
```

This checks:
- All required files are present
- Icon paths are correct
- JSON files are valid
- Package structure is correct

## File Structure Checklist

Ensure these files exist:
- ✅ `package.json` - Main manifest
- ✅ `README.md` - Documentation
- ✅ `CHANGELOG.md` - Version history
- ✅ `LICENSE` - License file
- ✅ `.vscodeignore` - Files to exclude
- ✅ `themes/*.json` - All theme files
- ✅ `icons/vibe-file-icon-theme.json` - Icon theme
- ✅ `icons/file-icons/files/*.svg` - File icons
- ✅ `icons/file-icons/folders/*.svg` - Folder icons
- ✅ `snippets/*.json` - Code snippets

## Common Issues

### Missing Icons
If icons don't show:
- Verify file paths in `vibe-file-icon-theme.json`
- Ensure all SVG files exist in `icons/file-icons/`
- Check for typos in icon definitions

### Theme Not Loading
- Validate JSON syntax in theme files
- Ensure `contributes.themes` paths are correct
- Check VS Code version compatibility

### Package Too Large
If package exceeds size limits:
- Review `.vscodeignore` to exclude unnecessary files
- Remove `node_modules` if accidentally included
- Optimize large image files

## Version Management

Update version in `package.json`:
```json
{
  "version": "1.0.0"
}
```

Update `CHANGELOG.md` with changes for each version.

## Testing Checklist

Before publishing:
- [ ] Test all themes load correctly
- [ ] Verify file icons appear for common file types
- [ ] Check folder icons work
- [ ] Test snippets in JS/TS/React files
- [ ] Review README for accuracy
- [ ] Validate all links work
- [ ] Test in both VS Code and Cursor
- [ ] Package builds without errors
- [ ] Install VSIX file successfully
