<template>
  <Nav/>

  <n-row>
    <n-col v-for="movie in movies" :key="movie.id" :span="5">
      <n-card class="text-center" :title="movie.title">
        <div class="card-image">
          <img :src="getImage(movie.poster_path)" />
          <div class="card-text">
            <n-button type="success">Trailer</n-button>
            <n-button type="info" @click="buy()">Comprar</n-button>
          </div>
        </div>
      </n-card>
    </n-col>
  </n-row>  

  <Modal title="Iniciar sesión" v-if="showLoginModal"> </Modal>

  <Footer />
</template>

<script>
import Nav from "../components/navBar.vue";
import axios from "axios";
import Footer from "../components/Footer.vue";
import Modal from "../components/Modal.vue";

export default {
  name: "MovieCards",
  components: {
    Nav,
    Footer,
    Modal
  },
  data() {
    return {
      movies: [],
      apiKey: "f40d327254d74aec7e161062db22582b",
      showLoginModal: false,
    };
  },
    methods: {
    getImage(path) {
      return path ? `https://image.tmdb.org/t/p/w300${path}` : "";
    },
    
    buy(){
      this.showLoginModal = !this.showLoginModal;
    }
    
  },
  async mounted() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=es-MX&page=1`
      )
      .then((response) => {
        this.movies = response.data.results;
      })
      .catch((error) => console.error(error));
  },
};
</script>

<style scoped>
.n-card:hover {
  border-radius: 8px;
  box-shadow: 4px 14px 14px #212530;
  background: #949494;
  font-family: "Poppins", sans-serif !important;
  font-weight: 800;
}

.card-image {
  position: relative;
}
.card-image:hover {
  animation: moveUpDown 3s infinite;
}

.card-text {
  position: absolute;
  top: 100.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  gap: 8%;
  margin-top: 15px auto;
  width: 80%;
}

.n-card:hover .card-text {
  opacity: 1;
  font-family: "Poppins", sans-serif !important;
  font-weight: 800;
  border-radius: 8px;
}

.n-col {
  margin: 2%;
}

.n-button {
  height: 4vh;
  font-family: "Poppins", sans-serif !important;
  font-weight: 800;
}
.card-image img {
  border-radius: 8px;
  width: 100%;
  height: 60vh; /* ajusta el valor de altura a tu gusto */
  object-fit: cover; /* para asegurarte de que la imagen se ajuste al tamaño especificado sin deformarse */
  box-shadow: 4px 14px 14px #888888;
}

.n-card {
  height: 100%;
}
@keyframes moveUpDown {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(2px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
