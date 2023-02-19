<template>
  <section class="nav-bar-wrapper" :class="{ 'show-box-shadow': !showTabBar }" flex items-center>
    <navbar-fold-icon />
    <n-tooltip trigger="hover">
      <template #trigger>
        <navbar-music-icon :size="22" />
      </template>
      背景音乐 ： 一首来自周杰伦的 &lt;枫&gt;
    </n-tooltip>
    <navbar-breadcrumb />
    <!-- placeholder 占位 -->
    <div class="placeholder"></div>
    <navbar-actions
      @search-click="handleSearchClick"
      @refresh-click="handleRefreshClick"
      @full-screen-click="handleFullScreenClick"
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

const { handleSearchClick, handleRefreshClick, handleFullScreenClick, handleSettingClick } =
  useActions(settingRef, searchRef)

const { showTabBar } = $(useSetting().tabBarSetting)
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
  }
}
</style>
