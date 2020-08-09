<template>
  <div class="detail-page">
    <div class="video">
      <ComponentC></ComponentC>
      <router-link to="/iphonelist">
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
        t2: 'iPhone XR'
      },
      {
        t1: '尺寸',
        t2: '6.1寸'
      },
      {
        t1: '厚度',
        t2: '8.3 mm'
      },
      {
        t1: '重量',
        t2: '194 g'
      },
      {
        t1: '分辨率',
        t2: '1792 x 828'
      },
      {
        t1: '摄像头',
        t2: '前置：700万<br/>后置：1200万'
      },
      {
        t1: '光圈',
        t2: '前置：ƒ/2.2<br/>后置：ƒ/1.8'
      },
      {
        t1: '处理器',
        t2: 'A12 仿生'
      },
      {
        t1: '电池容量',
        t2: '2942 mAh'
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
