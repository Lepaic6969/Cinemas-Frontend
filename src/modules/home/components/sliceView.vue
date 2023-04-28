<template>
  <div class="sl mt-3">
    <n-carousel autoplay full-width v-for="movie in sala" :key="movie.id">
      <div v-if="new Date(movie.start_date) > oneWeekFromNow">
        <img
          :src="
            movie.movie.image
              ? movie.movie.image.secure_url
              : 'https://tradebharat.in/assets/catalogue/img/no-product-found.png'
          "
          class="imgs"
          :alt="movie.movie.name"
        />

        <span
          class="date"
          v-text="
            new Date(movie.end_date).toLocaleDateString('es-ES', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })
          "
        ></span>
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
      sala: [],
      oneWeekFromNow: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
    };
  },
  methods: {},
  async mounted() {
    try {
      const datas = await fetchData("/movie-rooms");
      this.sala = datas.body;
    } catch (error) {
      console.error(error);
    }
  },

  created(){}
};
</script>
<style scoped>
.imgs {
  width: 40%;
  height: 80vh;
}

.n-carousel {
  width: 100% !important;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
}

.date {
  font-family: "Poppins" !important;
  font-weight: 800;
  font-size: 170%;
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
}
</style>
