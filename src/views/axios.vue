<template>
  <div>
    <n-grid>
      <n-gi :span="3">
        <n-button @click="send" :loading="loading">send http to github</n-button>
      </n-gi>
      <n-gi :offset="2">
        <n-avatar :src="avatarSrc" v-show="avatarSrc" :size="100"></n-avatar>
      </n-gi>
    </n-grid>
  </div>
</template>
<script lang="ts" setup>
import http from '~/utils/http'

let avatarSrc = $ref<string | undefined>(undefined)
let loading = $ref(false)

const message = useMessage()

const send = async () => {
  loading = true
  try {
    const result: any = await http.get('https://api.github.com/users/AnxGGYw')
    console.log(result);
    avatarSrc = result.avatar_url
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
<style lang=""></style>
