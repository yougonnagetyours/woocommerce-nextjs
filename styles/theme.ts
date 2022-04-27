export const theme = {
    name: "default",
    fonts: {
    title: "Space Grotesk, sans-serif",
    main: "Space Grotesk, sans-serif"
  },
  // Colors for layout
  colors: {
    primary1: "#000000",
    background1: "#f5ecb7",
    // accent1: "hsl(34.9,98.6%,72.9%)",
    secondary: "rgba(255, 255, 255, 0.9)",
    background2: "#23192d",
  },
  // Breakpoints for responsive design
  breakpoints: {
    xsmall: 'screen and (max-width: 330px)',
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
  },
  };

export type ThemeType = typeof theme
