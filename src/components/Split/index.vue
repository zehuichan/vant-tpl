<template>
  <div :style="[splitStyle, {height: `${gutter}px`}]"></div>
</template>

<script>
export default {
  name: 'split',
  props: {
    splitStyle: {},
    gutter: {
      type: String,
      default: '10'
    }
  }
}
</script>
