<template>
  <n-el>
    <n-layout has-sider>
      <!-- 侧边栏 -->
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="collapsedWidth"
        :width="menuWidth"
        :collapsed="collapsed"
        class="ax-layout-sider"
      >
        <!-- logo -->
        <ax-header />
        <!-- 菜单 -->
        <Menu />
      </n-layout-sider>
      <n-layout>
        <!-- 导航 -->
        <navbar />
        <n-collapse-transition :show="showTabBar">
          <tabbar />
        </n-collapse-transition>
        <!-- 主题内容 -->
        <layout-main />
      </n-layout>
    </n-layout>
  </n-el>
  <audio ref="audio" @ended="handleAudioEnded">
    <source src="../assets/mp3/maple.mp3" />
  </audio>

  <n-watermark
    v-if="waterMarkActive && waterMarkType === 'text'"
    :content="waterMarkValue"
    cross
    fullscreen
    :font-size="waterMarkSize"
    :line-height="16"
    :width="384"
    :height="384"
    :x-offset="12"
    :y-offset="28"
    :global-rotate="waterMarkRotate"
    :font-color="waterMarkColor"
  />
  <n-watermark
    v-if="waterMarkActive && waterMarkType === 'image'"
    :image="waterMarkImageUrl"
    cross
    fullscreen
    :font-size="waterMarkSize"
    :line-height="16"
    :width="384"
    :height="384"
    :x-offset="12"
    :y-offset="0"
    :image-width="waterMarkImageSize"
    :global-rotate="watchMarkImageRotate"
    :image-height="waterMarkImageSize"
    :image-opacity="0.24"
  />
</template>

<script lang="ts">
defineComponent({
  name: 'Layout'
})
</script>

<script lang="ts" setup>
import useSetting from '~/store/setting'
import useSong from '~/store/song'

const setting = useSetting()
const { collapsed, menuWidth, collapsedWidth } = $(setting.menuSetting)
const { showTabBar } = $(setting.tabBarSetting)

const audio: any = $ref<HTMLElement | null>(null)

// 背景音乐相关设置
const song = useSong()
// 背景音乐播放完毕，重复播放
const handleAudioEnded = () => {
  audio.currentTime = 0
  audio?.play()
}
// 暂停，开始播放
watchPostEffect(() => {
  song?.playing ? audio?.play() : audio?.pause()
})

// 水印相关设置
const {
  waterMarkActive,
  waterMarkValue,
  waterMarkType,
  waterMarkImageUrl,
  waterMarkSize,
  waterMarkImageSize,
  waterMarkColor,
  waterMarkRotate,
  watchMarkImageRotate
} = $(setting.waterMarkSetting)

// loading bar
const router = useRouter()
const loadingBar = useLoadingBar()
router.beforeEach(() => {
  loadingBar.start()
})
router.afterEach(() => {
  loadingBar.finish()
})

/*
  如果你想在 setup 外使用信息
  你需要在顶层 setup 中把 useMessage 返回的 message 值挂载到 window 下然后再调用
  调用前需要确保 message 已经挂载成功
*/
window.$message = useMessage()
</script>

<style lang="less" scoped>
.ax-layout-sider {
  box-shadow: 3px 0 5px rgba(133, 133, 133, 0.5);
}
</style>
