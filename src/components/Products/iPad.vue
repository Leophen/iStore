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
import product1 from '@/assets/iPad.jpg'
import product2 from '@/assets/iPadmini.jpg'
import product3 from '@/assets/iPadAir.jpg'
import product4 from '@/assets/ipadpro11.jpg'
import product5 from '@/assets/ipadpro.png'

export default {
  data () {
    return {
      arrList: []
    }
  },
  mounted () {
    this.arrList = [
      {
        toUrl: '/detailb1',
        imgUrl: product1,
        title: 'iPad'
      },
      {
        toUrl: '/detailb2',
        imgUrl: product2,
        title: 'iPad mini'
      },
      {
        toUrl: '/detailb3',
        imgUrl: product3,
        title: 'iPad Air'
      },
      {
        toUrl: '/detailb4',
        imgUrl: product4,
        title: 'iPad Pro 11寸'
      },
      {
        toUrl: '/detailb5',
        imgUrl: product5,
        title: 'iPad Pro 12.9寸'
      }]
  }
}
</script>
<style scoped>
  @import 'style.css'
</style>
<style scoped>
  .choiced {
    left: 25%;
  }
</style>
