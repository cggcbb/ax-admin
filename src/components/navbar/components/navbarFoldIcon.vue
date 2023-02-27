<template>
  <div flex-center-v class="fold-wrapper" @click.stop="toggleFold">
    <span
      i-carbon-text-wrap
      w-22px
      h-22px
      :class="[menuSetting.collapsed ? 'fold-close-status' : 'fold-open-status']"
    ></span>
  </div>
</template>

<script lang="ts">
defineComponent({
  name: 'NavBarFoldIcon'
})
</script>

<script setup lang="ts">
import useSetting from '~/store/setting'

const setting = useSetting()
const { menuSetting, setCollapsed } = setting

const toggleFold: () => void = () => {
  setCollapsed(!menuSetting.collapsed)
}
</script>

<style lang="less" scoped>
.fold-open-status {
  transform: rotateX(180deg);
}

.fold-close-status {
  transform: rotateX(180deg) rotateY(180deg);
}

.fold-wrapper {
  box-sizing: border-box;
  width: 48px;
  height: @logoHeight;
  padding: 0 10px;
  font-size: 12px;
  transition: transform 0.1s linear;

  &:hover {
    cursor: pointer;
    color: var(--primary-color);
  }
}
</style>
