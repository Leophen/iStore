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
import product1 from '@/assets/iPhone8.jpg'
import product2 from '@/assets/iPhone8-plus.jpg'
import product3 from '@/assets/iPhoneX.jpg'
import product4 from '@/assets/iPhoneXr.jpg'
import product5 from '@/assets/iPhoneXs.jpg'
import product6 from '@/assets/iPhoneXs-Max.jpg'

export default {
  data () {
    return {
      arrList: []
    }
  },
  mounted () {
    this.arrList = [
      {
        toUrl: '/detailc1',
        imgUrl: product1,
        title: 'iPhone 8'
      },
      {
        toUrl: '/detailc2',
        imgUrl: product2,
        title: 'iPhone 8 Plus'
      },
      {
        toUrl: '/detailc3',
        imgUrl: product3,
        title: 'iPhone X'
      },
      {
        toUrl: '/detailc4',
        imgUrl: product4,
        title: 'iPhone Xr'
      },
      {
        toUrl: '/detailc5',
        imgUrl: product5,
        title: 'iPhone Xs'
      },
      {
        toUrl: '/detailc6',
        imgUrl: product6,
        title: 'iPhone Xs Max'
      }]
  }
}
</script>
<style scoped>
  @import 'style.css'
</style>
<style scoped>
  .choiced {
    left: 50%;
  }
</style>
