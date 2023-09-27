
<template>
  <nav>
    <navbar/>
    <router-view/>
  </nav>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
export default {
  components:{
    Navbar
  }
}
</script>


