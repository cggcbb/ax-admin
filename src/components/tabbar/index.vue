<template>
  <n-el class="ax-tab-bar-container">
    <n-scrollbar ref="scrollbar" x-scrollable>
      <!-- n-button  绑定了自定义data -->
      <n-button
        class="tab-item"
        v-for="item of visitedRoutes"
        :key="item.path"
        :type="currentPath === item.path ? 'primary' : 'default'"
        secondary
        strong
        :data="`${setting.projectName}-${item.path}`"
        @click="handleItemClick(item)"
      >
        <span font-size-5>
          {{ item.meta?.title ?? item.name }}
        </span>
        <n-icon class="icon remove-icon" @click.stop="removeItem(item)">
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
import { Close as closeIcon } from '@vicons/ionicons5'
import useVisitedRoutes from '~/store/visited-routes'
import setting from '~/setting'

const { visitedRoutes, removeVisitedRoute } = useVisitedRoutes()

const route = useRoute()
const router = useRouter()
const scrollbar = $ref<typeof NScrollbar | null>(null)
let currentPath = $ref(route.fullPath)

const handleItemClick = (r: RouteRecordRaw) => {
  handleTabClick(r.path ?? '/')
}
const handleTabClick = (path: string) => {
  router.push({
    path
  })
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
  height: @tabHeight;
  box-shadow: var(--box-shadow-1);
  padding: 8px;
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
  }
}
</style>
