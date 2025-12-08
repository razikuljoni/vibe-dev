# Start Here - Vibe Dev Tools

Your VS Code extension with 11 themes, 300+ file icons, 90+ folder icons, and product icons.

## Quick Test (5 minutes)

```bash
npm install
code .
# Press F5 to launch Extension Development Host
```

## In Extension Dev Host

1. **Test File Icons**
   - Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P`
   - Type: `Vibe: Activate File Icons`
   - Press Enter
   - See: Checkmark notification + file icons in explorer

2. **Test Product Icons**
   - Press `Cmd+Shift+P` or `Ctrl+Shift+P`
   - Type: `Vibe: Activate Product Icons`
   - Press Enter
   - See: Checkmark notification + UI icons change

3. **Test Themes**
   - Press `Cmd+K Cmd+T` (Mac) or `Ctrl+K Ctrl+T`
   - Browse 11 Vibe themes
   - Select one to preview

4. **Test Snippets**
   - Create new file: `test.js`
   - Type: `log` + Tab
   - See: `console.log()` snippet expands

## Build & Publish

```bash
# Package for distribution
npm run package

# Publish to VS Code Marketplace
npm run publish
```

## Documentation

- **[HOW-IT-WORKS.md](./HOW-IT-WORKS.md)** - How extension works
- **[COMMANDS.md](./COMMANDS.md)** - All commands
- **[PUBLISHING.md](./PUBLISHING.md)** - Build & publish guide
- **[DEVELOPMENT.md](./DEVELOPMENT.md)** - Developer setup

---

## What's Included

| Item | Count |
|------|-------|
| Themes | 11 |
| File Icons | 300+ |
| Folder Icons | 90+ |
| Product Icon Themes | 1 |
| Snippet Languages | 4 |
| Commands | 4 |

---

## Key Files

```
extension.js              ← Main logic
package.json             ← Manifest
icons/
  ├── vibe-file-icon-theme.json
  └── file-icons/        ← 300+ file/90+ folder icons
themes/                  ← 11 color themes
snippets/                ← JS/TS/React snippets
```

---

## Commands (Ctrl+Shift+P)

- `Vibe: Activate File Icons` - Quick apply file icons
- `Vibe: Activate Product Icons` - Quick apply product icons
- `Vibe: Choose File Icon Theme…` - Open file icon picker
- `Vibe: Choose Product Icon Theme…` - Open product icon picker

---

## Issues & Fixes

**File icons not showing?**
- Check `HOW-IT-WORKS.md` troubleshooting section
- Verify `icons/vibe-file-icon-theme.json` is correct

**Product icons not working?**
- Run command: `Vibe: Activate Product Icons`
- Check file: `file-icons/atomic-symbols/productIcons/a-file-icon-vscode-product-icon-theme.json` exists

**Commands not appearing?**
- Reload window: `Cmd+R` (Mac) or `Ctrl+R` (Windows/Linux)

---

## Next Steps

1. Test locally with F5
2. Read [HOW-IT-WORKS.md](./HOW-IT-WORKS.md)
3. Package: `npm run package`
4. Publish: `npm run publish`

---

**Status**: ✅ Ready  
**Updated**: December 6, 2025
