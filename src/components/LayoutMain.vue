<template>
  <section class="main-container" pa-8px>
    <router-view v-slot="{ Component, route }">
      <transition
        :name="`${animationActive ? type : ''}-transform`"
        mode="out-in"
        appear
      >
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
    const backgroundColor = computed(() =>
      isDark.value ? '#161616' : '#f4f4f4'
    )

    const setting = useSetting()
    const { type, animationActive } = toRefs(setting.layoutAnimationSetting)

    return {
      type,
      backgroundColor,
      animationActive
    }
  }
})
</script>

<style lang="less" scoped>
.main-container {
  height: calc(100vh - @logoHeight);
  overflow: auto;
  background-color: v-bind(backgroundColor);
}
</style>
