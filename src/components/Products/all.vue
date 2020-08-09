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
import product5 from '@/assets/iPad.jpg'
import product6 from '@/assets/iPadmini.jpg'
import product7 from '@/assets/iPadAir.jpg'
import product8 from '@/assets/ipadpro11.jpg'
import product9 from '@/assets/ipadpro.png'
import product10 from '@/assets/iPhone8.jpg'
import product11 from '@/assets/iPhone8-plus.jpg'
import product12 from '@/assets/iPhoneX.jpg'
import product13 from '@/assets/iPhoneXr.jpg'
import product14 from '@/assets/iPhoneXs.jpg'
import product15 from '@/assets/iPhoneXs-Max.jpg'
import product16 from '@/assets/Airpodsr.png'
import product17 from '@/assets/applepencil.jpg'
import product18 from '@/assets/applewatch3.jpg'
import product19 from '@/assets/applewatch4.png'
import product20 from '@/assets/homepod.jpg'
import product21 from '@/assets/beats3.jpg'

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
      },
      {
        toUrl: '/detailb1',
        imgUrl: product5,
        title: 'iPad'
      },
      {
        toUrl: '/detailb2',
        imgUrl: product6,
        title: 'iPad mini'
      },
      {
        toUrl: '/detailb3',
        imgUrl: product7,
        title: 'iPad Air'
      },
      {
        toUrl: '/detailb4',
        imgUrl: product8,
        title: 'iPad Pro 11寸'
      },
      {
        toUrl: '/detailb5',
        imgUrl: product9,
        title: 'iPad Pro 12.9寸'
      },
      {
        toUrl: '/detailc1',
        imgUrl: product10,
        title: 'iPhone 8'
      },
      {
        toUrl: '/detailc2',
        imgUrl: product11,
        title: 'iPhone 8 Plus'
      },
      {
        toUrl: '/detailc3',
        imgUrl: product12,
        title: 'iPhone X'
      },
      {
        toUrl: '/detailc4',
        imgUrl: product13,
        title: 'iPhone Xr'
      },
      {
        toUrl: '/detailc5',
        imgUrl: product14,
        title: 'iPhone Xs'
      },
      {
        toUrl: '/detailc6',
        imgUrl: product15,
        title: 'iPhone Xs Max'
      },
      {
        toUrl: '/detaild1',
        imgUrl: product16,
        title: 'AirPods 2'
      },
      {
        toUrl: '/detaild2',
        imgUrl: product17,
        title: 'Apple Pencil 2'
      },
      {
        toUrl: '/detaild3',
        imgUrl: product18,
        title: 'Apple Watch 3'
      },
      {
        toUrl: '/detaild4',
        imgUrl: product19,
        title: 'Apple Watch 4'
      },
      {
        toUrl: '/detaild5',
        imgUrl: product20,
        title: 'HomePod'
      },
      {
        toUrl: '/detaild6',
        imgUrl: product21,
        title: 'Beats Pro'
      }]
  }
}
</script>
<style scoped>
  @import 'style.css'
</style>
<style scoped>
  .c-div {
    top: 45px;
  }
  .choiced {
    display: none;
    left: 0;
  }
  @media screen and (min-width: 767px) {
    .c-div {
      top: 30px;
    }
  }
  @media screen and (min-width: 1200Px) {
    .c-div {
      top: 15px;
    }
    .c-items {
      width: 100%;
      float: left;
      margin-top: 0;
      margin-left: 0px;
    }
    .c-items li {
      width: 300px;
      padding: 5px 0;
      border-bottom: 1px solid rgba(117, 117, 117, 0.2);
    }
    .c-items li img {
      width: 40px;
      height: 40px;
      margin-left: 0px;
      position: absolute;
      left: 73px;
    }
    .c-items li img:hover {
      width: 50px;
      height: 50px;
      left: 68px;
    }
    .c-items li p {
      margin-top: 0px;
      margin-left: 70px;
    }
  }
</style>
