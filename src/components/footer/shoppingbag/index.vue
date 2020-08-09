<template>
  <div class="shopdiv">
    <v-header></v-header>
    <p class="shopinfo">暂未开放</p>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Header from '@/components/header/'
import Footer from '@/components/footer/index.vue'
export default {
  name: 'shoppingbag',
  data () {
    return {

    }
  },
  methods: {

  },
  components: {
    'v-header': Header,
    'v-footer': Footer
  }
}
</script>

<style scoped>
  .shopdiv {
    width: 100%;
    height: 820px;
    background: #000;
    display: flex;
    justify-content: center;
  }
  .shopinfo {
    width: 100px;
    height: 40px;
    font-size: 16px;
    color: #fff;
    background: #2f2f2f;
    margin-top: 280px;
    text-align: center;
    line-height: 40px;
    border-radius: 20px;
  }
@media screen and (min-width: 767px) {
  .shopinfo {
    margin-top: 220px;
  }
}
@media screen and (min-width: 1200px) {
  .shopinfo {
    width: 50px;
    height: 20px;
    font-size: 8px;
    line-height: 20px;
    margin-top: 80px;
  }
}
</style>
