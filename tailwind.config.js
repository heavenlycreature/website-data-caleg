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
          
          "primary": "#8000ff",
                   
          "secondary": "#e70000",
                   
          "accent": "#ff0000",
                   
          "neutral": "#1c2516",
                   
          "base-100": "#eafff5",
                   
          "info": "#0088e7",
                   
          "success": "#00f0c0",
                   
          "warning": "#995a00",
                   
          "error": "#ff6b74",
                   },
         
      },
    ],
  },
  plugins: [
    require('daisyui')
  ],
}

