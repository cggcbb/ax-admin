<template>
  <section>
    <n-grid x-gap="12" y-gap="12" cols="1 m:2 l:4" responsive="screen">
      <n-gi v-for="(item, index) of dataList" :key="index">
        <data-item :data="item">
          <template v-if="index === 0" #content="{ content }">
            <div>
              <div> 较昨日新增：{{ content.data }} </div>
              <div> 上周新增：{{ content.data1 }} </div>
            </div>
          </template>
          <template v-else-if="index === 1" #content="{ content }">
            <div relative>
              <div> 较昨日新增：{{ content.data }} </div>
              <div> 较上周新增：{{ content.data1 }} </div>
            </div>
          </template>
          <template v-else-if="index === 2" #content="{ content }">
            <n-progress type="line" :percentage="content.data" />
          </template>
          <template v-else-if="index === 3" #content="{content}">
            <order-chart></order-chart>
          </template>
        </data-item>
      </n-gi>
    </n-grid>

    <n-grid mt-10px>
      <n-gi :span="24">
        <china-map-item></china-map-item>
      </n-gi>
    </n-grid>
  </section>
</template>

<script setup lang="ts">

import { WaterOutline, PersonAddOutline, AnalyticsOutline, CubeOutline } from '@vicons/ionicons5'

const dataList = [
  {
    title: '今日访问量',
    data: '+1000',
    bottomTitle: '总访问量',
    totalSum: '100万+',
    icon: AnalyticsOutline,
    iconSize: 24,
    content: {
      data: 1104,
      data1: 2933,
    },
  },
  {
    title: '新增用户',
    data: '+500',
    bottomTitle: '总用户量',
    totalSum: '200万+',
    icon: PersonAddOutline,
    iconSize: 22,
    content: {
      data: 700,
      data1: 968,
    },
  },
  {
    title: '当月销售额',
    data: '￥50000',
    bottomTitle: '累计销售额',
    totalSum: '2000万+',
    icon: CubeOutline,
    iconSize: 24,
    content: {
      data: 81,
    },
  },
  {
    title: '当月订单量',
    data: '924笔',
    bottomTitle: '累计订单量',
    totalSum: '1万+',
    icon: WaterOutline,
    iconSize: 24,
    content: {
      data: 80,
      data1: 1088,
    },
  },
]
</script>

<style lang="less" scoped>
.section-china-map {
  .item-right {
    left: 50.3%;
  }

  @media screen and (max-width: 768px) {
    .item-right {
      left: 0
    }
  }
}
</style>
