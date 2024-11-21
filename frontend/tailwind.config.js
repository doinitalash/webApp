/** @type {import('tailwindcss').Config} */
export const darkMode = 'class';
export const content = ['./src/**/*.{js,jsx,ts,tsx,html}']
export const theme = {
  extend: {
    colors: {
      dark: '#1a1a1a',
      primary: '#e91e63',
      secondary: '#ff4081',
      lightGray: '#f7f7f7',
    },
    animation: {
      'menu-slide-in': 'slideIn 0.3s ease-in-out',
      'menu-slide-out': 'slideOut 0.3s ease-in-out',
    },
    keyframes: {
      slideIn: {
        '0%': { transform: 'translateY(-100%)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
      slideOut: {
        '0%': { transform: 'translateY(0)', opacity: '1' },
        '100%': { transform: 'translateY(-100%)', opacity: '0' },
      },
    },
  },
  plugins: [],
};
