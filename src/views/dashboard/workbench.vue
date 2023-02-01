<template>
  <section>
    <n-grid x-gap="12" y-gap="12" cols="1 m:2 l:4" responsive="screen">
      <n-gi>
        <div class="light-green" />
      </n-gi>
      <n-gi>
        <div class="green" />
      </n-gi>
      <n-gi>
        <div class="light-green" />
      </n-gi>
      <n-gi>
        <div class="green" />
      </n-gi>
    </n-grid>
  </section>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.light-green {
  height: 180px;
  background-color: rgb(0, 101, 128, .8);
}

.green {
  height: 180px;
  background-color: rgba(160, 59, 154, 0.8);
}
</style>
