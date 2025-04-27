module.exports = {
  plugins: [
    require('@tailwindcss/postcss')({
      config: './tailwind.config.js'   // path to your Tailwind config
    }),
    require('autoprefixer')
  ]
}

