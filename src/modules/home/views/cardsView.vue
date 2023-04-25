<template>
  <n-row>
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
            <n-button type="info" @click="buy(movie)">Ver más</n-button>
          </div>
        </div>
      </n-card>
    </n-col>
  </n-row>
</template>

<script>
import Nav from "../components/navBar.vue";
import Footer from "../components/Footer.vue";
import Modal from "../components/Modal.vue";
import fetchData from "../../../helpers/fetchData.js";

export default {
  name: "MovieCards",
  components: {
    Nav,
    Footer,
    Modal,
  },
  data() {
    return {
      movies: [],
      showLoginModal: false,
    };
  },
  methods: {
    buy(movie) {
      const token = localStorage.getItem("token");
      if (token) {
        localStorage.setItem("MovieSelector", JSON.stringify(movie));
        this.$router.push("/tickets");
      } else {
        this.showLoginModal = true;
      }
    },
  },
  async mounted() {
    try {
      const data = await fetchData("/movies");
      this.movies = data.body;
      console.log("Peliculas:", this.movies); // Agregado
    } catch (error) {
      console.error(error);
    }
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
