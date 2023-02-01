<template>
  <section>
    <n-grid x-gap="12" y-gap="12" cols="1 m:2 l:4" responsive="screen">
      <n-gi v-for="(item, index) of dataList" :key="index">
        <data-item :data="item">
          <template v-if="index === 0" #extra="{ extra }">
            <div class="margin-top-lg">
              <div> 较昨日新增：{{ extra.data }} </div>
              <div class="margin-top-sm"> 上周新增：{{ extra.data1 }} </div>
            </div>
          </template>
          <template v-else-if="index === 1" #extra="{ extra }">
            <div class="margin-top" style="position: relative">
              <div> 较昨日新增：{{ extra.data }} </div>
              <div class="margin-top-sm"> 较上周新增：{{ extra.data1 }} </div>
              <div class="stack-avatar-wrapper">
                <!-- <StackAvatar /> -->
              </div>
            </div>
          </template>
          <template v-else-if="index === 2" #extra="{ extra }">
            <n-progress type="line" :percentage="extra.data" />
          </template>
          <template v-else-if="index === 3" #extra="{extra}">
            <div class="margin-top-lg">
              <div> 较昨日新增：{{ extra.data }} </div>
              <div class="margin-top-sm"> 上周新增：{{ extra.data1 }} </div>
            </div>
          </template>
        </data-item>
      </n-gi>
    </n-grid>
  </section>
</template>

<script setup lang="ts">

const dataList = [
  {
    title: '今日访问量',
    data: '+1000',
    bottomTitle: '总访问量',
    totalSum: '100万+',
    iconClass: 'data-chart',
    extra: {
      data: 1000,
      data1: 2350,
    },
  },
  {
    title: '新增用户',
    data: '+500',
    bottomTitle: '总用户量',
    totalSum: '200万+',
    iconClass: 'data-people',
    extra: {
      data: 700,
      data1: 968,
    },
  },
  {
    title: '当月销售额',
    data: '￥50000',
    bottomTitle: '累计销售额',
    totalSum: '2000万+',
    iconClass: 'data-money',
    extra: {
      data: 80,
    },
  },
  {
    title: '当月订单量',
    data: '189笔',
    bottomTitle: '累计订单量',
    totalSum: '1万+',
    iconClass: 'data-order',
    extra: {
      data: 80,
      data1: 1088,
    },
  },
]
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
