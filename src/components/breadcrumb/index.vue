<template>
  <n-breadcrumb>
    <transition-group name="breadcrumb">
      <n-breadcrumb-item v-for="item of breadcrumbList" :key="item.key">
        <template #default>
          <n-dropdown
            v-if="item.children?.length"
            :options="item.children"
            @select="handleBreadcrumbSelect"
          >
            <n-el class="trigger">
              {{ item.label }}
              <n-icon :size="14" :component="BreadcrumbIcon" />
            </n-el>
          </n-dropdown>
          <!-- 首页渲染 router-link -->
          <router-link :to="item.path" v-else-if="item.key === 'dashboard'">
            {{ item.label }}
          </router-link>
          <span v-else>{{ item.label }}</span>
        </template>
      </n-breadcrumb-item>
    </transition-group>
  </n-breadcrumb>
</template>

<script setup lang="ts">
import useBreadcrumb from './useBreadcrumb'
import { ChevronDownOutline as BreadcrumbIcon } from '@vicons/ionicons5'

const { breadcrumbList, handleBreadcrumbSelect } = useBreadcrumb()
</script>

<style lang="less" scoped>
.trigger {
  padding: 4px;
  margin: -4px;
  border-radius: inherit;
}
</style>
