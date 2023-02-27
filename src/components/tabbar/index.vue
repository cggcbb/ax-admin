<template>
  <n-el class="ax-tab-bar-container">
    <n-scrollbar ref="scrollbar" x-scrollable>
      <!-- n-button  绑定了自定义data -->
      <n-button
        class="tab-item"
        :class="{ showAffixIcon: showAffixIcon }"
        v-for="item of visitedRoutes"
        :key="item.path"
        :type="currentPath === item.path ? 'primary' : 'default'"
        secondary
        strong
        :data="`${setting.projectName}-${item.path}`"
        @click="handleItemClick(item)"
      >
        <!-- 加载设置的affixIcon， 否则默认图标为 DefaultIcon -->
        <n-icon
          v-if="showAffixIcon"
          :component="NIconTransform[item.meta?.affixIcon as string] ?? DefaultIcon"
          mr-4px
        />
        <span font-size-5>
          {{ item.meta?.title ?? item.name }}
        </span>
        <n-icon
          v-if="showCloseIcon && !item.meta?.affix"
          class="icon remove-icon"
          @click.stop="removeItem(item)"
        >
          <close-icon />
        </n-icon>
      </n-button>
    </n-scrollbar>
  </n-el>
</template>

<script lang="ts">
defineComponent({
  name: 'TabBar'
})
</script>

<script lang="ts" setup>
import { NScrollbar } from 'naive-ui'
import { RouteRecordRaw } from 'vue-router'
import { Close as closeIcon, MenuOutline as DefaultIcon } from '@vicons/ionicons5'
import { NIconTransform } from '~/config/icon'
import useVisitedRoutes from '~/store/visited-routes'
import useSetting from '~/store/setting'
import setting from '~/setting'

const { visitedRoutes, removeVisitedRoute } = useVisitedRoutes()

const route = useRoute()
const router = useRouter()
const scrollbar = $ref<typeof NScrollbar | null>(null)
let currentPath = $ref(route.fullPath)

const storeSetting = useSetting()
const { showAffixIcon, showCloseIcon } = $(storeSetting.tabBarSetting)

const handleItemClick = (r: RouteRecordRaw) => {
  handleTabClick(r.path ?? '/')
}

const handleTabClick = (path: string) => {
  if (path !== currentPath) {
    router.push({
      path
    })
  }
}

const removeItem = async (r: RouteRecordRaw) => {
  const prev = await removeVisitedRoute(r, currentPath)
  if (prev !== currentPath) {
    router.push({
      path: prev
    })
  }
}
const clickItemDom = $computed(
  () => document.querySelector(`[data="${setting.projectName}-${currentPath}"]`) as HTMLElement
)

watchPostEffect(() => {
  currentPath = route.fullPath
  if (clickItemDom && scrollbar) {
    // 异步执行
    Promise.resolve().then(() => {
      scrollbar.scrollTo(
        {
          left: clickItemDom.offsetLeft,
          behavior: 'smooth'
        },
        0
      )
    })
  }
})
</script>

<style lang="less" scoped>
.ax-tab-bar-container {
  position: relative;
  height: @tabBarHeight;
  // 4px 是 n-scrollbar 绝对定位 bottom: 4px
  // 保证滚动条不遮盖item
  line-height: calc(@tabBarHeight - 4px);
  box-shadow: var(--box-shadow-1);
  white-space: nowrap;
  padding: 0 8px;
  z-index: 999;
  .tab-item {
    padding: 7px 10px;
    cursor: pointer;
    height: 24px;
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.2s ease-in-out;
      border-radius: 50%;
      padding: 1px;
    }
    .remove-icon {
      width: 0;
      height: 0;
      opacity: 0;
    }
    &:hover {
      .remove-icon {
        width: 14px;
        height: 14px;
        background-color: var(--card-color);
        transform: translateX(5px);
        opacity: 1;
      }
    }
    & + .tab-item {
      margin-left: 10px;
    }
    &.showAffixIcon {
      margin-top: 6.5px;
    }
  }
}
</style>
