<template>
  <n-el></n-el>
</template>

<script lang="ts" setup>
const route = useRoute()
const router = useRouter()
const {
  params: { path },
  query
} = route

router.replace({
  path: `/${Array.isArray(path) ? path.join('/') : path}`,
  query
})
</script>

<style lang="less" scoped></style>
