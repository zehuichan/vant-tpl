<template>
  <div id="app">
    <!--    <transition name="fade" mode="out-in">-->
    <router-view/>
    <!--    </transition>-->
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
</style>