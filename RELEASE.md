# Release Automation Guide

This project uses [standard-version](https://github.com/conventional-changelog/standard-version) for automated changelog generation, version bumping, and release management.

## Overview

The release automation system automatically:
- ✅ Bumps version numbers in `package.json`
- ✅ Generates/updates `CHANGELOG.md` based on commit messages
- ✅ Creates git tags for releases
- ✅ Packages the extension as `.vsix` file

## Prerequisites

1. **Install dependencies:**
   ```bash
   pnpm install
   # or
   npm install
   ```

2. **Follow Conventional Commits:**
   Your commit messages should follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:
   - `feat:` - New features
   - `fix:` - Bug fixes
   - `perf:` - Performance improvements
   - `refactor:` - Code refactoring
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting, etc.)
   - `chore:` - Build process or auxiliary tool changes
   - `test:` - Adding or updating tests
   - `build:` - Build system changes
   - `ci:` - CI configuration changes
   - `revert:` - Reverts a previous commit

## Release Workflow

### Standard Release (Patch)

For patch releases (1.0.0 → 1.0.1):

```bash
pnpm run release
# or
npm run release
```

This will:
1. Analyze your git commit history
2. Determine the version bump based on commit types
3. Update `package.json` version
4. Generate/update `CHANGELOG.md`
5. Create a git commit with the changes
6. Create a git tag
7. Push to remote (if configured)
8. Package the extension

### Specific Version Bumps

#### Minor Release (1.0.0 → 1.1.0)
```bash
pnpm run release:minor
```

#### Major Release (1.0.0 → 2.0.0)
```bash
pnpm run release:major
```

#### Patch Release (1.0.0 → 1.0.1)
```bash
pnpm run release:patch
```

### Pre-release Versions

#### Alpha Release (1.0.0 → 1.0.1-alpha.0)
```bash
pnpm run release:alpha
```

#### Beta Release (1.0.0 → 1.0.1-beta.0)
```bash
pnpm run release:beta
```

### Preview Changes (Dry Run)

To see what would happen without making changes:

```bash
pnpm run changelog
```

## Commit Message Examples

### Feature Addition
```bash
git commit -m "feat: add new dark theme 'Midnight Storm'"
```

### Bug Fix
```bash
git commit -m "fix: correct icon path for TypeScript files"
```

### Documentation
```bash
git commit -m "docs: update installation instructions"
```

### Breaking Change
```bash
git commit -m "feat!: remove deprecated theme configuration

BREAKING CHANGE: The 'old-theme' option has been removed. Use 'new-theme' instead."
```

## Version Bump Rules

- **Patch (1.0.0 → 1.0.1):** Bug fixes (`fix:`)
- **Minor (1.0.0 → 1.1.0):** New features (`feat:`)
- **Major (1.0.0 → 2.0.0):** Breaking changes (`feat!:` or `BREAKING CHANGE:`)

## Manual Release Steps

If you need to manually release:

1. **Update version in package.json:**
   ```json
   "version": "1.0.1"
   ```

2. **Update CHANGELOG.md:**
   Add your changes under a new version heading

3. **Create git tag:**
   ```bash
   git tag -a v1.0.1 -m "Release version 1.0.1"
   ```

4. **Package extension:**
   ```bash
   pnpm run package
   ```

5. **Publish (if needed):**
   ```bash
   pnpm run publish
   ```

## Post-Release Checklist

After running a release:

- [ ] Verify `CHANGELOG.md` is updated correctly
- [ ] Check that `package.json` version is correct
- [ ] Verify git tag was created: `git tag -l`
- [ ] Test the generated `.vsix` file
- [ ] Push tags to remote: `git push --follow-tags`
- [ ] Publish to VS Code Marketplace (if ready)

## Troubleshooting

### Release fails with "working directory must be clean"
- Commit or stash your changes first
- Run `git status` to check for uncommitted files

### CHANGELOG.md not updating
- Ensure your commit messages follow conventional commit format
- Check that commits are on the correct branch

### Version not bumping
- Check `.versionrc.json` configuration
- Verify commit messages are in the correct format
- Use `pnpm run changelog` to preview changes

## Configuration

The release process is configured in `.versionrc.json`. You can customize:
- Commit types and sections
- Release commit message format
- Files to bump versions in
- Skip options

## Git Hooks (Optional)

You can add a pre-commit hook to enforce conventional commits:

```bash
# Install commitlint (optional)
pnpm add -D @commitlint/cli @commitlint/config-conventional

# Create .commitlintrc.json
echo '{"extends": ["@commitlint/config-conventional"]}' > .commitlintrc.json
```

## Publishing to VS Code Marketplace

After creating a release:

1. **Package the extension:**
   ```bash
   pnpm run package
   ```

2. **Publish to marketplace:**
   ```bash
   pnpm run publish
   ```

   Or manually:
   ```bash
   vsce publish
   ```

## Best Practices

1. **Always use conventional commits** - Makes changelog generation accurate
2. **Test before releasing** - Run `pnpm run changelog` to preview
3. **Review CHANGELOG.md** - Verify it looks correct before pushing
4. **Tag releases** - Tags are automatically created by standard-version
5. **Keep main branch clean** - Only merge tested code

## Quick Reference

| Command | Description |
|---------|-------------|
| `pnpm run release` | Auto-detect and bump version |
| `pnpm run release:minor` | Bump minor version |
| `pnpm run release:major` | Bump major version |
| `pnpm run release:patch` | Bump patch version |
| `pnpm run release:alpha` | Create alpha pre-release |
| `pnpm run release:beta` | Create beta pre-release |
| `pnpm run changelog` | Preview changelog (dry run) |
| `pnpm run package` | Create .vsix file |
| `pnpm run publish` | Publish to marketplace |

---

For more information, see:
- [standard-version documentation](https://github.com/conventional-changelog/standard-version)
- [Conventional Commits specification](https://www.conventionalcommits.org/)

