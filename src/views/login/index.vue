<template>
  <section class="login-wrapper">
    <n-grid>
      <n-gi :span="24" center-layout-h>
        <n-button>登录页面留给一个特别的人</n-button>
      </n-gi>
    </n-grid>
    <n-grid mt-10px>
      <n-gi :span="24" center-layout-h>
        <n-button @click="go">去首页</n-button>
      </n-gi>
    </n-grid>
  </section>
  <section ref="loginWrapper"></section>
</template>

<script lang="ts" setup>
import useLoginBackground from './useLoginBackground'

const loginWrapper = $ref<HTMLElement | null>(null)
useLoginBackground($$(loginWrapper))

const router = useRouter()
const route = useRoute()

const go = () => {
  const { query } = route
  router.push({
    path: (query.redirect as string) ?? '/dashboard'
  })
}

localStorage.setItem('vueuse-color-scheme', 'dark')
</script>

<style lang="less" scoped>
.login-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 200px;
  transform: translate3d(-200px, -100px, 0);
  z-index: 10;
}

canvas {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
