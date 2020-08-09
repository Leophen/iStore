<template>
  <div class="home-page">
    <v-header></v-header>
    <v-class></v-class>
    <v-products></v-products>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Header from '@/components/header/'
import Class from '@/components/class/'
import Products from '@/components/Products/Macbook'
import Footer from '@/components/footer/index.vue'

export default {
  data () {
    return {

    }
  },
  mounted () {

  },
  components: {
    'v-header': Header,
    'v-class': Class,
    'v-products': Products,
    'v-footer': Footer
  }
}
</script>

<style scoped>

</style>
