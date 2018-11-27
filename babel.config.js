module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        styleLibraryName: 'es',
        // 指定样式路径
        style: name => `${name}/style/less`
      },
      'vant'
    ]
  ]
}
