export default {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        transparent: "transparent",
        "primaryColor": "#EAF4F4",
        "secondaryColor": '#EDC9F5',
        "textColor": '#adb5bd',
        "headingColor": "#dee2e6",
        "white": "#ffffff",
        "flatWhite": "#FAFAFA",
        "lightGray": "#F2F2F2",
      },
    }
  },
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/*.vue',
    './pages/**/*.vue',
    './pages/**/**/*.vue',
    './pages/**/**/**/*.vue',
    './composables/*.{js,ts}',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: 'class',
  cssPath: '~/assets/css/tailwind.css'
}