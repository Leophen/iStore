<template>
  <div class="div">
    <v-header></v-header>
    <p class="info"><span>·</span>注册中</p>
    <form class="form">
      <div class="title">
        <p>注册</p>
        <p @click="()=>{this.$router.back()}">
  已有账号,直接登录</p>
      </div>
      <div class="form-username">
        <img src="@/assets/username.png">
        <input type="text" placeholder="用户名" v-model="name">
      </div>
      <div class="form-password">
        <img src="@/assets/password.png">
        <input type="password" placeholder="密码" v-model="
  password">
      </div>
      <div class="form-confirmpassword">
        <img src="@/assets/confirmpassword.png">
        <input type="password" placeholder="确认密码" v-model="
  passwordRepeart">
      </div>
      <div class="form-button">
        <button type="button" @click="reg()">注册</button>
      </div>
    </form>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Header from '@/components/header/'
import Footer from '@/components/footer/'
export default {
  name: 'RegForm',
  data () {
    return {
      name: '',
      password: '',
      passwordRepeart: ''
    }
  },
  methods: {
    reg () {
      if (this.password === this.passwordRepeart && this.name !== '') {
        localStorage.setItem('name', this.name)
        localStorage.setItem('password', this.password)
        this.$router.push({ name: 'LoginForm' })
      } else {
        alert('两次密码输入不一致')
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
