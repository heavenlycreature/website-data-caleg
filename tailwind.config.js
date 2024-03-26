/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0043ff",
                  
          "secondary": "#588c00",
                  
          "accent": "#bf5900",
                  
          "neutral": "#120805",
                  
          "base-100": "#fffdff",
                  
          "info": "#00a3ff",
                  
          "success": "#00fc8e",
                  
          "warning": "#ff3400",
                  
          "error": "#ff7d90",
        },
      },
    ],
  },
  plugins: [
    require('daisyui')
  ],
}

