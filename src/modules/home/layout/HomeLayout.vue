<template>
  <Nav :selectedCinema="selectedCinema" />
  <Select />
  <router-view v-slot="{ Component, route }" class="p-5">
    <keep-alive>
      <component :is="Component" :key="route.name" />
    </keep-alive>
  </router-view>

  <Footer :selectedCinema="selectedCinema" />
</template>

<script>
import Nav from "../components/navBar.vue";
import Footer from "../components/Footer.vue";
import Select from "../components/selectCine.vue";
export default {
  name: "Home",
  components: {
    Nav,
    Footer,
    Select,
  },
  data() {
    return {};
  },

  methods: {},
};
</script>
