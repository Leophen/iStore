<template>
  <div class="div">
    <v-header></v-header>
    <p class="info"><span>·</span>未登录</p>
    <form class="form">
      <div class="title">
        <p>登录</p>
        <p @click="()=>{this.$router.push('/regform')}">还没有账号,立即注册</p>
      </div>
      <div class="form-username">
        <img src="@/assets/username.png">
        <input type="text" placeholder="用户名" v-model="name" autocomplete="true">
      </div>
      <div class="form-password">
        <img src="@/assets/password.png">
        <input type="password" placeholder="密码" v-model="password">
      </div>
      <div class="form-button">
        <button type="button" @click="submit()">登录</button>
      </div>
    </form>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Header from '@/components/header/'
import Footer from '@/components/footer/'
export default {
  name: 'LoginForm',
  data () {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    submit () {
      if (localStorage.getItem('name') === this.name && localStorage.getItem('password') === this.password) {
        this.$router.push({ name: 'Logined' })
      } else {
        alert('账号密码错误')
      }
    }
  },
  components: {
    'v-header': Header,
    'v-footer': Footer
  }
}
</script>

<style scoped>
  @import 'style.css'
</style>
<style scoped>
  .info span {
    color: #ed6c60;
  }
</style>
