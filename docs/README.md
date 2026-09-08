# RetroPod

Retro-inspired local music player for iOS. iPod nostalgia meets modern React Native — plays local MP3/audio files from the device's `Documents` directory with zero external service dependencies.

## Architecture & Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Expo SDK 54 / React Native 0.81 |
| **Navigation** | Expo Router (file-based, `src/app/`) |
| **Audio Engine** | `react-native-track-player` (background audio, lock screen controls) |
| **State Management** | Zustand (persisted via AsyncStorage) |
| **Local Files** | `expo-file-system` — targeting iOS `Documents/` for `Artist/Album/Track` trees |
| **Package Manager** | npm |

## Current State

Clean native baseline established and verified on physical iOS devices. TypeScript compiles with zero errors. Ready for local file system integration and track indexing.

## Features

- **Background Audio** — music plays when app is minimized or screen is locked (iOS `audio` background mode)
- **Lock Screen Controls** — play/pause/seek from iOS Lock Screen and Control Center
- **Singleton Playback Service** — `PlaybackOrchestrator` manages all track lifecycle and queue logic
- **Expo Router File Navigation** — tabs (`index`, `settings`) and modal screens

## Project Structure

```
src/
├── app/                        # Expo Router screens
│   ├── _layout.tsx             # Root layout (Stack + ErrorBoundary)
│   ├── (tabs)/                 # Tab navigation
│   │   ├── _layout.tsx         # Tabs config
│   │   ├── index.tsx           # Home / Library
│   │   └── settings.tsx        # Settings
│   └── (modals)/
│       └── _layout.tsx         # Modal layout
├── components/
│   ├── coverflow/              # iPod-style cover flow (AlbumCoverCard, CoverGrid, etc.)
│   ├── library/                # List items (ArtistListItem, AlbumListItem, SearchBar, etc.)
│   ├── player/                 # ClickWheel, LcdScreenFrame, NowPlayingInfo, VinylArtwork
│   ├── settings/               # FontSelector, AudioEngineCard, EInkDisplayCard, etc.
│   ├── shared/                 # BottomNavBar, HeaderBar, ListItem, Toggle, etc.
│   ├── ui/                     # AppText, LoadingOverlay, Toast, ToastContainer
│   └── ErrorBoundary.tsx
├── services/
│   ├── PlaybackOrchestrator.ts  # Singleton playback lifecycle
│   ├── audioService.ts          # TrackPlayer setup & helpers
│   └── playbackService.ts       # Background playback service
├── hooks/
│   ├── useMusicPlayer.ts        # Thin glue between TrackPlayer & Orchestrator
│   ├── useTrackPlayerInit.ts    # TrackPlayer initialization
│   ├── useTrackPersistence.ts   # Background progress saving
│   ├── usePlayerModal.ts        # Modal visibility state
│   └── usePointsCounter.ts      # Points calculation
├── stores/
│   ├── musicStore.ts            # Track list & active challenge state
│   ├── userStore.ts             # User progress & achievements
│   ├── toastStore.ts            # Notification queue
│   ├── loadingStore.ts          # Global loading overlay
│   └── useFontStore.ts          # Font selection state
├── theme/
│   ├── theme.ts                 # Design tokens (monochrome e-ink palette)
│   └── app/                     # Screen-specific styles
├── types/                       # TypeScript interfaces
├── constants/                   # Static config (icons)
└── utils/                       # Helpers (toast, time formatting)
```

## Getting Started

### Prerequisites

- **Node.js** LTS (v18+)
- **Xcode** (latest stable)
- **CocoaPods** (`sudo gem install cocoapods`)
- Physical iOS device recommended for background audio testing

### Install & Run

```bash
# Install dependencies
npm install

# Install iOS native pods
npx pod-install

# Run on physical device
npx expo run:ios --device
```

To run on iOS Simulator:

```bash
npx expo run:ios
```

If Metro Bundler cache issues occur:

```bash
npx expo start -c
```

## Testing on a Physical Device

Background audio and lock screen controls require a real device.

**Option A — Terminal (fastest):**
```bash
npx expo run:ios --device
```

**Option B — Xcode Release Build:**
1. Connect iPhone via USB
2. Open `ios/` folder in Xcode (`.xcworkspace`)
3. Select your Development Team under **Signing & Capabilities**
4. Edit Scheme > Run > Build Config > **Release**
5. Select your device and Run

## License

This project is private and confidential.
