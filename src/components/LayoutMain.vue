<template>
  <section class="main-container" pa-8px>
    <router-view v-slot="{ Component, route }">
      <transition :name="`${animationActive ? type : ''}-transform`" mode="out-in" appear>
        <keep-alive>
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<script lang="ts">
import useSetting from '~/store/setting'

export default defineComponent({
  name: 'LayoutMain',
  setup() {
    const backgroundColor = computed(() => isDark.value ? '#1c1c1c' : '#f4f4f4')

    const setting = useSetting()
    const { type, animationActive } = toRefs(setting.layoutAnimationSetting)

    return {
      backgroundColor,
      type,
      animationActive
    }
  }
})
</script>

<style lang="less" scoped>
.main-container {
  background-color: v-bind(backgroundColor)
}
</style>
