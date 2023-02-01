<template>
  <n-config-provider :theme="theme">
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-el>
          <n-layout has-sider>
            <n-layout-sider bordered collapse-mode="width" :collapsed-width="64" :width="setting.menuWidth"
              :collapsed="setting.collapsed" class="ax-layout-sider">
              <Logo></Logo>
              <Menu></Menu>
            </n-layout-sider>
            <n-layout>
              <navbar></navbar>
              <Main></Main>
            </n-layout>
          </n-layout>
        </n-el>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>


<script lang="ts" setup>
import { isDark } from '~/composables'
import useSetting from '~/store/setting'

const setting = useSetting()
const theme = computed(() => isDark.value ? darkTheme : null)

window.$message = useMessage()
</script>


<style lang="less" scoped>
.ax-layout-sider {
  box-shadow: 3px 0 5px rgba(133, 133, 133, .5);
}
</style>
