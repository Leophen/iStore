<template>
  <div class="detail-page">
    <div class="video">
      <ComponentA></ComponentA>
      <router-link to="/">
        <div class="video-back">&lt;</div>
      </router-link>
    </div>
    <div class="data">
      <ul class="items" v-for="item in arr" :key="item">
        <li class="item-a">{{item.t1}}</li>
        <li class="item-b" v-html="item.t2"></li>
      </ul>
    </div>
    <router-link to="/">
      <button>购买</button>
    </router-link>
    <v-footer></v-footer>
  </div>
</template>
<script>
import Footer from '@/components/footer/'
export default {
  data () {
    return {
      arr: []
    }
  },
  mounted () {
    this.arr = [
      {
        t1: '型号',
        t2: 'MacBook Pro'
      },
      {
        t1: '尺寸',
        t2: '15.4寸'
      },
      {
        t1: '厚度',
        t2: '15.5 mm'
      },
      {
        t1: '分辨率',
        t2: '2880 x 1800'
      },
      {
        t1: '色域',
        t2: '广色域 ( P3 )'
      },
      {
        t1: '处理器',
        t2: '八核<br/>2.6GHz Intel Core i9'
      },
      {
        t1: '显卡',
        t2: 'AMD Radeon Pro 555X'
      }
    ]
  },
  components: {
    'v-footer': Footer
  }
}
</script>
<style scoped>
  @import 'style.css'
</style>
