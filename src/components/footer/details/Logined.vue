<template>
  <div class="div">
    <v-header></v-header>
    <p class="info"><span>·</span>已登录</p>
    <router-link to="/loginform">
      <img class="apple" src="@/assets/apple.png">
    </router-link>
    <c-footer></c-footer>
  </div>
</template>

<script>
import Header from '@/components/header/'
import cFooter from '@/components/footer/loginedfooter.vue'
export default {
  name: 'logined',
  data () {
    return {

    }
  },
  methods: {

  },
  components: {
    'v-header': Header,
    'c-footer': cFooter
  }
}
</script>

<style scoped>
  @import 'style.css'
</style>
<style scoped>
  .div {
    background: #000;
  }
  .apple {
    width: 80px;
    height: 80px;
    margin-top: 120px;
    cursor: pointer;
  }
  .apple:hover {
    width: 100px;
    height: 100px;
  }
  .info {
    color: #fff;
    background: #2f2f2f;
  }
  .info span {
    color: #62c555;
  }
@media screen and (min-width: 1200px) {
  .apple {
    width: 30px;
    height: 30px;
    margin-top: 50px;
    transition: 0.3s all ease-in-out;
  }
  .apple:hover {
    transform: scale(0.2,0.2);
    margin-top: 15px;
  }
}
</style>
