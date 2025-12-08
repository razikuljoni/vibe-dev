# Usage Guide

Complete guide on how to use Vibe Dev Tools extension.

## Installation

### Method 1: From VSIX File (Local Installation)

1. **Download** the `.vsix` file
2. **Open VS Code or Cursor**
3. **Press** `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
4. **Type** "Extensions: Install from VSIX"
5. **Select** the downloaded file
6. **Reload** VS Code when prompted

### Method 2: From Marketplace (When Published)

1. **Open** VS Code Extensions panel (`Cmd+Shift+X` or `Ctrl+Shift+X`)
2. **Search** for "Vibe Dev Tools"
3. **Click** Install
4. **Reload** VS Code

## Using Themes

### Activating a Color Theme

#### Keyboard Shortcut (Recommended)
1. Press `Cmd+K Cmd+T` (Mac) or `Ctrl+K Ctrl+T` (Windows/Linux)
2. Browse through available themes
3. Use arrow keys to preview
4. Press Enter to select

#### Via Command Palette
1. Press `Cmd+Shift+P` or `Ctrl+Shift+P`
2. Type "Color Theme"
3. Select "Preferences: Color Theme"
4. Choose any "Vibe -" theme

#### Via Settings
1. Open Settings (`Cmd+,` or `Ctrl+,`)
2. Search for "Color Theme"
3. Click on "Color Theme" dropdown
4. Select your preferred Vibe theme

### Available Themes

| Theme Name | Best For | Accent Color |
|------------|----------|--------------|
| **Vibe - Knightfall** | All-purpose dark theme | Purple |
| **Vibe - Midnight Dark** | Late night coding | Blue |
| **Vibe - Abyssal Blue** | Deep focus sessions | Rich Blue |
| **Vibe - Midnight Owl** | Night owls | Blue/Purple |
| **Vibe - Atom One Dark** | Atom users | Classic Dark |
| **Vibe - Arctis** | Cool, modern look | Arctic Blue |
| **Vibe - Arctics Dark** | Darker variant | Dark Blue |
| **Vibe - Ayu Dark Bordered** | Minimalists | Brown/Orange |
| **Vibe - Ayu Mirage Bordered** | Softer dark | Purple/Gray |
| **Vibe - GitHub Dimmed** | GitHub lovers | GitHub Gray |
| **Vibe - XCode Civik** | XCode users | Blue |

### Switching Themes Quickly

Create a keyboard shortcut:
1. Open Keyboard Shortcuts (`Cmd+K Cmd+S` or `Ctrl+K Ctrl+S`)
2. Search for "workbench.action.selectTheme"
3. Add your preferred keybinding

## Using File Icons

### Activating Icon Theme

#### Via Command Palette
1. Press `Cmd+Shift+P` or `Ctrl+Shift+P`
2. Type "File Icon Theme"
3. Select "Preferences: File Icon Theme"
4. Choose "Vibe File Icons"

#### Via Settings UI
1. Open Settings
2. Search for "File Icon Theme"
3. Select "Vibe File Icons" from dropdown

#### Via settings.json
Add to your `settings.json`:
```json
{
  "workbench.iconTheme": "vibe-file-icons"
}
```

### Icon Features

- **300+ file type icons** including:
  - JavaScript, TypeScript, React, Vue, Angular
  - Python, Go, Rust, Java, C++
  - JSON, YAML, TOML, XML
  - Markdown, HTML, CSS, SCSS
  - Docker, Kubernetes, Terraform
  - And many more...

- **90+ folder icons** for:
  - Source directories (src, lib, dist)
  - Framework folders (components, pages, routes)
  - Config folders (.vscode, .github)
  - Backend folders (api, models, services)
  - Test folders (tests, __tests__)

### Custom Folder Colors

The icon theme includes color-coded folder variants:
- Blue folders
- Green folders
- Red folders
- Purple folders
- Orange folders
- Pink folders
- Yellow folders
- Gray folders

## Using Code Snippets

### JavaScript Snippets

Available in `.js` and `.mjs` files:

| Prefix | Description | Output |
|--------|-------------|--------|
| `log` | Console log | `console.log()` |
| `fn` | Arrow function | `const name = () => {}` |
| `afn` | Async arrow function | `const name = async () => {}` |
| `imp` | Import statement | `import {} from ''` |
| `exp` | Export statement | `export {}` |
| `cl` | Class | `class Name {}` |
| `try` | Try-catch block | `try {} catch (error) {}` |
| `prom` | Promise | `new Promise((resolve, reject) => {})` |
| `foreach` | forEach loop | `array.forEach(item => {})` |
| `map` | Map function | `array.map(item => {})` |
| `filter` | Filter function | `array.filter(item => {})` |

### TypeScript Snippets

Available in `.ts` files:

| Prefix | Description | Output |
|--------|-------------|--------|
| `int` | Interface | `interface Name {}` |
| `type` | Type alias | `type Name = {}` |
| `enum` | Enum | `enum Name {}` |
| `class` | Class | `class Name {}` |

### React Snippets

Available in `.jsx` and `.tsx` files:

| Prefix | Description | Output |
|--------|-------------|--------|
| `rfc` | React Function Component | Function component |
| `rafc` | React Arrow Function Component | Arrow function component |
| `usestate` | useState Hook | `const [state, setState] = useState()` |
| `useeffect` | useEffect Hook | `useEffect(() => {}, [])` |
| `usecontext` | useContext Hook | `const value = useContext()` |
| `usecallback` | useCallback Hook | `useCallback(() => {}, [])` |
| `usememo` | useMemo Hook | `useMemo(() => {}, [])` |
| `useref` | useRef Hook | `const ref = useRef()` |

### Using Snippets

1. **Start typing** the prefix (e.g., `rfc`)
2. **IntelliSense** will show the snippet
3. **Press Tab** or Enter to insert
4. **Tab through** placeholder fields
5. **Edit** as needed

### Custom Snippet Variables

Snippets support tab stops:
- `$1`, `$2`, etc. - Tab stop positions
- `$0` - Final cursor position
- `${1:default}` - Tab stop with default value

## Configuration

### Recommended Settings

Add to your `settings.json` for best experience:

```json
{
  // Theme
  "workbench.colorTheme": "Vibe - Knightfall",
  
  // Icons
  "workbench.iconTheme": "vibe-file-icons",
  
  // Editor
  "editor.fontFamily": "JetBrains Mono, Fira Code, Menlo, Monaco, 'Courier New', monospace",
  "editor.fontSize": 14,
  "editor.lineHeight": 1.6,
  "editor.fontLigatures": true,
  "editor.cursorBlinking": "smooth",
  "editor.cursorSmoothCaretAnimation": "on",
  
  // Workbench
  "workbench.tree.indent": 16,
  "workbench.tree.renderIndentGuides": "always",
  
  // Terminal
  "terminal.integrated.fontFamily": "JetBrains Mono, Fira Code",
  "terminal.integrated.fontSize": 13
}
```

### Recommended Font

For best results with themes, use a coding font with ligatures:
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
- [Fira Code](https://github.com/tonsky/FiraCode)
- [Cascadia Code](https://github.com/microsoft/cascadia-code)
- [Victor Mono](https://rubjo.github.io/victor-mono/)

## Troubleshooting

### Theme Not Applying
1. Reload VS Code window (`Cmd+R` or `Ctrl+R`)
2. Verify extension is installed and enabled
3. Check no other theme extensions conflict

### Icons Not Showing
1. Verify "Vibe File Icons" is selected
2. Reload window
3. Check File Explorer is visible
4. Restart VS Code

### Snippets Not Working
1. Verify language mode is correct (JavaScript/TypeScript/React)
2. Check IntelliSense is enabled
3. Try typing prefix and pressing Tab
4. Verify no conflicting snippet extensions

### Performance Issues
If extension causes slowness:
1. Disable other theme/icon extensions
2. Reduce number of open files
3. Restart VS Code
4. Report issue on GitHub

## Keyboard Shortcuts Reference

| Action | Mac | Windows/Linux |
|--------|-----|---------------|
| Color Theme | `Cmd+K Cmd+T` | `Ctrl+K Ctrl+T` |
| Command Palette | `Cmd+Shift+P` | `Ctrl+Shift+P` |
| Settings | `Cmd+,` | `Ctrl+,` |
| Extensions | `Cmd+Shift+X` | `Ctrl+Shift+X` |
| Keyboard Shortcuts | `Cmd+K Cmd+S` | `Ctrl+K Ctrl+S` |

## Workspace-Specific Settings

To use different themes per workspace:

`.vscode/settings.json` in your project:
```json
{
  "workbench.colorTheme": "Vibe - GitHub Dimmed",
  "workbench.iconTheme": "vibe-file-icons"
}
```

## Multi-Root Workspaces

Themes and icons work in multi-root workspaces. Each folder can have its own settings in `.vscode/settings.json`.

## Remote Development

Vibe Dev Tools works with:
- **Remote - SSH**
- **Remote - Containers**
- **WSL** (Windows Subsystem for Linux)
- **Codespaces**

Install the extension in the remote environment for full functionality.

## Tips & Tricks

1. **Quick Theme Switching**: Use `Cmd+K Cmd+T` to preview themes without committing
2. **Multiple Monitors**: Theme applies across all VS Code windows
3. **Presentations**: Use lighter/higher contrast themes for presentations
4. **Late Night**: Use darker themes (Midnight Dark, Abyssal Blue) to reduce eye strain
5. **Focus Mode**: Combine with Zen Mode (`Cmd+K Z`) for distraction-free coding

## Getting Help

- Check documentation in `docs/` folder
- Report issues on GitHub
- Check VS Code output panel for errors
- Review extension logs

## Next Steps

- [Adding New Themes](./ADDING-THEMES.md)
- [Adding New Icons](./ADDING-ICONS.md)
- [Building & Publishing](./BUILDING.md)
