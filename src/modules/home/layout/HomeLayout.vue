<template>
  <Nav />
  
  <router-view></router-view>

  <Footer />
</template>

<script>
import Nav from "../components/navBar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "MovieCards",
  components: {
    Nav,
    Footer,
  },
  data() {
    return {
    };
  },
};
</script>
