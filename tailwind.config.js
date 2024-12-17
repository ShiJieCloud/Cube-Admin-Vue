/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  // 禁用 Tailwind 默认的样式重置
  // corePlugins: {
  //   preflight: false,
  // },
}
