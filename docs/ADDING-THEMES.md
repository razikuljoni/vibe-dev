# Adding New Themes

This guide explains how to add new color themes to the extension.

## Quick Start

1. Create a new theme JSON file in `themes/` directory
2. Register it in `package.json`
3. Test and package

## Creating a Theme File

### Theme Structure

Create `themes/my-theme.json`:

```json
{
  "name": "My Theme Name",
  "type": "dark",
  "colors": {
    "editor.background": "#1e1e1e",
    "editor.foreground": "#d4d4d4",
    "activityBar.background": "#181818",
    "activityBar.foreground": "#ffffff",
    "sideBar.background": "#252526",
    "sideBar.foreground": "#cccccc",
    "statusBar.background": "#007acc",
    "statusBar.foreground": "#ffffff"
  },
  "tokenColors": [
    {
      "scope": ["comment"],
      "settings": {
        "foreground": "#6A9955",
        "fontStyle": "italic"
      }
    },
    {
      "scope": ["keyword"],
      "settings": {
        "foreground": "#569cd6"
      }
    },
    {
      "scope": ["string"],
      "settings": {
        "foreground": "#ce9178"
      }
    }
  ]
}
```

### Key Theme Components

#### 1. Editor Colors (`colors`)
Controls UI elements:

```json
{
  "colors": {
    // Editor
    "editor.background": "#1e1e1e",
    "editor.foreground": "#d4d4d4",
    "editor.lineHighlightBackground": "#2a2a2a",
    "editor.selectionBackground": "#264f78",
    
    // Sidebar
    "sideBar.background": "#252526",
    "sideBar.foreground": "#cccccc",
    
    // Activity Bar
    "activityBar.background": "#181818",
    "activityBar.foreground": "#ffffff",
    
    // Status Bar
    "statusBar.background": "#007acc",
    "statusBar.foreground": "#ffffff",
    
    // Terminal
    "terminal.background": "#1e1e1e",
    "terminal.foreground": "#cccccc"
  }
}
```

#### 2. Token Colors (`tokenColors`)
Controls syntax highlighting:

```json
{
  "tokenColors": [
    {
      "name": "Comments",
      "scope": ["comment", "punctuation.definition.comment"],
      "settings": {
        "foreground": "#6A9955",
        "fontStyle": "italic"
      }
    },
    {
      "name": "Keywords",
      "scope": ["keyword", "storage.type", "storage.modifier"],
      "settings": {
        "foreground": "#569cd6"
      }
    },
    {
      "name": "Strings",
      "scope": ["string"],
      "settings": {
        "foreground": "#ce9178"
      }
    },
    {
      "name": "Functions",
      "scope": ["entity.name.function", "support.function"],
      "settings": {
        "foreground": "#dcdcaa"
      }
    },
    {
      "name": "Variables",
      "scope": ["variable", "support.variable"],
      "settings": {
        "foreground": "#9cdcfe"
      }
    }
  ]
}
```

## Common Token Scopes

| Element | Scope |
|---------|-------|
| Comments | `comment` |
| Keywords | `keyword`, `storage.type` |
| Strings | `string` |
| Numbers | `constant.numeric` |
| Functions | `entity.name.function` |
| Classes | `entity.name.class`, `entity.name.type` |
| Variables | `variable` |
| Constants | `constant` |
| Operators | `keyword.operator` |
| Punctuation | `punctuation` |
| Tags (HTML/JSX) | `entity.name.tag` |
| Attributes | `entity.other.attribute-name` |
| JSX/React | `support.class.component` |
| Types (TS) | `entity.name.type`, `support.type` |

## Registering the Theme

Edit `package.json`:

```json
{
  "contributes": {
    "themes": [
      {
        "label": "Vibe - My Theme Name",
        "uiTheme": "vs-dark",
        "path": "./themes/my-theme.json"
      }
    ]
  }
}
```

### UI Theme Types
- `"vs"` - Light theme
- `"vs-dark"` - Dark theme
- `"hc-black"` - High contrast theme

## Testing Your Theme

1. Press `F5` in VS Code (opens Extension Development Host)
2. In the new window, press `Cmd+K Cmd+T` (or `Ctrl+K Ctrl+T`)
3. Select your theme
4. Test with different file types (JS, TS, JSX, CSS, etc.)

## Using Existing Themes as Templates

Copy and modify existing themes:

```bash
cp themes/knightfall.json themes/my-new-theme.json
```

Then edit colors to your preference.

## Color Palette Best Practices

1. **Consistency**: Use a cohesive color palette
2. **Contrast**: Ensure text is readable (WCAG AA minimum)
3. **Hierarchy**: Different colors for different element types
4. **Semantic**: Use colors that make semantic sense
   - Red/Orange: Errors, warnings
   - Blue/Purple: Keywords, functions
   - Green: Strings, comments
   - Yellow: Constants, numbers

## Example Color Palettes

### Cool Blue Palette
```json
{
  "background": "#1a1d29",
  "foreground": "#d4d7dd",
  "blue": "#61afef",
  "cyan": "#56b6c2",
  "green": "#98c379",
  "purple": "#c678dd",
  "red": "#e06c75",
  "yellow": "#e5c07b"
}
```

### Warm Dark Palette
```json
{
  "background": "#282828",
  "foreground": "#ebdbb2",
  "blue": "#83a598",
  "cyan": "#8ec07c",
  "green": "#b8bb26",
  "purple": "#d3869b",
  "red": "#fb4934",
  "yellow": "#fabd2f"
}
```

## Advanced: Semantic Token Colors

For better TypeScript/JavaScript highlighting:

```json
{
  "semanticHighlighting": true,
  "semanticTokenColors": {
    "variable": "#9cdcfe",
    "parameter": "#9cdcfe",
    "function": "#dcdcaa",
    "method": "#dcdcaa",
    "class": "#4ec9b0",
    "interface": "#4ec9b0",
    "type": "#4ec9b0",
    "enum": "#4ec9b0",
    "namespace": "#4ec9b0"
  }
}
```

## Resources

- [VS Code Theme Color Reference](https://code.visualstudio.com/api/references/theme-color)
- [TextMate Scopes](https://macromates.com/manual/en/language_grammars)
- [Theme Studio](https://themes.vscode.one/) - Visual theme editor
- [Color Hunt](https://colorhunt.co/) - Color palette inspiration

## Checklist

Before adding your theme:
- [ ] JSON is valid (no syntax errors)
- [ ] All required colors are defined
- [ ] Theme is registered in `package.json`
- [ ] Tested with multiple file types
- [ ] Text is readable (good contrast)
- [ ] Updated CHANGELOG.md
- [ ] Incremented version in package.json
