<template>
  <Nav />
  
  <router-view></router-view>

  <!-- <n-row>
    <n-col v-for="movie in movies" :key="movie.id" :span="5">
      <n-card class="text-center" :title="movie.name">
        <div class="card-image">
           <img
      :src="
        movie.image
          ? movie.image.secure_url
          : 'https://tradebharat.in/assets/catalogue/img/no-product-found.png'
      "
      class="card-img-top"
      :alt="movie.name"
    />
          <div class="card-text">
            <n-button type="success">Trailer</n-button>
            <n-button type="info" @click="buy()">Comprar</n-button>
          </div>
        </div>
      </n-card>
    </n-col>
  </n-row>   -->

  <Modal title="Iniciar sesión" v-if="showLoginModal"> </Modal>

  <Footer />
</template>

<script>
import Nav from "../components/navBar.vue";
import Footer from "../components/Footer.vue";
import Modal from "../components/Modal.vue";

export default {
  name: "MovieCards",
  components: {
    Nav,
    Footer,
    Modal,
  },
  data() {
    return {
    };
  },
};
</script>
