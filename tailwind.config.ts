import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EBF5FF',
          100: '#E1EFFE',
          200: '#C3DDFD',
          300: '#A4CAFE',
          400: '#76A9FA',
          500: '#3F83F8',
          600: '#1C64F2',
          700: '#1A56DB',
          800: '#1E429F',
          900: '#233876',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          50: '#E7E9EF',
          100: '#C2C9D6',
          200: '#9BA6BD',
          300: '#7483A4',
          400: '#4D608B',
          500: '#2E3B52', // Base dark navy
          600: '#1F2937',
          700: '#111827',
          800: '#0B1219',
          900: '#050A0F',
        },
        accent: {
          blue: '#3B82F6',
          purple: '#8B5CF6',
        }
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '112': '28rem',
        '128': '32rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'feature': '0 0 30px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))',
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontFamily: 'var(--font-poppins)',
            },
            h2: {
              fontFamily: 'var(--font-poppins)',
            },
            h3: {
              fontFamily: 'var(--font-poppins)',
            },
            p: {
              fontFamily: 'var(--font-inter)',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};

export default config;
