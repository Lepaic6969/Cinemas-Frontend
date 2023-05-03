<template>
  <Slices />
  <div v-if="movi.length > 0">
    <n-row>
      <n-col v-for="movie in movi" :key="movie.id" :span="5">
        <n-card
          class="text-center"
          v-if="new Date(movie.start_date) < oneWeekFromNow"
        >
          <div class="card-image">
            <img
              :src="
                movie.movie.image
                  ? movie.movie.image.secure_url
                  : 'https://tradebharat.in/assets/catalogue/img/no-product-found.png'
              "
              class="card-img-top"
              :alt="movie.movie.name"
            />
            <div class="card-text">
              <n-button type="success" @click="toggleModal(movie)"
                >Trailer</n-button
              >
              <n-button type="info" @click="buy(movie.movie)">Ver más</n-button>
            </div>
          </div>
          <h4 class="mt-4 mb-0" v-text="movie.movie.name"></h4>
          <p>
            Disponible hasta:
            {{
              new Date(movie.end_date).toLocaleDateString("es-ES", {
                month: "long",
                day: "numeric",
              })
            }}
          </p>
        </n-card>
      </n-col>
    </n-row>
  </div>

  <div v-else>
    <h3 class="text-center mt-4">No hay peliculas para mostrar</h3>
  </div>

  <Modal title="Iniciar sesión" v-if="showLoginModal"> </Modal>

  <n-modal v-model:show="show" class="custom-card" preset="card" :style="modal">
    <h2 class="text-center" v-text="film.movie.name"></h2>
    <iframe
      allow="autoplay"
      width="100%"
      height="360"
      :src="film.movie.trailer"
      autoplay
    ></iframe>

    <template #footer>
      <n-button class="btnBuy" type="warning" @click="buy(film.movie)"
        >Ver más</n-button
      >
    </template>
  </n-modal>
</template>

<script>
import Modal from "../components/Modal.vue";
import fetchData from "../../../helpers/fetchData.js";
import Slices from "../components/sliceView.vue";

export default {
  name: "Cards",
  components: {
    Modal,
    Slices,
  },
  data() {
    return {
      movi: [],
      cine: [],
      movies: [],
      Rooms: [],
      sala: [],
      film: {},
      showLoginModal: false,
      show: false,
      modal: {
        width: "500px",
        background: "#039be5",
        color: "white",
      },
      oneWeekFromNow: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
      cinePeli: JSON.parse(localStorage.getItem("Sala")),
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
        this.show=false
      }
    },
    toggleModal(movie) {
      this.film = movie;
      this.show = !this.show;
    },
  },
  async mounted() {
    try {
      const aux = this.cinePeli.id;

      const mov = await fetchData("/movies");
      this.movi = mov.body;

      const moviesData = await fetchData("/movie-rooms");
      const currentDate = new Date();
      this.movies = moviesData.body.filter((movie) => {
        const endDate = new Date(movie.end_date);
        return endDate > currentDate && endDate < this.oneWeekFromNow;
      });

      const date = await fetchData("/rooms");
      this.rooms = date.data;

      const datas = await fetchData("/movie-rooms");
      this.sala = datas.body;
      this.movi = [];
      this.sala.map((salaId) => {
        if (salaId.Room.cinemaId === aux) {
          this.movi.push(salaId);
          localStorage.setItem("SalaId", this.movi);
        }
      });
    } catch (error) {
      alert(error);
    }

    const cinemaId = this.rooms.find((room) => room.id === room.id).cinema_id;
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
.btnBuy {
  justify-content: center;
  height: 6vh;
  margin-left: 160px;
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

@media (max-width: 768px) {
.n-card {
  width:300px;
  border-radius: 8px;
}
}
</style>
