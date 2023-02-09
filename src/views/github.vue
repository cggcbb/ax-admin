<template>
  <n-card p-5>
    <n-grid>
      <n-gi :span="10" flex>
        <n-input v-model:value="username" mr-6 placeholder="输入用户名查询" />
        <n-button @click="send" :loading="loading">send to github</n-button>
      </n-gi>
    </n-grid>
    <n-grid v-if="user" my-5>
      <n-gi :span="6">
        <n-avatar :src="user.avatar_url" :size="100"></n-avatar>
      </n-gi>
    </n-grid>
    <n-grid v-if="user">
      <n-gi :span="24">
        <n-gradient-text gradient="linear-gradient(90deg, #04b9ff 0%, #ffdb5c 40%, #e690d1 100%)">
          <pre>
          {{ user }}
         </pre>
        </n-gradient-text>
      </n-gi>
    </n-grid>
  </n-card>
</template>
<script lang="ts" setup>
import http from '~/utils/http'

let user: any = $ref(null)
let loading = $ref(false)

const username = $ref('AnxGGYw')

const message = useMessage()

const send = async () => {
  loading = true
  try {
    const result: any = await http.get(`https://api.github.com/users/${username}`)
    user = result
    message.success(`pull github success, username: ${result.login}`, {
      duration: 4000
    })
  } catch (e: any) {
    loading = false
  } finally {
    loading = false
  }
}


</script>

<style lang="less">

</style>
