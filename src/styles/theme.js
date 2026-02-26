// Create this file for shared styles and theme
export const theme = {
  colors: {
    primary: '#2563eb',
    primaryDark: '#1d4ed8',
    primaryLight: '#3b82f6',
    secondary: '#7c3aed',
    accent: '#0ea5e9',
    background: '#f8fafc',
    surface: '#ffffff',
    text: {
      primary: '#1e293b',
      secondary: '#64748b',
      light: '#94a3b8',
    },
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    gradient: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    h1: {
      fontSize: '3.5rem',
      fontWeight: '700',
      lineHeight: '1.1',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: '600',
      lineHeight: '1.2',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: '600',
      lineHeight: '1.3',
    },
    body: {
      fontSize: '1rem',
      lineHeight: '1.6',
    },
    small: {
      fontSize: '0.875rem',
      lineHeight: '1.4',
    },
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem',
  },
  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    round: '50%',
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.12)',
    md: '0 4px 6px -1px rgba(0,0,0,0.1)',
    lg: '0 10px 25px -5px rgba(0,0,0,0.1)',
    xl: '0 20px 50px -12px rgba(0,0,0,0.25)',
  },
  transitions: {
    default: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    smooth: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  },
};