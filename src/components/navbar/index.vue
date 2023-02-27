<template>
  <section
    class="nav-bar-wrapper"
    :class="{
      'flex-1': !layoutLR,
      'show-box-shadow': !showTabBar && layoutLR,
      'hidden-border': !showTabBar && !layoutLR
    }"
    flex
    items-center
  >
    <navbar-fold-icon v-if="layoutLR" />
    <!-- layout上下结构时候的菜单 -->
    <horizontal-menu v-if="!layoutLR" />
    <breadcrumb v-if="layoutLR" />
    <!-- placeholder 占位 -->
    <div class="placeholder" v-if="layoutLR"></div>
    <n-tooltip trigger="hover" v-if="showMusic">
      <template #trigger>
        <navbar-music-icon :size="21" />
      </template>
      背景音乐 ： 一首来自周杰伦的 &lt;枫&gt;
    </n-tooltip>
    <navbar-actions
      @search-click="handleSearchClick"
      @refresh-click="handleRefreshClick"
      @full-screen-click="handleFullscreenClick"
      @setting-click="handleSettingClick"
    />
    <navbar-avatar />
  </section>
  <setting ref="settingRef" />
  <search ref="searchRef" />
</template>

<script lang="ts">
defineComponent({
  name: 'Navbar'
})
</script>

<script setup lang="ts">
import useSetting from '~/store/setting'
import useActions from './useActions'

const settingRef = ref<HTMLElement | null>(null)
const searchRef = ref<HTMLElement | null>(null)

const { handleSearchClick, handleRefreshClick, handleFullscreenClick, handleSettingClick } =
  useActions(settingRef, searchRef)

// 这里不能使用setting当作变量名，因为用到了setting组件
const $setting = useSetting()

const { showTabBar } = $($setting.tabBarSetting)
const { showMusic } = $($setting.narBarSetting)
const { layoutLR } = $($setting)
</script>

<style lang="less" scoped>
.nav-bar-wrapper {
  position: relative;
  box-sizing: border-box;
  border-bottom: 1px solid var(--border-color);
  z-index: 99;
  overflow: hidden;
  transition: all 0.3s;
  height: @logoHeight;
  padding: 0 12px;

  .placeholder {
    flex: 1;
  }
  &.show-box-shadow {
    box-shadow: var(--box-shadow-2);
    border-bottom: none;
  }
  &.hidden-border {
    border-bottom: none;
  }
}
</style>
