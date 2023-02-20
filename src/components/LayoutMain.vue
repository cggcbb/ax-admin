<template>
  <section class="main-container" pa-8px>
    <router-view v-slot="{ Component, route }">
      <transition :name="`${animationActive ? type : ''}-transform`" mode="out-in" appear>
        <keep-alive :include="cacheRoutesName">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<script lang="ts">
defineComponent({
  name: 'LayoutMain'
})
</script>

<script lang="ts" setup>
import useSetting from '~/store/setting'
import useCacheRoutes from '~/store/cache-routes'

const backgroundColor = computed(() => (isDark.value ? '#1c1c1c' : '#f4f4f4'))

const setting = useSetting()
const { type, animationActive } = $(setting.layoutAnimationSetting)
const { cacheRoutesName } = toRefs(useCacheRoutes())
</script>

<style lang="less" scoped>
.main-container {
  height: calc(100vh - @logoHeight);
  overflow: auto;
  background-color: v-bind(backgroundColor);
}
</style>
