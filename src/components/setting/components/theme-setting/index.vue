<template>
  <section class="theme-setting-container" :class="{ 'theme-setting-active': checked }">
    <div class="theme-setting-item">
      <div class="left"></div>
      <div class="right">
        <div class="right-top"></div>
        <div class="right-bottom"></div>
      </div>
    </div>
    <div v-if="text" class="text">{{ text }}</div>
  </section>
</template>

<script lang="ts">
export default defineComponent({
  name: 'ThemeSetting',
  props: {
    leftBg: {
      type: String,
      default: '#000000'
    },
    rightTopBg: {
      type: String,
      default: '#ff0000'
    },
    rightBottomBg: {
      type: String,
      default: '#f5f5f5'
    },
    text: {
      type: String,
      default: null
    },
    checked: {
      type: Boolean,
      default: false
    },
  },
})
</script>

<style lang="less" scoped>
@border-radius: 4px;

.theme-setting-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 50px;
  height: 80px;
  margin: auto;
  border-radius: @border-radius;

  .theme-setting-item {
    display: flex;
    width: 100%;
    height: 40px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    border-radius: @border-radius;
    cursor: pointer;

    .left {
      width: 30%;
      border-top-left-radius: @border-radius;
      border-bottom-left-radius: @border-radius;
      background-size: cover;
      background-color: v-bind(leftBg)
    }

    .right {
      display: flex;
      flex: 1;
      flex-direction: column;
      border-top-right-radius: @border-radius;
      border-bottom-right-radius: @border-radius;

      .right-top {
        height: 20%;
        border-top-right-radius: @border-radius;
        background-color: v-bind(rightTopBg);
      }

      .right-bottom {
        flex: 1;
        border-bottom-right-radius: @border-radius;
        background-color: v-bind(rightBottomBg);
      }
    }
  }

  .text {
    font-size: 12px;
    text-align: center;
  }
}

.theme-setting-active::after {
  content: '';
  display: block;
  margin: 0 auto;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgb(3, 190, 50);
  text-align: center;
}
</style>
