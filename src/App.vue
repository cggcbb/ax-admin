<template>
  <n-notification-provider>
    <n-message-provider>
      <n-config-provider :theme="theme">
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
const theme = computed(() => isDark.value ? darkTheme : null)
</script>
