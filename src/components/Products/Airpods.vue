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
import product1 from '@/assets/Airpodsr.png'
import product2 from '@/assets/applepencil.jpg'
import product3 from '@/assets/applewatch3.jpg'
import product4 from '@/assets/applewatch4.png'
import product5 from '@/assets/homepod.jpg'
import product6 from '@/assets/beats3.jpg'

export default {
  data () {
    return {
      arrList: []
    }
  },
  mounted () {
    this.arrList = [
      {
        toUrl: '/detaild1',
        imgUrl: product1,
        title: 'AirPods 2'
      },
      {
        toUrl: '/detaild2',
        imgUrl: product2,
        title: 'Apple Pencil 2'
      },
      {
        toUrl: '/detaild3',
        imgUrl: product3,
        title: 'Apple Watch 3'
      },
      {
        toUrl: '/detaild4',
        imgUrl: product4,
        title: 'Apple Watch 4'
      },
      {
        toUrl: '/detaild5',
        imgUrl: product5,
        title: 'HomePod'
      },
      {
        toUrl: '/detaild6',
        imgUrl: product6,
        title: 'Beats Pro'
      }]
  }
}
</script>
<style scoped>
  @import 'style.css'
</style>
<style scoped>
  .choiced {
    left: 75%;
  }
</style>
