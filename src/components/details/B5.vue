<template>
  <div class="detail-page">
    <div class="video">
      <ComponentB></ComponentB>
      <router-link to="/ipadlist">
        <div class="video-back">&lt;</div>
      </router-link>
    </div>
    <div class="data">
      <ul class="items" v-for="item in arr" :key="item">
        <li class="item-a">{{item.t1}}</li>
        <li class="item-b" v-html="item.t2"></li>
      </ul>
    </div>
    <router-link to="/ipadlist">
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
        t2: 'iPad Pro'
      },
      {
        t1: '尺寸',
        t2: '12.9寸'
      },
      {
        t1: '厚度',
        t2: '5.9 mm'
      },
      {
        t1: '重量',
        t2: '631 g'
      },
      {
        t1: '分辨率',
        t2: '2732 x 2048'
      },
      {
        t1: '摄像头',
        t2: '前置：120万<br/>后置：1200万'
      },
      {
        t1: '处理器',
        t2: 'A12X'
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
