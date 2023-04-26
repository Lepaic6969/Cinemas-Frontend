<template>
  <div v-if="movies.length > 0">
    <n-row>
      <n-col v-for="movie in movies" :key="movie.id" :span="5">
        <n-card class="text-center">
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
              <n-button type="success" @click="toggleModal(movie)"
                >Trailer</n-button
              >
              <n-button type="info" @click="buy(movie)">Ver más</n-button>
            </div>
          </div>
          <h4 class="mt-4">{{ movie.name }}</h4>
        </n-card>
      </n-col>
    </n-row>
  </div>
  <div v-else>
    <h3 class="text-center">No hay peliculas para mostrar</h3>
  </div>

  <Modal title="Iniciar sesión" v-if="showLoginModal"> </Modal>

  <n-modal v-model:show="show" class="custom-card" preset="card" :style="modal">
    <h2 class="text-center" v-text="film.name"></h2>
    <iframe
      allow="autoplay"
      width="100%"
      height="360"
      :src="film.trailer"
      autoplay
    ></iframe>

    <template #footer>
      <n-button type="info" @click="buy(movie)">Ver más</n-button>
    </template>
  </n-modal>
</template>

<script>
import Modal from "../components/Modal.vue";
import fetchData from "../../../helpers/fetchData.js";

export default {
  name: "MovieCards",
  components: {
    Modal,
  },
  data() {
    return {
      movies: [],
      sala:[],
      film: {},
      showLoginModal: false,
      show: false,
      modal: {
        width: "500px",
      },
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
    toggleModal(movie) {
      this.film = movie;
      this.show = !this.show;
    },
  },
  async mounted() {
    try {
      const data = await fetchData("/movies");
      this.movies = data.body;

      const datas = await fetchData("/movie-rooms");
      this.sala = datas.body;
      console.log("sala:", this.sala);
      console.log("Peliculas:", this.movies); // Agregado
      // let index = 0;
      // this.movies.map (e => {
      //   movies[index].code =  e.trailer.substr(32);
      //   index++;
      // //console.log("Peli:", e.trailer.substr(32));
      // })

      // this.movies.map (e => {
      // console.log("Peli:", e.code);
      // })
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
  color: white;
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

h3,
h2,
h4 {
  font-family: "Poppins", sans-serif !important;
  font-weight: 800;
  margin-bottom: 10%;
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
  border-radius: 8px;
}

.n-icon {
  margin-top: 4px;
}
.n-avatar {
  width: 80px;
  height: 80px;
  margin-left: 40%;
  background: transparent;
}

.modal-content {
  border: none;
  background: #039be5;
  color: white;
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
