<template>
  <div class="ax-header-layout">
    <logo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AXHeader',
})
</script>

<style scoped lang="less">
.ax-header-layout {
  height: @logoHeight;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid var(--border-color);

  .logo-wrapper {
    width: calc(@menuWidth / 3 * 2);
  }

  .menu-wrapper {
    flex: 1;
    overflow: hidden;
  }

  .right-wrapper {
    height: 100%;
  }

  .avatar-wrapper {
    padding-right: 15px;
  }
}
</style>
