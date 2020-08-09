<template>
  <div class="c-div">
    <ul class="c-items">
      <router-link to="/detail">
        <li v-for="item in arrList" :key="item">
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
        imgUrl: product1,
        title: 'MacBook 12寸'
      },
      {
        imgUrl: product2,
        title: 'MacBook Air 13.3寸'
      },
      {
        imgUrl: product3,
        title: 'MacBook Pro 13.3寸'
      },
      {
        imgUrl: product4,
        title: 'MacBook Pro 15寸'
      }]
  }
}
</script>

<style scoped>
  .c-div {
    position: relative;
    top: 132px;
  }
  .c-items {
    padding: 24px 0;
    background: #fff;
  }
  .c-items li {
    position: relative;
    width: 335px;
    height: 72px;
    margin: 0 auto 24px;
  }
  .c-items li img {
    position: absolute;
    width: 72px;
    height: 72px;
    margin-left: 30px;
    border-radius: 5px;
  }
  .c-items li p {
    line-height: 72px;
    font-size: 15px;
    margin-left: 150px;
    color: #2B333B;
  }
  .c-items li div {
    margin-top: 12px;
    width: 100%;
    height: 1px;
    background: rgba(117, 117, 117, 0.2);
  }
</style>
