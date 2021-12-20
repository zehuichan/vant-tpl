<template>
  <div class="errPage-container">
  </div>
</template>

<script>
export default {
  name: 'ErrorLog',
  computed: {
    errorLogs() {
      return this.$store.getters.errorLogs
    }
  },
  created() {
    let a = null
    if (a.length > 1) {
      // ...
    }
  }
}
</script>

<style>
.errPage-container {
  padding: 30px;
}
</style>
