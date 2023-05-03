<template>
  <div class="sl mt-3">
    <n-carousel show-arrow autoplay>
      
      <div v-for="movie in movies" :key="movie.id">
      <div v-if="new Date(movie.start_date) > oneWeekFromNow">
        <img
          :src="
            movie.movie.image?.secure_url ||
            'https://tradebharat.in/assets/catalogue/img/no-product-found.png'
          "
          class="imgs"
          :alt="movie.movie.name"
        />

        <span
          class="date"
          v-text="
            new Date(movie.start_date).toLocaleDateString('es-ES', {
              month: 'long',
              day: 'numeric',
            })
          "
        ></span>
      </div>
      </div>
    </n-carousel>

    <div class="next">Proximamente</div>
  </div>
</template>

<script>
import fetchData from "../../../helpers/fetchData.js";

export default {
  name: "Slices",
  components: {},
  data() {
    return {
      movies:[],
      sala: [],
      oneWeekFromNow: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
    };
  },
  methods: {
     ordersFilm() {
      this.sala.map((movie) => {
        if (new Date(movie.start_date) > this.oneWeekFromNow) {
          this.movies.push(movie);
        }
      });
    },
  },
  async mounted() {
    try {
      const datas = await fetchData("/movie-rooms");
      this.sala = datas.body;
    } catch (error) {
      console.error(error);
    }
      this.ordersFilm()
  },

  created() {},
};
</script>

<style scoped>
.imgs {
  width: 40%;
  height: 60vh;
}

.n-carousel {
  width: 100% !important;
  justify-content: center;
  background-color: #949494;
  height: 60vh;
}

.date {
  font-family: "Poppins" !important;
  font-weight: 800;
  font-size: 290%;
  margin-left: 3%;
}

.next {
  font-family: "Poppins" !important;
  font-weight: 800;
  background: #007bff;
  height: 30px;
  width: 26%;
  position: relative;
  z-index: 2;
  color: white;
  margin-top: -20px;
  border-radius: 5px;
  left: 5%;
  margin-bottom: 1%;
  text-align: center;
  letter-spacing: 8px;
}


@media (max-width: 768px) {
  .n-carousel {
    height: 40vh;
  }
  .imgs{
    width: 40%;
    height: 100%;
  }
  .next{
    letter-spacing: 0.1px;
  }
}
</style>
