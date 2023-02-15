<template>
  <section>
    <n-grid x-gap="12" y-gap="12" cols="1 m:2 l:4" responsive="screen">
      <n-gi v-for="(item, index) of albumList" :key="index">
        <album-item :data="item">
          <template #content="{ content }">
            <span> {{ content.one }} </span>
            <span> {{ content.two }} </span>
          </template>
        </album-item>
      </n-gi>
    </n-grid>
    <n-grid mt-10px>
      <n-gi :span="24">
        <china-map-item />
      </n-gi>
    </n-grid>
    <n-grid mt-10px x-gap="10">
      <n-gi :span="12">
        <deformation-chart-item />
      </n-gi>
      <n-gi :span="12">
        <maple-item></maple-item>
      </n-gi>
    </n-grid>
  </section>
</template>

<script lang="ts">
defineComponent({
  name: 'WorkBench'
})
</script>

<script setup lang="ts">
import { GET_ALBUM_DATA_LIST } from '~/api/url'
import { IAlbumItem, Result } from '~/types/common'
import http from '~/utils/http'

const albumList = ref<IAlbumItem[]>([])

const getAlbumDataList = async () => {
  const res = await http.get<null, Result<IAlbumItem[]>>(GET_ALBUM_DATA_LIST)
  albumList.value = Object.freeze(res.data) as IAlbumItem[]
}

onMounted(async () => {
  await getAlbumDataList()
})

</script>

<style lang="less" scoped>

</style>
