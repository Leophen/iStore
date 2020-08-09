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
        t2: 'Beats Pro'
      },
      {
        t1: '音质',
        t2: '录音室级别'
      },
      {
        t1: '功能',
        t2: '智能降噪'
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
<!-- <style scoped>
  .detail-page {
    padding-bottom: 400px;
  }
</style> -->
