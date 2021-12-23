module.exports = {
  title: 'vant tpl',
  copyright: '2018 - present Zehui Chan',

  /**
   * navbar default options
   */
  navbar: {
    showTitle: true,
    leftArrow: true,
    border: false,
    fixed: true,
    placeholder: true,
    safeAreaInsetTop: true
  },

  // todo tabbar default options
  tabbar: {
    route: true,
    fixed: true,
    placeholder: true,
    items: []
  },

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: ['production', 'staging']
}