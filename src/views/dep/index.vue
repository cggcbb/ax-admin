<template>
  <n-space vertical>
    <n-card v-for="item of renderList" :key="item.title" :title="item.title" :segmented="true" size="small">
      <n-descriptions :column="item.column" label-placement="left" bordered size="medium"
        :label-style="{ fontWeight: 700, fontSize: '16px', width: item.width, color: 'var(--primary-color)' }">
        <n-descriptions-item v-for="dep of item.depList" :key="dep.label">
          <template #label>
            {{ dep.label }}
          </template>
          {{ dep.value }}
        </n-descriptions-item>
      </n-descriptions>
    </n-card>
  </n-space>
</template>

<script lang="ts" setup>
import packageData from '../../../package.json'

const { dependencies, devDependencies } = packageData

interface IPackageItem {
  label: string,
  value: string
}

const renderList = reactive([
  {
    depList: reactive<IPackageItem[]>([]),
    title: '依赖',
    column: 3,
    width: '20%'
  },
  {
    depList: reactive<IPackageItem[]>([]),
    title: '开发依赖',
    column: 2,
    width: '30%'
  }
])

watchPostEffect(() => {
  const depValues = Object.values(dependencies)
  Object.keys(dependencies).map((item, index) => {
    renderList[0].depList.push({
      label: item,
      value: depValues[index]
    })
  })

  const devDepValues = Object.values(devDependencies)
  Object.keys(devDependencies).map((item, index) => {
    renderList[1].depList.push({
      label: item,
      value: devDepValues[index]
    })
  })
})
</script>
