<template>
  <div flex-center-all class="logo-wrapper">
    <img v-if="showLogo" w-30px src="../../assets/logo.svg" />
    <div flex items-center>
      <span fw-bold :class="[menuSetting.collapsed ? 'close-title' : 'show-title']">ax-admin</span>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'Logo',
})
</script>

<script lang="ts" setup>
import useSetting from '~/store/setting'

defineProps({
  showTitle: {
    type: Boolean,
    default: true,
  },
  showLogo: {
    type: Boolean,
    default: true,
  },
})

const menuSetting = useSetting().menuSetting

</script>
<style lang="less" scoped>
.logo-wrapper {
  height: @logoHeight;
  border-bottom: 1px dashed var(--border-color);

  .show-title {
    transform: scale(1);
    width: auto;
    transition: transform 0.2s ease-in;
    margin-left: 10px;
  }

  .close-title {
    transform: scale(0);
    width: 0;
    margin-left: 0;
  }
}
</style>
