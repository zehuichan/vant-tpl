<template>
  <div class="errPage-container">
    <v-card v-for="i in 20" :key="i" class="box-card">
      <div class="text">placeholder</div>
    </v-card>
    <v-backtop/>
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
  padding: 16px;
}

.box-card + .box-card {
  margin-top: 12px;
}

.text {
  font-size: 12px;
}
</style>
