<template>
  <div class="container" ref="containerWrapper">
    <slot></slot>
  </div>
</template>

<script lang="ts">
defineComponent({
  name: 'ScaleContainer'
})
</script>

<script lang="ts" setup>
import { debounce } from '~/utils/index'

const props = defineProps({
  options: Object
})

let width = $ref(0)
let height = $ref(0)
let viewportWidth = $ref(0)
let viewportHeight = $ref(0)

const containerWrapper = ref<HTMLElement | null>(null)
let observer: any = null

const initSize = async () => {
  // 获取真实尺寸（传参options）, 如果没传options参数，取containerWrapper宽高
  const { width: _width, height: _height } = props.options!

  if (_width && _height) {
    width = _width
    height = _height
  } else {
    width = containerWrapper.value!.clientWidth
    height = containerWrapper.value!.clientHeight
  }
  // 获取浏览器（画布）宽高
  if (!viewportWidth || !viewportHeight) {
    viewportWidth = screen.width
    viewportHeight = screen.height
  }
}

// 初始化MutationObserver去监听containerWrapper的style变化， 调用onResize方法
const initMutationObserver = () => {
  const MutationObserver = window.MutationObserver
  observer = new MutationObserver(onResize)

  observer.observe(containerWrapper.value as any, {
    attributes: true,
    attributeFilter: ['style'],
    attributeOldValue: true
  })
}

const removeMutationObserver = () => {
  if (!observer) return
  observer.disconnect()
  observer.takeRecords()
  observer = null
}

// 锁定宽高
const updateSize = () => {
  if (width && height) {
    containerWrapper.value!.style.width = `${width}px`
    containerWrapper.value!.style.height = `${height}px`
  } else {
    containerWrapper.value!.style.width = `${viewportWidth}px`
    containerWrapper.value!.style.height = `${viewportHeight}px`
  }
}

// 计算宽高压缩比
const calculateScale = () => {
  const currentWidth = document.body.clientWidth
  const currentHeight = document.body.clientHeight

  const realWidth = width || viewportWidth
  const realHeight = height || viewportHeight

  const scaleWidth = currentWidth / realWidth
  const scaleHeight = currentHeight / realHeight

  return {
    scaleWidth,
    scaleHeight
  }
}

// 更新宽高压缩比
const updateScale = () => {
  const { scaleWidth, scaleHeight } = calculateScale()
  containerWrapper.value!.style.transform = `scale(${scaleWidth}, ${scaleHeight})`
}
onMounted(async () => {
  await initSize()
  updateSize()
  updateScale()

  window.addEventListener('resize', debounce(onResize, 500))

  initMutationObserver()
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  removeMutationObserver()
})

const onResize = async () => {
  // mutationObserverEvent -> containerWrapper的style变化会触发onResize操作，传递event参数
  await initSize()
  updateScale()
}
</script>

<style lang="less" scoped>
.container {
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;
  overflow: hidden;
  transform-origin: left top;
}
</style>
