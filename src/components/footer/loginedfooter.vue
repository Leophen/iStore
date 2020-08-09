<template>
  <div class="c-footer">
    <ul class="footer-ul" v-for="item in arr" :key="item">
      <router-link :to="item.toUrl">
        <li>
          <img :src="item.imgUrl">
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
import home from '@/assets/home.png'
import sea from '@/assets/list.png'
import shopping from '@/assets/shopping.png'
import me from '@/assets/me.png'

export default {
  data () {
    return {
      arr: [],
      lastToUrl: ''
    }
  },
  methods: {
    getUrl () {
      this.lastToUrl = this.$store.state.lastToUrl
    }
  },
  mounted () {
    this.arr = [
      {
        toUrl: '/loginedhome',
        imgUrl: home,
        title: '首页'
      },
      {
        toUrl: '/loginedalllist',
        imgUrl: sea,
        title: '发现'
      },
      {
        toUrl: '/loginedshoppingbag',
        imgUrl: shopping,
        title: '购物袋'
      },
      {
        toUrl: '/logined',
        imgUrl: me,
        title: '我的'
      }
    ]
  }
}
</script>

<style scoped>
  .c-footer {
    position: fixed;
    z-index: 3;
    width: 100%;
    height: 60px;
    color: #fff;
    background: rgba(49, 49, 49, 0.97);
    bottom: 0px;
    display: flex;
    justify-content: center;
  }
  .footer-ul {
    width: 25%;
    float: left;
    margin-top: 0px;
    transition: 0.1s all ease-in-out;
  }
  .footer-ul:hover,.footer-ul:active,.footer-ul:visited {
    background: rgba(117, 117, 117, 0.4);
  }
  .footer-ul li {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .footer-ul li img {
    width: 24px;
    display: flex;
    align-items: center;
  }
@media screen and (min-width: 767px) {
  .c-footer {
    height: 20px;
  }
  .footer-ul li img {
    width: 8px;
  }
}
@media screen and (min-width: 1200px) {
  .c-footer {
    height: 12px;
  }
  .footer-ul li img {
    width: 5px;
  }
}
</style>
