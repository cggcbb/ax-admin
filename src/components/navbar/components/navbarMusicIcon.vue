<template>
  <n-icon :size="size" class="navbar-music-icon-wrapper" @click="handleSongPlay">
    <component :is="icon" />
  </n-icon>
</template>

<script setup lang="ts">

import { PlayCircleOutline, PauseCircleOutline } from '@vicons/ionicons5'
import useSong from '~/store/song'

defineProps({
  size: Number
})

const song = useSong()

const handleSongPlay = () => {
  song.togglePlay(!song.playing)
}

const icon = $computed(() => song.playing ? PauseCircleOutline : PlayCircleOutline)

</script>

<style lang="less" scoped>
.navbar-music-icon-wrapper {
  min-width: 48px;
  cursor: pointer;

  &:hover {
    color: var(--primary-color);
  }
}
</style>
