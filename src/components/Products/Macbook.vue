<template>
  <div class="c-div">
    <div class="choiced"></div>
    <ul class="c-items" v-for="item in arrList" :key="item">
      <router-link :to="item.toUrl">
        <li>
          <img :src="item.imgUrl"/>
          <p>{{item.title}}</p>
          <div></div>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
import product1 from '@/assets/MacBook-12.jpg'
import product2 from '@/assets/MacBookAir-13.png'
import product3 from '@/assets/MacBookPro-13.jpg'
import product4 from '@/assets/MacBookPro-15.jpg'

export default {
  data () {
    return {
      arrList: []
    }
  },
  mounted () {
    this.arrList = [
      {
        toUrl: '/detaila1',
        imgUrl: product1,
        title: 'MacBook'
      },
      {
        toUrl: '/detaila2',
        imgUrl: product2,
        title: 'MacBook Air'
      },
      {
        toUrl: '/detaila3',
        imgUrl: product3,
        title: 'MacBook Pro 13寸'
      },
      {
        toUrl: '/detaila4',
        imgUrl: product4,
        title: 'MacBook Pro 15寸'
      }]
  }
}
</script>
<style scoped>
  @import 'style.css'
</style>
<style scoped>
  .choiced {
    left: 0;
  }
</style>
