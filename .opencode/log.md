# Yarn → pnpm Migration Log

## Error: `Unable to resolve module expo-router/entry` (and all bare specifiers)

### Symptom
```
Unable to resolve module expo-router/entry from /Users/.../pokedex/index.js:
expo-router/entry could not be found within the project or in these directories:
  node_modules
```

Same error for `react-native`, `expo`, or any bare import from `node_modules`.

### Root Cause
Metro uses Watchman by default (`resolver.useWatchman: true`) for file-system watching and module resolution. With Watchman broken/unreachable on the local machine, Metro's file scanner failed silently — it couldn't enumerate `node_modules` at all, so every bare-specifier resolution failed.

This was **not** a pnpm symlink issue (despite initial suspicion). All packages are real directories under `node-linker=hoisted`.

### Resolution
Forced `config.resolver.useWatchman = false` in `metro.config.js`, which makes Metro fall back to its internal Node-based file crawler.

```js
// metro.config.js — after getDefaultConfig()
config.resolver.useWatchman = false
```

### Additional Fix
The `start` script in `package.json` was calling itself recursively:
```json
"start": "WATCHMAN_DISABLE=1 pnpm start"  // ← infinite loop
```
Fixed to:
```json
"start": "WATCHMAN_DISABLE=1 expo start"
```

### Relevant Files
- `metro.config.js` — added `config.resolver.useWatchman = false`
- `package.json` — fixed `start` script
- `.npmrc` — `node-linker=hoisted`, `auto-install-peers=true`
