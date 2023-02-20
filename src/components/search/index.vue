<template>
  <teleport to="body">
    <n-el v-show="visible" class="search-mask" @click.self="handleClose">
      <n-el class="search-content">
        <n-icon
          :size="22"
          class="search-close"
          :component="CloseIcon"
          @click.prevent="handleClose"
        />
        <n-input-group>
          <n-select
            :style="{ minWidth: '118px', width: '33%' }"
            v-model:value="searchType"
            :render-label="renderLabel"
            :options="options"
          />
          <n-input autofocus v-model:value="searchValue" placeholder="柳絮纷飞，毕竟不是雪..." />
          <n-button @click.prevent="handleSearch">搜索</n-button>
        </n-input-group>
      </n-el>
    </n-el>
  </teleport>
</template>

<script lang="ts">
defineComponent({
  name: 'Search'
})
</script>

<script lang="ts" setup>
import { NIcon } from 'naive-ui'
import { VNodeChild } from 'vue'
import {
  LogoGithub as GithubIcon,
  LogoYoutube as YoutubeIcon,
  LogoWindows as BingIcon,
  LogoGoogle as GoogleIcon,
  CloseOutline as CloseIcon
} from '@vicons/ionicons5'
import { SearchType, SearchUrl, ISearchUrlMap } from '~/types/common'

defineExpose({
  handleOpen
})

const searchUrlMap: ISearchUrlMap = {
  Google: SearchUrl.Google,
  Bing: SearchUrl.Bing,
  Github: SearchUrl.Github,
  Youtube: SearchUrl.Youtube
}

let visible = $ref(false)
let searchValue = $ref('')
let searchType = $ref<SearchType>(SearchType.Google)

const options = [
  {
    label: 'Google',
    value: 'Google',
    icon: GoogleIcon
  },
  {
    label: 'Bing',
    value: 'Bing',
    icon: BingIcon
  },
  {
    label: 'Github',
    value: 'Github',
    icon: GithubIcon
  },
  {
    label: 'Youtube',
    value: 'Youtube',
    icon: YoutubeIcon
  }
]

const handleSearch = () => {
  const url = `${searchUrlMap[searchType as SearchType]}${searchValue}`
  window.open(url, '__blank')
}

const handleClose = () => {
  visible = false
  searchValue = ''
}

function handleOpen() {
  visible = true
}

const renderLabel = (option: any): VNodeChild => {
  return [
    h(
      NIcon,
      {
        style: {
          verticalAlign: '-0.15em',
          marginRight: '6px'
        }
      },
      {
        default: () => h(option.icon)
      }
    ),
    option.label as string
  ]
}

// 防止弹窗后的内容滚动
watchPostEffect(() => {
  document.documentElement.setAttribute('style', visible ? 'overflow: hidden' : '')
})
</script>

<style lang="less" scoped>
.search-mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(3px);

  .search-content {
    position: relative;
    width: 40%;
    height: fit-content;
    padding: 24px 36px;
    border-radius: 8px;
    background-color: var(--card-color);
    box-shadow: 2px 2px 10px var(--card-color);
    opacity: 0.8;

    .search-close {
      position: absolute;
      right: 6px;
      top: 2px;
      color: var(--text-color-3);
      cursor: pointer;
    }
  }

  @media screen and (max-width: 1080px) {
    .search-content {
      width: 55%;
    }
  }

  @media screen and (max-width: 800px) {
    .search-content {
      width: 70%;
    }
  }
}
</style>
