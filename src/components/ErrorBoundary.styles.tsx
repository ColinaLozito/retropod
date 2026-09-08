// Styles for ErrorBoundary.tsx
import { StyleSheet } from 'react-native';
import { THEME } from '../theme/theme';

const ERROR_EMOJI_SIZE = 48;
const FALLBACK_CARD_MAX_WIDTH = 400;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: THEME.spacing.lg,
    backgroundColor: THEME.colors.background,
  },
  fallbackCard: {
    alignItems: 'center',
    padding: THEME.spacing.xl,
    width: '100%',
    maxWidth: FALLBACK_CARD_MAX_WIDTH,
  },
  errorEmoji: {
    fontSize: ERROR_EMOJI_SIZE,
    marginBottom: THEME.spacing.md,
  },
  errorTitle: {
    fontSize: THEME.fonts.sizes.xl,
    fontWeight: 'bold',
    color: THEME.colors.onSurface,
    marginBottom: THEME.spacing.sm,
  },
  errorMessage: {
    fontSize: THEME.fonts.sizes.md,
    color: THEME.colors.onSurfaceVariant,
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: THEME.spacing.lg,
  },
  retryButton: {
    backgroundColor: THEME.colors.primary,
    paddingHorizontal: THEME.spacing.xl,
    paddingVertical: THEME.spacing.md,
    borderRadius: THEME.borderRadius.md,
  },
  retryText: {
    color: THEME.colors.onSurface,
    fontSize: THEME.fonts.sizes.md,
    fontWeight: 'bold',
  },
});
