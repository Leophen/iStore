<template>
  <div class="c-class">
    <ul class="class-ul" v-for="item in arrList" :key="item">
      <router-link :to="item.toUrl">
        <li>
          <img :src="item.imgUrl"/>
          <p>{{item.title}}</p>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
import class1 from '@/assets/MacBook.png'
import class2 from '@/assets/iPad.png'
import class3 from '@/assets/iPhone.png'
import class4 from '@/assets/Airpods.png'

export default {
  data () {
    return {
      arrList: []
    }
  },
  mounted () {
    this.arrList = [
      {
        toUrl: '/',
        imgUrl: class1,
        title: 'MacBook'
      },
      {
        toUrl: '/ipadlist',
        imgUrl: class2,
        title: 'iPad'
      },
      {
        toUrl: '/iphonelist',
        imgUrl: class3,
        title: 'iPhone'
      },
      {
        toUrl: '/airpodslist',
        imgUrl: class4,
        title: '配件'
      }
    ]
  }
}
</script>

<style scoped>
  .c-class {
    position: fixed;
    z-index: 3;
    width: 100%;
    height: 132px;
    color: #757575;
    background: #f3f5f7;
    top: 0px;
    display: flex;
    justify-content: center;
  }
  .class-ul {
    width: 25%;
    margin-top: 42px;
    float: left;
    transition: 0.1s all ease-in-out;
  }
  .class-ul:hover,.class-ul:active,.class-ul:visited {
    background: #e2e2e2;
  }
  .class-ul li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    margin: 0 25px;
  }
  .class-ul li img {
    width: 32px;
    height: 32px;
    padding-top: 20px;
    padding-bottom: 8px;
  }
  .class-ul li p {
    color: #999;
  }
@media screen and (min-width: 767px) {
  .c-class {
    height: 50px;
  }
  .class-ul {
    margin-top: 34px;
  }
  .class-ul li {
    font-size: 8px;
    flex-direction: row;
  }
  .class-ul li img {
    width: 12px;
    height: 12px;
    padding: 0 6px;
  }
  .class-ul li p {
    font-size: 6px;
  }
}
@media screen and (min-width: 1200Px) {
  .c-class {
    height: 30px;
  }
  .class-ul {
    margin-top: 15px;
    padding-top: 2.5px;
  }
  .class-ul li {
    font-size: 5px;
    flex-direction: row;
  }
  .class-ul li img {
    width: 10px;
    height: 10px;
    padding: 0 6px;
  }
}
</style>
