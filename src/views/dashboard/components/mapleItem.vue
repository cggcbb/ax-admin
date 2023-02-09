<template>
  <n-card :content-style="{ padding: '10px' }" :header-style="{ padding: '5px 10px' }" :segmented="true">
    <template #header>
      <n-skeleton text v-if="loading" />
      <template v-else>
        <gradient-text font-size-9 mr-20px>
          最后，听首 &lt;枫&gt; 吧 ...
        </gradient-text>
        <navbar-music-icon :size="18" translate-y-3 />
      </template>
    </template>
    <template #default>
      <n-skeleton text v-if="loading" :repeat="16" />
      <template v-else>
        <section h420px overflow-auto>
          <gradient-text class="lyric" gradient="linear-gradient(90deg, #199fb7 0%, #ff668f 50%, #d38f45 100%)">
            <article>
              <p>作詞：宋健彰(彈頭)</p>
              <p>作曲：周杰倫</p>
            </article>
            <article>
              <p>烏雲在我們心裏擱下一塊陰影</p>
              <p>我聆聽沉寂已久的心情</p>
              <p>清晰透明 就像美麗的風景</p>
              <p>總在回憶裏才看的清</p>
            </article>
            <article>
              <p>被傷透的心能不能夠繼續愛我</p>
              <p>我用力牽起沒溫度的雙手</p>
              <p>過往溫柔 已經被時間上鎖</p>
              <p>只剩揮散不去的難過</p>
            </article>
            <article>
              <p>緩緩飄落的楓葉像思念</p>
              <p>我點燃燭火溫暖歲末的秋天</p>
              <p>極光掠奪天邊</p>
              <p>北風掠過想你的容顏</p>
              <p>我把愛燒成了落葉</p>
              <p>卻換不回熟悉的那張臉</p>
            </article>
            <article>
              <p>緩緩飄落的楓葉像思念</p>
              <p>為何挽回要趕在冬天來之前</p>
              <p>愛你穿越時間</p>
              <p>兩行來自秋末的眼淚</p>
              <p>讓愛滲透了地面</p>
              <p>我要的只是你在我身邊</p>
            </article>
            <article>
              <p>被傷透的心能不能夠繼續愛我</p>
              <p>我用力牽起沒溫度的雙手</p>
              <p>過往溫柔已經被時間上鎖</p>
              <p>只剩揮散不去的難過</p>
            </article>

            <article>
              <p>在山腰間飄逸的紅雨</p>
              <p>隨著北風凋零 我輕輕搖曳風鈴</p>
              <p>想 喚醒被遺棄的愛情</p>
              <p>雪花已鋪滿了地</p>
              <p>深怕窗外楓葉已結成冰</p>
            </article>
            <article>
              <p>緩緩飄落的楓葉像思念</p>
              <p>我點燃燭火溫暖歲末的秋天</p>
              <p>極光掠奪天邊</p>
              <p>北風掠過想你的容顏</p>
              <p>我把愛燒成了落葉</p>
              <p>卻換不回熟悉的那張臉</p>
            </article>
            <article>
              <p>緩緩飄落的楓葉像思念</p>
              <p>為何挽回要趕在冬天來之前</p>
              <p>愛你穿越時間</p>
              <p>兩行來自秋末的眼淚</p>
              <p>讓愛滲透了地面</p>
              <p>我要的只是你在我身邊</p>
            </article>
          </gradient-text>
        </section>
      </template>
    </template>
  </n-card>
</template>

<script setup lang="ts">
let loading = $ref(true)

setTimeout(() => {
  loading = false
}, 1000)
</script>

<style lang="less" scoped>
.lyric {
  display: flex;
  flex-direction: column;
  align-items: center;

  article {
    margin: 12px 0;

    p {
      margin: 0;
      text-align: center;

    }
  }
}
</style>
