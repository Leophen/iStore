<template>
  <div class="home-page">
    <v-header></v-header>
    <v-products></v-products>
    <c-footer></c-footer>
  </div>
</template>

<script>
import Header from '@/components/header/'
import Products from '@/components/Products/all'
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
    'v-products': Products,
    'c-footer': cFooter
  }
}
</script>

<style scoped>

</style>
