<template>
  <n-el class="ax-horizontal-header-container" :class="{ 'show-box-shadow': !showTabBar }">
    <n-collapse-transition :show="showLogo || showTitle" class="logo-container-collapse">
      <div class="logo-container" :class="{ 'hidden-border': !showTabBar }">
        <logo v-if="showLogo" />
        <div flex items-center v-if="showTitle">
          <span fw-bold :class="[collapsed ? 'close-title' : 'show-title']">ax-admin</span>
        </div>
      </div>
    </n-collapse-transition>
    <navbar />
  </n-el>
</template>

<script lang="ts">
export default defineComponent({
  name: 'HorizontalHeader'
})
</script>

<script lang="ts" setup>
import useSetting from '~/store/setting'
const setting = useSetting()

const { collapsed, menuWidth } = $(setting.menuSetting)
const { showLogo, showTitle } = $(setting.headerSetting)

const logoWidth = $computed(() => `${menuWidth}px`)

const { showTabBar } = $(useSetting().tabBarSetting)
</script>

<style scoped lang="less">
.ax-horizontal-header-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 999;
  box-sizing: border-box;
  .logo-container-collapse {
    width: v-bind(logoWidth);
    .logo-container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: @logoHeight;
      border-bottom: 1px solid var(--border-color);
      border-right: 1px dashed var(--border-color);
      transition: all 0.3s;

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
      &.hidden-border {
        border-bottom: none;
      }
    }
  }
  &.show-box-shadow {
    box-shadow: var(--box-shadow-2);
  }
}
</style>
