import type { Config } from 'tailwindcss';

/**
 * Configuration Tailwind CSS - Thème Gaming Violet/Turquoise
 * - Palette inspirée setup gaming nocturne
 * - Couleurs vibrantes : violet, turquoise, rose
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        accent: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        gaming: {
          pink: '#ff6ec7',
          purple: '#9333ea',
          cyan: '#22d3ee',
          violet: '#a855f7',
          dark: '#1a1625',
          darker: '#0f0a1e',
        },
        neutral: {
          850: '#1a1625',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      backgroundImage: {
        'gradient-gaming': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-cyber': 'linear-gradient(135deg, #a855f7 0%, #22d3ee 100%)',
        'gradient-neon': 'linear-gradient(135deg, #ff6ec7 0%, #a855f7 50%, #22d3ee 100%)',
      },
      boxShadow: {
        'neon-purple': '0 0 20px rgba(168, 85, 247, 0.5)',
        'neon-cyan': '0 0 20px rgba(34, 211, 238, 0.5)',
        'neon-pink': '0 0 20px rgba(255, 110, 199, 0.5)',
      },
    },
  },
  plugins: [],
};

export default config;
