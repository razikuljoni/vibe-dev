# How Vibe Dev Tools Works

Quick reference for how the extension functions end-to-end.

## Architecture

```
Extension Entry: extension.js
       ↓
   package.json (Manifest)
       ↓
   Commands Registration
       ↓
   User Triggers Command (Ctrl+Shift+P)
       ↓
   Theme/Icon Applied
```

---

## Component Flow

### 1. Extension Activation (extension.js)

When VS Code starts (onStartupFinished):
```
activate() → Registers 4 commands → Ready for user input
```

### 2. Available Commands (Ctrl+Shift+P)

#### File Icons
- **Vibe: Activate File Icons** → Sets `iconTheme` to `vibe-file-icons`
- **Vibe: Choose File Icon Theme…** → Opens file icon picker

#### Product Icons  
- **Vibe: Activate Product Icons** → Sets `productIconTheme` to `atomic-product-icons`
- **Vibe: Choose Product Icon Theme…** → Opens product icon picker

### 3. Configuration Flow

When command executes:
```
Command Handler
    ↓
Update workbench configuration
    ↓
Configuration applies globally
    ↓
VS Code reloads theme/icons
    ↓
User sees changes
```

---

## How to Use

### Activate File Icons
1. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
2. Type: `Vibe: Activate File Icons`
3. Press Enter
4. See: ✓ notification + file icons applied

### Activate Product Icons
1. Press `Ctrl+Shift+P` or `Cmd+Shift+P`
2. Type: `Vibe: Activate Product Icons`
3. Press Enter
4. See: ✓ notification + toolbar icons change

### Choose Themes
- **Color Themes**: `Cmd+K Cmd+T` → Browse 11 Vibe themes
- **File Icons**: `Ctrl+Shift+P` → "Choose File Icon Theme…"
- **Product Icons**: `Ctrl+Shift+P` → "Choose Product Icon Theme…"

---

## File Structure Reference

```
extension.js                 ← Commands & logic
package.json                 ← Manifest & contributions
icons/
  ├── vibe-file-icon-theme.json      ← File icon mappings
  └── file-icons/
      ├── files/            ← 300+ file icons (SVG)
      └── folders/          ← 90+ folder icons (SVG)
themes/                      ← 11 color themes
snippets/                    ← JS/TS/React snippets
docs/
  ├── USAGE.md              ← How to use
  ├── ADDING-ICONS.md       ← Create new icons
  └── ADDING-THEMES.md      ← Create new themes
```

---

## Settings Applied

When you activate themes, these settings update:

**File Icons:**
```json
{
  "workbench.iconTheme": "vibe-file-icons"
}
```

**Product Icons:**
```json
{
  "workbench.productIconTheme": "atomic-product-icons"
}
```

**Color Theme:**
```json
{
  "workbench.colorTheme": "Vibe - Knightfall"
  // (or any other Vibe theme)
}
```

---

## Commands Reference

| Action | Command |
|--------|---------|
| Activate file icons | `vibe.switchFileIcons` |
| Activate product icons | `vibe.switchProductIcons` |
| Choose file icons | `vibe.chooseFileIcons` |
| Choose product icons | `vibe.chooseProductIcons` |

---

## How Icons Are Displayed

### File Icons
1. VS Code reads `vibe-file-icon-theme.json`
2. Matches file extension to icon definition
3. Loads SVG from `icons/file-icons/files/`
4. Displays in File Explorer

### Folder Icons
1. VS Code reads folder name
2. Matches to `folderNames` mappings
3. Loads SVG from `icons/file-icons/folders/`
4. Shows closed folder icon
5. Shows expanded folder icon when opened

### Product Icons
1. Reads product icon theme config
2. Uses font-based icons from Atomic Symbol set
3. Applies to VS Code UI (toolbar, buttons, etc.)

---

## How Themes Work

1. VS Code includes 11 color themes in `themes/` folder
2. Each is a JSON file defining colors for syntax highlighting
3. User selects via `Cmd+K Cmd+T`
4. Applied globally to editor

---

## Extension Lifecycle

```
START
  ↓
package.json defines activation events
  ↓
"onStartupFinished" → Triggers activate()
  ↓
extension.js runs activate()
  ↓
Registers commands
  ↓
Ready for user commands
  ↓
User presses Ctrl+Shift+P
  ↓
Runs command handler
  ↓
Updates configuration
  ↓
VS Code applies changes
  ↓
User sees result
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Commands not appearing | Reload window (`Cmd+R`) |
| Icons not changing | Verify theme file exists at path |
| Product icons not applying | Check `atomic-product-icons` registered |
| Notification not showing | Check extension.js error handling |

---

## Next Steps

- [Usage Guide](./docs/USAGE.md) - How to use features
- [Adding Icons](./docs/ADDING-ICONS.md) - Create new icons
- [Publishing](./PUBLISHING.md) - Deploy to marketplace

---

Last Updated: December 6, 2025
