<template>
  <n-collapse-transition :show="showLogo || showTitle">
    <n-el class="ax-vertical-header-container">
      <logo v-if="showLogo" />
      <div flex items-center v-if="showTitle">
        <span fw-bold :class="[collapsed ? 'close-title' : 'show-title']">ax-admin</span>
      </div>
    </n-el>
  </n-collapse-transition>
</template>

<script lang="ts">
export default defineComponent({
  name: 'VerticalHeader'
})
</script>

<script lang="ts" setup>
import useSetting from '~/store/setting'
const setting = useSetting()

const { collapsed } = $(setting.menuSetting)
const { showLogo, showTitle } = $(setting.headerSetting)
</script>

<style scoped lang="less">
.ax-vertical-header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: @logoHeight;
  z-index: 999;
  box-sizing: border-box;
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
