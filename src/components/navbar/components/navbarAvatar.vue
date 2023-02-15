<template>
  <n-el class="avatar-wrapper" flex cursor-pointer py-0 pl-10px pr-18px>
    <n-dropdown :show-arrow="true" trigger="hover" :options="options" size="large" @select="handleSelect">
      <div flex-center-v>
        <n-avatar size="small" bordered round src="/src/assets/avatar.png"></n-avatar>
        <n-gradient-text type="info" ml-6px mr-4px>{{ nickName }}</n-gradient-text>
      </div>
    </n-dropdown>
  </n-el>
</template>

<script lang="ts">
defineComponent({
  name: 'NavBarAvatar'
})
</script>

<script setup lang="ts">
import { LogInOutline, PersonOutline } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { sleep } from '~/utils'

const nickName = ref('Mine Mine')

const options = [
  {
    label: '个人中心',
    key: 'personal-center',
    icon: () => h(NIcon, {
      size: 20
    }, {
      default: () => h(PersonOutline)
    })
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: () => h(NIcon, {
      size: 20
    }, {
      default: () => h(LogInOutline),
    })
  },
]

const message = useMessage()
const router = useRouter()
const dialog = useDialog()

const logout = () => {
  const instance = dialog.warning({
    title: '提示',
    content: '确认退出当前账号？',
    positiveText: '退出',
    negativeText: 'No',
    onPositiveClick: () => {
      instance.loading = true
      return new Promise(resolve => {
        sleep(1000).then(() => {
          // TODO logout的一些逻辑
          router.push({
            path: '/login'
          })
          resolve(null)
        })
      })
    }
  })
}

const handleSelect = (key: string) => {
  switch (key) {
    case 'personal-center':
      message.warning('click personal center')
      break
    case 'logout':
      logout()
      break
    default:
  }
}
</script>

<style lang="less" scoped>
.avatar-wrapper:hover {
  cursor: pointer;
  color: var(--primary-color);
}
</style>
