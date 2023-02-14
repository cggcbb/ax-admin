<template>
  <section class="nav-bar-wrapper" flex items-center>
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
    <navbar-actions @search-click="handleSearchClick" @bell-click="handleBellClick"
      @full-screen-click="handleFullScreenClick" @setting-click="handleSettingClick" />
    <navbar-avatar />
    <!-- <div class="tab-bar-wrapper">
      <tab-bar></tab-bar>
    </div> -->
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
import useActions from './useActions'

const settingRef = ref<HTMLElement | null>(null)
const searchRef = ref<HTMLElement | null>(null)

const { handleSearchClick, handleBellClick, handleFullScreenClick, handleSettingClick } =
  useActions(settingRef, searchRef)

</script>

<style lang="less" scoped>
.nav-bar-wrapper {
  box-sizing: border-box;
  box-shadow: 1px 0 2px 1px rgba(0, 0, 0, 0.3);
  z-index: 99;
  overflow: hidden;
  transition: all 0.3s;
  height: @logoHeight;
  padding: 0 12px;

  .placeholder {
    flex: 1;
  }
}
</style>
