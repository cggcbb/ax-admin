<template>
  <div class="flyBox-wrapper" ref="flyBoxWrapper">
    <svg :width="width" :height="height">
      <defs>
        <path :id="pathId" :d="path" fill="none" />
        <mask :id="maskId">
          <circle cx="0" cy="0" :r="starLength" :fill="`url(#${gradientId})`">
            <animateMotion :path="path" :dur="`${duration}s`" repeatCount="indefinite" rotate="auto" />
          </circle>
        </mask>
        <radialGradient :id="gradientId" r="50%" cx="50%" cy="50%" :fx="starLightPosition" fy="50%">
          <stop offset="0%" stop-color="#fff" stop-opacity="1"></stop>
          <stop offset="100%" stop-color="#fff" stop-opacity="0"></stop>
        </radialGradient>
      </defs>
      <use :href="`#${pathId}`" stroke-width="1" :stroke="lineColor" />
      <use :href="`#${pathId}`" stroke-width="3" :stroke="starColor" :mask="`url(#${maskId})`" />
    </svg>
    <div class="flyBox-content">
      <slot></slot>
    </div>
  </div>
</template>


<script lang="ts" setup>
defineProps({
  lineColor: {
    type: String,
    default: '#235fa7'
  },
  starColor: {
    type: String,
    default: '#fff'
  },
  starLength: {
    type: [String, Number],
    default: 100
  },
  duration: {
    type: [String, Number],
    default: 3
  },
  starLightPosition: {
    type: String,
    default: '100%'
  }
})

let width = $ref(0)
let height = $ref(0)

const flyBoxWrapper: any = ref<HTMLElement | null>(null)
const uuid = crypto.randomUUID();
const pathId = `path-${uuid}`
const maskId = `mask-${uuid}`
const gradientId = `gradient-${uuid}`
const path = $computed(() => `M5 5 L${width - 5} 5 L${width - 5} ${height - 5} L5 ${height - 5} Z`)

const initFlyBox = () => {
  width = flyBoxWrapper.value.clientWidth
  height = flyBoxWrapper.value.clientHeight
}

onMounted(() => {
  setTimeout(initFlyBox, 3000)
})
</script>

<script lang="ts">
export default {
  name: 'flyBox',
}
</script>

<style lang="less" scoped>
.flyBox-wrapper {
  position: relative;
  width: 100%;
  height: 100%;

  svg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .flyBox-content {
    width: 100%;
    height: 100%;
    padding: 5px;
    box-sizing: border-box;
  }
}
</style>
