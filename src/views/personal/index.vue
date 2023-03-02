<template>
  <n-el>
    <div>
      <n-grid col="24" x-gap="10" y-gap="10" item-responsive>
        <n-gi span="24 1140:8">
          <personal-user :data="personalUserData" />
        </n-gi>
        <n-gi span="24 1140:16">
          <personal-hero :data="personalHerosData" />
        </n-gi>
      </n-grid>
    </div>
    <div mt-10px>
      <n-grid>
        <n-gi span="24">
          <personal-article :data="personalArticleData" />
        </n-gi>
      </n-grid>
    </div>
  </n-el>
</template>

<script lang="ts">
defineComponent({
  name: 'Personal'
})
</script>

<script lang="ts" setup>
import { GET_PERSONAL } from '~/api/url'
import { IPersonal, IPersonalUser, IPersonalHero, IPersonalArticle } from '~/types/common'
import { get } from '~/utils/http'

let personalUserData = ref<IPersonalUser>()
let personalHerosData = ref<IPersonalHero[]>()
let personalArticleData = ref<IPersonalArticle[]>()

onMounted(async () => {
  const res = await get<IPersonal>(GET_PERSONAL)
  personalUserData.value = res.data.user
  personalHerosData.value = res.data.heros
  personalArticleData.value = res.data.article
})
</script>

<style lang="less" scoped></style>
