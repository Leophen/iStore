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
        t2: 'MacBook Air'
      },
      {
        t1: '尺寸',
        t2: '13.3寸'
      },
      {
        t1: '厚度',
        t2: '15.6 mm'
      },
      {
        t1: '分辨率',
        t2: '2560 x 1600'
      },
      {
        t1: '色域',
        t2: '广色域 ( P3 )'
      },
      {
        t1: '处理器',
        t2: '双核<br/>1.6GHz Intel Core i5'
      },
      {
        t1: '显卡',
        t2: 'Intel GMA GHD 617'
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
