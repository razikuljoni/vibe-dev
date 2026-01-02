# Quick Start Guide - Release Automation

## 🚀 Getting Started with Automated Releases

This guide will help you quickly set up and use the automated release system for vibe-dev-tools.

## Installation

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Verify installation:**
   ```bash
   pnpm run changelog
   ```
   This should show you a preview of what the changelog would look like.

## Your First Release

### Step 1: Make Your Changes

Make your code changes and commit them using conventional commit format:

```bash
# Example: Adding a new theme
git add themes/new-theme.json
git commit -m "feat: add new 'Ocean Blue' theme"

# Example: Fixing a bug
git commit -m "fix: correct icon path for Python files"

# Example: Updating docs
git commit -m "docs: update README with new features"
```

### Step 2: Create a Release

```bash
# Auto-detect version bump (recommended)
pnpm run release
```

This will:
- ✅ Analyze your commits
- ✅ Bump the version (patch/minor/major)
- ✅ Update CHANGELOG.md
- ✅ Create a git tag
- ✅ Commit the changes
- ✅ Package the extension

### Step 3: Push to Remote

```bash
git push --follow-tags origin main
```

## Commit Message Format

Always use conventional commits:

| Type | When to Use | Example |
|------|-------------|---------|
| `feat:` | New feature | `feat: add dark mode toggle` |
| `fix:` | Bug fix | `fix: correct theme color values` |
| `docs:` | Documentation | `docs: update installation guide` |
| `style:` | Formatting | `style: format JSON files` |
| `refactor:` | Code refactoring | `refactor: simplify theme loader` |
| `perf:` | Performance | `perf: optimize icon loading` |
| `test:` | Tests | `test: add theme unit tests` |
| `chore:` | Maintenance | `chore: update dependencies` |

## Version Bump Rules

- **Patch** (1.0.0 → 1.0.1): Bug fixes (`fix:`)
- **Minor** (1.0.0 → 1.1.0): New features (`feat:`)
- **Major** (1.0.0 → 2.0.0): Breaking changes (`feat!:` or `BREAKING CHANGE:`)

## Common Commands

```bash
# Preview what will happen (dry run)
pnpm run changelog

# Standard release (auto-detect)
pnpm run release

# Specific version bumps
pnpm run release:patch   # 1.0.0 → 1.0.1
pnpm run release:minor   # 1.0.0 → 1.1.0
pnpm run release:major   # 1.0.0 → 2.0.0

# Pre-releases
pnpm run release:alpha   # 1.0.0 → 1.0.1-alpha.0
pnpm run release:beta    # 1.0.0 → 1.0.1-beta.0

# Package extension
pnpm run package

# Publish to marketplace
pnpm run publish
```

## Workflow Example

```bash
# 1. Make changes
echo "New feature" > new-feature.txt
git add new-feature.txt

# 2. Commit with conventional format
git commit -m "feat: add new feature"

# 3. Create release
pnpm run release

# 4. Review the changes
git log --oneline -1
cat CHANGELOG.md

# 5. Push everything
git push --follow-tags origin main

# 6. Package and test
pnpm run package
# Test the .vsix file

# 7. Publish (when ready)
pnpm run publish
```

## Troubleshooting

### "Working directory must be clean"
**Solution:** Commit or stash your changes first
```bash
git status
git add .
git commit -m "chore: prepare for release"
```

### CHANGELOG not updating
**Solution:** Check your commit messages follow conventional format
```bash
git log --oneline -5
# Should see: feat:, fix:, docs:, etc.
```

### Wrong version bump
**Solution:** Use specific version commands
```bash
pnpm run release:minor  # Force minor bump
pnpm run release:major # Force major bump
```

## Next Steps

- Read [RELEASE.md](./RELEASE.md) for detailed documentation
- Check [CHANGELOG.md](./CHANGELOG.md) to see generated changelogs
- Review commit history to understand version bumps

## Tips

1. **Always preview first:** Use `pnpm run changelog` before releasing
2. **Review CHANGELOG.md:** Make sure it looks correct
3. **Test the .vsix:** Install and test before publishing
4. **Use descriptive commits:** Better commits = better changelog

---

Happy releasing! 🎉

