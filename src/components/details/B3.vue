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
        t2: 'iPad Air'
      },
      {
        t1: '尺寸',
        t2: '10.5寸'
      },
      {
        t1: '厚度',
        t2: '6.1 mm'
      },
      {
        t1: '重量',
        t2: '456 g'
      },
      {
        t1: '分辨率',
        t2: '2224 x 1668'
      },
      {
        t1: '摄像头',
        t2: '前置：700万<br/>后置：800万'
      },
      {
        t1: '处理器',
        t2: 'A12 仿生'
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
