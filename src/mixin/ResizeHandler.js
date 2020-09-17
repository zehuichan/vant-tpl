export default {
  data() {
    return {
      isOriginHeight: true,
      screenHeight: document.documentElement.clientHeight,
      originHeight: document.documentElement.clientHeight,
    }
  },
  watch: {
    screenHeight(val) {
      this.isOriginHeight = this.originHeight <= val + 100
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.$_resizeHandler)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.$_resizeHandler)
  },
  methods: {
    $_resizeHandler() {
      this.screenHeight = document.documentElement.clientHeight
    }
  }
}