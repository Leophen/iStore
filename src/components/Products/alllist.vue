<template>
  <div class="home-page">
    <v-header></v-header>
    <v-products></v-products>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Header from '@/components/header/'
import Products from '@/components/Products/all'
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
    'v-products': Products,
    'v-footer': Footer
  }
}
</script>

<style scoped>

</style>
