<template>
  <div center-layout class="logo-wrapper">
    <img w-30px src="../../assets/logo.svg" />
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'Logo'
})
</script>

<script lang="ts" setup></script>
<style lang="less" scoped>
.logo-wrapper {
  height: @logoHeight;
}
</style>
