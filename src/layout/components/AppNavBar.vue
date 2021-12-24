<script>
// settings
import defaultSettings from '@/settings'

export default {
  name: 'AppNavBar',
  inheritAttrs: false,
  computed: {
    attrs() {
      return Object.assign(
        {},
        defaultSettings.navbar,
        this.$route.meta.navbar.showTitle && { title: this.$route.meta.title },
        !this.$route.meta.navbar.showTitle && { leftText: this.$route.meta.title },
        this.$route.meta.navbar
      )
    },
    classname() {
      return this.$route.meta.navbar.classname
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  },
  render() {
    const data = {
      attrs: { ...this.attrs },
      on: {
        'click-left': this.onClickLeft
      }
    }
    return (
      <van-nav-bar
        {...data}
        class={['v-nav-bar', this.classname]}
      />
    )
  }
}
</script>

<style lang="less">
.v-nav-bar {

}
</style>