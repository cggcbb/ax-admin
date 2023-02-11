<template>
  <n-notification-provider>
    <n-message-provider>
      <n-config-provider :theme="theme" :themeOverrides="themeOverrides">
        <n-loading-bar-provider>
          <n-dialog-provider>
            <router-view />
          </n-dialog-provider>
        </n-loading-bar-provider>
      </n-config-provider>
    </n-message-provider>
  </n-notification-provider>
</template>

<script lang="ts" setup>
import { isDark } from '~/composables'
import useSetting from './store/setting';
const theme = computed(() => isDark.value ? darkTheme : null)

const setting = useSetting()

const { themeOverrides } = toRefs(setting)
</script>
