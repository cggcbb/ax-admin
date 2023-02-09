<template>
  <n-gradient-text :size="size" gradient="linear-gradient(90deg, #08d9d6 0%, #3490de 50%, #763ae0 100%)">
    <slot></slot>
  </n-gradient-text>
</template>


<script lang="ts" setup>
defineProps({
  size: [Number, String]
})
</script>

<script lang="ts">
export default defineComponent({
  name: 'gradientText'
})
</script>

<style scoped>

</style>
