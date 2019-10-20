<template>
  <div class="layout container">
    <Header/>
    <Nav></Nav>
    <slot/>
    <Footer/>
  </div>
</template>

<style>

</style>


<script>
import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer,
    Nav
  }
}
</script>