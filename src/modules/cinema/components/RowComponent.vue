<!-- <template>
  <div class="container bg-dark rounded p-3">
    <div class="row justify-content-md-center">
      <img src="../assets/images/pantalla.png" alt="screen" class="img-fluid col-12 screen" />
      <div class="container col-10">
        <div class="row grid-fluid justify-content-center align-items-center gap-5">
          <div class="row justify-content-center align-items-center gap-2">
            <SeatComponet v-for="seat in 20" />
          </div>
          <div class="row justify-content-center align-items-center gap-2">
            <SeatComponet v-for="seat in 10" />
          </div>
          <div class="row justify-content-center align-items-center gap-2">
            <SeatComponet v-for="seat in 25" />
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid my-5 text-center">
      <img src="../assets/images/exit.png" alt="exit" class="img-fluid col-md-6" />
    </div>
  </div>
</template> -->

<template>
  <div class="container main my-5">
    <div class="row justify-content-md-center">
      <img src="../assets/images/pantalla.png" alt="screen" class="img-fluid col-12 screen" />
      <div class="d-flex flex-md-row flex-column gap-5 gap-md-2">
        <div class="container d-flex flex-wrap justify-content-center align-items-start gap-1">
          <SeatComponet v-for="seat in 30" />
        </div>
        <div class="container d-flex flex-wrap justify-content-center align-items-start gap-1">
          <SeatComponet v-for="seat in 15" />
        </div>
        <div class="container d-flex flex-wrap justify-content-center align-items-start gap-1">
          <SeatComponet v-for="seat in 35" />
        </div>
      </div>
    </div>
    <div class="container max-auto text-center exit">
      <img src="../assets/images/exit.png" alt="exit" class="img-fluid" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    SeatComponet: defineAsyncComponent(() => import("../components/SeatComponet.vue")),
  },
};
</script>

<style scoped>
.row {
  white-space: nowrap;
}

/* .grip-fluid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  text-align: center;
} */

.screen {
  filter: drop-shadow(0px 30px 50px #e3e4e5);
}

.main {
  background-color: #2b2b2b;
  border-radius: 0.5rem;
  position: relative;
  padding: 1rem;
  padding-bottom: 10rem;
}

.main .exit {
  position: absolute;
  top: 90%;
  left: 0;
  margin: 0 auto !important;
  padding: 0 !important;
}

.exit > img {
  margin: 0 auto !important;
  padding: 0 !important;
}
</style>
