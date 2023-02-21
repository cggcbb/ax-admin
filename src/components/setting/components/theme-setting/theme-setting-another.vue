<template>
  <n-el class="switches" ref="switches">
    <n-el
      class="switch-item"
      v-for="(item, index) in themeItems"
      :key="item"
      :class="{ active: value === index }"
      @click="switchItem(index)"
    >
      <span>{{ item }}</span>
    </n-el>
    <n-el class="active-bar" :style="activeStyle" />
  </n-el>
</template>

<script lang="ts">
defineComponent({
  name: 'themeSettingAnother'
})
</script>

<script lang="ts" setup>
const themeItems = ['明亮', '暗黑']
const switches = $ref<HTMLElement | null>(null)
let width = $ref(0)
let value = $computed(() => (isDark.value ? 1 : 0))

const emits = defineEmits(['handleThemeChange'])

const switchItem = (index: number) => {
  emits('handleThemeChange', { isDark: index === 1 })
}

watchPostEffect(() => {
  // >> 0 取整
  width = ((switches as any).$el.clientWidth / 2) >> 0
})

const activeStyle = $computed(() => {
  const x = (width - 3) * value
  return {
    transform: `translate3d(${x}px, 0, 0)`
  }
})
</script>

<style scoped lang="less">
.switches {
  display: flex;
  position: relative;
  align-items: center;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  width: 100%;
  height: 34px;
  .switch-item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    font-size: var(--font-size-small);
    font-weight: 700;
    color: var(--n-text-color);
    z-index: 2;
    cursor: pointer;
    user-select: none;
    &.active {
      color: var(--primary-color);
    }
  }
  .active-bar {
    position: absolute;
    top: 3px;
    left: 3px;
    bottom: 3px;
    width: calc(50% - 6px);
    // 34px parent height - 2px parent border - 3xp top - 3px bottom = 26px
    height: 26px;
    transition: transform 0.3s;
    border-radius: var(--border-radius);
    background: var(--pressed-color);
  }
}
</style>
