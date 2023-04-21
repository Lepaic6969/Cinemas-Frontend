<template>
  <Nav />

  <n-row>
    <n-col v-for="movie in movies" :key="movie.id" :span="5">
      <n-card
        class="text-center"
        :title="movie.title"
        @click="showModal(movie)"
      >
        <div class="card-image">
          <img :src="getImage(movie.poster_path)" />
          <div class="card-text">
            <n-button  type="success">3D</n-button>
            <n-button type="warning">Infantil</n-button>
            <n-button type="info">Comprar</n-button>
          </div>
        </div>
      </n-card>
    </n-col>
  </n-row>

  <n-modal
    v-if="selectedMovie"
    :title="selectedMovie.title"
    @close="selectedMovie = null"
  >
    <p>{{ selectedMovie.overview }}</p>
    <template
      v-if="
        selectedMovie.genres.map((genre) => genre.name).includes('Thriller')
      "
    >
      <p>
        Thriller:
        {{ selectedMovie.genres.map((genre) => genre.name).join(", ") }}
      </p>
    </template>
  </n-modal>
</template>

<script>
import Nav from "../components/navBar.vue";
import axios from "axios";

export default {
  name: "MovieCards",
  components: {
    Nav,
  },
  data() {
    return {
      movies: [],
      apiKey: "f40d327254d74aec7e161062db22582b",
      selectedMovie: null,
      showRegisterModal: false,
    };
  },
  mounted() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=es-MX&page=1`
      )
      .then((response) => {
        this.movies = response.data.results;
      })
      .catch((error) => console.error(error));
  },
  methods: {
    getImage(path) {
      return path ? `https://image.tmdb.org/t/p/w300${path}` : "";
    },
    showModal(movie) {
      this.selectedMovie = movie;
    },
    toggleRegisterModal() {
      this.showRegisterModal = !this.showRegisterModal;
    },
    toggleLoginModal() {
      this.showLoginModal = !this.showLoginModal;
    },
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
.card-image:hover{
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
  gap: 10px;
  margin-top: 15px;
  width: 80%;
}

.n-card:hover .card-text {
  opacity: 1;
  font-family: "Poppins", sans-serif !important;
  font-weight: 800;
  border-radius: 8px;
}

.n-col {
  margin: 25px;
}

.n-button {
  height: 4vh;
  font-family: "Poppins", sans-serif !important;
  font-weight: 800;
  
}
.card-image img {
  border-radius: 8px;
  width: 100%;
  height: 400px; /* ajusta el valor de altura a tu gusto */
  object-fit: cover; /* para asegurarte de que la imagen se ajuste al tamaño especificado sin deformarse */
  box-shadow: 4px 14px 14px #888888;
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
