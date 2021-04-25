<template>
  <svg :class="[classPrefix, 'iconfont']" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="`#${name}`"/>
  </svg>
</template>

<script>
  export default {
    name: 'VSvgIcon',
    props: {
      name: String,
      classPrefix: String,
    },
  }
</script>

<style>
  .iconfont {
    width: 1em;
    height: 1em;
    min-width: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>