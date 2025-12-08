# Adding New Icons

This guide explains how to add new file icons, folder icons, and product icons to the extension.

## File Icon Structure

```
icons/
├── vibe-file-icon-theme.json    # Icon theme definition
└── file-icons/
    ├── files/                    # File type icons
    │   ├── javascript.svg
    │   ├── typescript.svg
    │   └── react.svg
    └── folders/                  # Folder icons
        ├── folder.svg
        ├── folder-components.svg
        └── folder-config.svg
```

## Adding File Type Icons

### 1. Create SVG Icon

Create an SVG file in `icons/file-icons/files/`:

**Example: `myfile.svg`**
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill="#61dafb" d="M16 2L3 9v14l13 7 13-7V9L16 2z"/>
  <text x="16" y="20" text-anchor="middle" fill="#fff" font-size="8">
    MY
  </text>
</svg>
```

**SVG Best Practices:**
- Use 32x32 viewBox
- Optimize with SVGO
- Use simple, recognizable shapes
- Single color or 2-3 colors max
- Keep file size under 5KB

### 2. Register Icon Definition

Edit `icons/vibe-file-icon-theme.json`:

```json
{
  "iconDefinitions": {
    "myfile": {
      "iconPath": "./file-icons/files/myfile.svg"
    }
  }
}
```

### 3. Map File Extensions

Still in `vibe-file-icon-theme.json`, add mappings:

#### For file extensions:
```json
{
  "fileExtensions": {
    "myext": "myfile",
    "custom": "myfile"
  }
}
```

#### For specific filenames:
```json
{
  "fileNames": {
    "myconfig.json": "myfile",
    ".myrc": "myfile"
  }
}
```

#### For language IDs:
```json
{
  "languageIds": {
    "mylanguage": "myfile"
  }
}
```

## Adding Folder Icons

### 1. Create Folder Icon

Create SVG in `icons/file-icons/folders/`:

**Example: `folder-custom.svg`**
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill="#90a4ae" d="M2 6h12l2 2h14v18H2V6z"/>
  <path fill="#607d8b" d="M2 8h12l2 2h14v16H2V8z"/>
  <!-- Add custom icon overlay -->
  <circle cx="20" cy="18" r="6" fill="#4caf50"/>
</svg>
```

### 2. Register Folder Icon

In `vibe-file-icon-theme.json`:

```json
{
  "iconDefinitions": {
    "folder-custom": {
      "iconPath": "./file-icons/folders/folder-custom.svg"
    },
    "folder-custom-open": {
      "iconPath": "./file-icons/folders/folder-custom-open.svg"
    }
  }
}
```

### 3. Map Folder Names

```json
{
  "folderNames": {
    "custom": "folder-custom",
    "my-folder": "folder-custom"
  },
  "folderNamesExpanded": {
    "custom": "folder-custom-open",
    "my-folder": "folder-custom-open"
  }
}
```

## Common File Extension Mappings

```json
{
  "fileExtensions": {
    // JavaScript/TypeScript
    "js": "javascript",
    "ts": "typescript",
    "jsx": "react",
    "tsx": "react",
    "mjs": "javascript",
    
    // Web
    "html": "html",
    "css": "css",
    "scss": "sass",
    "sass": "sass",
    
    // Config
    "json": "json",
    "yaml": "yaml",
    "yml": "yaml",
    "toml": "toml",
    
    // Python
    "py": "python",
    "pyc": "python",
    
    // Go
    "go": "go",
    
    // Rust
    "rs": "rust",
    
    // Documentation
    "md": "markdown",
    "mdx": "markdown"
  }
}
```

## Common Filename Mappings

```json
{
  "fileNames": {
    // Package managers
    "package.json": "nodejs",
    "package-lock.json": "npm",
    "yarn.lock": "yarn",
    "pnpm-lock.yaml": "pnpm",
    
    // Config files
    "tsconfig.json": "typescript-config",
    ".eslintrc": "eslint",
    ".prettierrc": "prettier",
    "vite.config.js": "vite",
    "webpack.config.js": "webpack",
    
    // Git
    ".gitignore": "git",
    ".gitattributes": "git",
    
    // Docker
    "Dockerfile": "docker",
    "docker-compose.yml": "docker",
    
    // Documentation
    "README.md": "readme",
    "LICENSE": "license"
  }
}
```

## Common Folder Name Mappings

```json
{
  "folderNames": {
    // Source code
    "src": "folder-src",
    "lib": "folder-lib",
    "dist": "folder-dist",
    "build": "folder-build",
    
    // Configuration
    "config": "folder-config",
    ".vscode": "folder-vscode",
    ".github": "folder-github",
    
    // Node.js
    "node_modules": "folder-node-modules",
    
    // Frontend
    "components": "folder-components",
    "pages": "folder-pages",
    "public": "folder-public",
    "assets": "folder-assets",
    "styles": "folder-styles",
    
    // React/Next.js
    "app": "folder-app",
    "hooks": "folder-hooks",
    "context": "folder-context",
    
    // Backend
    "api": "folder-api",
    "routes": "folder-routes",
    "models": "folder-models",
    "controllers": "folder-controllers",
    "services": "folder-services",
    "middleware": "folder-middleware",
    
    // Testing
    "test": "folder-test",
    "tests": "folder-test",
    "__tests__": "folder-test",
    
    // Documentation
    "docs": "folder-docs",
    
    // Database
    "database": "folder-database",
    "migrations": "folder-database",
    
    // Utilities
    "utils": "folder-utils",
    "helpers": "folder-helpers"
  }
}
```

## Product Icons (Advanced)

Product icons are toolbar/UI icons. Create in `icons/product-icons/`:

### 1. Create Product Icon Theme

`icons/vibe-product-icon-theme.json`:

```json
{
  "fonts": [{
    "id": "vibe-icons",
    "src": [{
      "path": "./product-icons/vibe-icons.woff",
      "format": "woff"
    }]
  }],
  "iconDefinitions": {
    "add": {
      "fontCharacter": "\\e001"
    },
    "close": {
      "fontCharacter": "\\e002"
    }
  }
}
```

### 2. Register in package.json

```json
{
  "contributes": {
    "productIconThemes": [{
      "id": "vibe-product-icons",
      "label": "Vibe Product Icons",
      "path": "./icons/vibe-product-icon-theme.json"
    }]
  }
}
```

## Icon Design Guidelines

### Colors
- Use colors that match your theme
- Consider dark theme compatibility
- 2-4 colors maximum per icon
- Use semantic colors (blue for JS, green for Vue, etc.)

### Size & Scale
- **File icons**: 32x32px viewBox
- **Folder icons**: 32x32px viewBox
- Keep stroke width consistent (1-2px)
- Test at different zoom levels

### Style Consistency
- Maintain visual consistency across all icons
- Similar line weights
- Similar level of detail
- Unified color palette

### Performance
- Optimize SVGs with SVGO
- Remove unnecessary attributes
- Minimize paths and points
- Target <5KB per icon

## Testing Icons

1. Install the extension
2. Open a project with various file types
3. Check File Explorer
4. Verify icons appear correctly
5. Test with different themes

## Tools & Resources

### Icon Creation
- [Figma](https://figma.com) - Design tool
- [Inkscape](https://inkscape.org) - Free vector editor
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimizer

### Icon Inspiration
- [VS Code Icons](https://github.com/microsoft/vscode-icons)
- [Material Icons](https://material.io/icons)
- [Feather Icons](https://feathericons.com)
- [Remix Icon](https://remixicon.com)

### Color Tools
- [Coolors](https://coolors.co) - Palette generator
- [Color Hunt](https://colorhunt.co) - Color inspiration
- [Adobe Color](https://color.adobe.com) - Color wheel

## Complete Example

Adding a Svelte icon:

1. **Create icon**: `icons/file-icons/files/svelte.svg`
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill="#ff3e00" d="M25.2,7.8c-2.7-3.9-8.1-4.9-12-2.2l-7,4.8..."/>
  <path fill="#fff" d="M11.4,21.2c0.5,0.5,1.1,0.9,1.8,1.2..."/>
</svg>
```

2. **Register in theme**:
```json
{
  "iconDefinitions": {
    "svelte": {
      "iconPath": "./file-icons/files/svelte.svg"
    }
  },
  "fileExtensions": {
    "svelte": "svelte"
  }
}
```

3. **Test**: Open a `.svelte` file and verify icon appears

## Checklist

Before adding icons:
- [ ] SVG files created and optimized
- [ ] Icons registered in `vibe-file-icon-theme.json`
- [ ] File extensions or names mapped
- [ ] Icons tested in VS Code
- [ ] Consistent style with existing icons
- [ ] File sizes optimized (<5KB)
- [ ] Updated CHANGELOG.md
