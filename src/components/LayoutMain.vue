<template>
  <section class="main-container" pa-8px>
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in" appear>
        <keep-alive>
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<script lang="ts">
export default defineComponent({
  name: 'LayoutMain',
  setup() {
    const backgroundColor = computed(() => isDark.value ? '#1c1c1c' : '#f4f4f4')

    return {
      backgroundColor
    }
  }
})
</script>

<style lang="less" scoped>
.main-container {
  background-color: v-bind(backgroundColor)
}
</style>
