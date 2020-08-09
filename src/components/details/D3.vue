<template>
  <div class="detail-page">
    <div class="video">
      <ComponentD></ComponentD>
      <router-link to="/airpodslist">
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
        t2: 'Apple Watch 3'
      },
      {
        t1: '厚度',
        t2: '11.4 mm'
      },
      {
        t1: '芯片',
        t2: 'Apple W2'
      },
      {
        t1: '处理器',
        t2: '双核 S3'
      },
      {
        t1: '续航',
        t2: '18小时'
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
