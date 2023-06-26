const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)

const plugins = [
  '@vue/babel-plugin-jsx'
]

if (IS_PROD) {
  plugins.push('transform-remove-console')
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins
}
