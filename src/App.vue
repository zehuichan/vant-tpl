<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view class="app-main"/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>
