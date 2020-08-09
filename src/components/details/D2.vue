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
        t2: 'Apple Pencil 2'
      },
      {
        t1: '长度',
        t2: '166mm'
      },
      {
        t1: '重量',
        t2: '20.7 g'
      },
      {
        t1: '新增',
        t2: '触碰感应平面'
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
