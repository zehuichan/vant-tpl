import Vue from 'vue'

Vue.mixin({
  methods: {
    $navigateTo(url, json, target = '_self') {
      if (target === '_self') {
        void this.$router.push({ path: url, query: json })
      } else {
        const { href } = this.$router.resolve({ path: url, query: json })
        window.open(href, '_blank')
      }
    },
    $redirectTo(url) {
      void this.$router.replace(url)
    },
    $navigateBack() {
      this.$router.back()
    }
  }
})