/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
    "./dist/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#64748b',
        accent: '#f59e0b',
      },
      spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        xxl: '4rem',
      },
      scrollBehavior: {
        smooth: 'smooth',
      },
    },
  },
  plugins: [],
}
