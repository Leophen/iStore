<template>
  <div class="home-page">
    <v-header></v-header>
    <v-class></v-class>
    <v-products></v-products>
    <c-footer></c-footer>
  </div>
</template>

<script>
import Header from '@/components/header/'
import Class from '@/components/class/'
import Products from '@/components/Products/Macbook'
import cFooter from '@/components/footer/loginedfooter.vue'

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
    'c-footer': cFooter
  }
}
</script>

<style scoped>

</style>
