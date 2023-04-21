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
  <div class="container main">
    <div class="row justify-content-md-center">
      <img src="../assets/images/pantalla.png" alt="screen" class="img-fluid col-12 screen" />
      <div class="d-flex flex-md-row flex-column gap-5">
        <!-- 1ra -->
        <div
          class="container d-flex flex-wrap justify-content-between align-items-start gap-1 align-content-start conten-box"
        >
          <SeatComponet v-for="seat in 20" />
        </div>

        <!-- 2da -->
        <div
          class="container d-flex flex-wrap justify-content-between align-items-start gap-1 align-content-start conten-box"
        >
          <SeatComponet v-for="seat in 20" />
        </div>

        <!-- 3ra -->
        <div
          class="container d-flex flex-wrap justify-content-between align-items-start gap-1 align-content-start conten-box"
        >
          <SeatComponet v-for="seat in 10" />
        </div>
      </div>
    </div>
    <div class="container max-auto text-center exit">
      <img src="../assets/images/exit.png" alt="exit" class="img-fluid w-50" />
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

.screen {
  filter: drop-shadow(0rem 1rem 2rem #e3e4e5);
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
  top: 94%;
  left: 0;
  margin: 0 auto !important;
  padding: 0 !important;
}

.exit > img {
  margin: 0 auto !important;
  padding: 0 !important;
}

.conten-box {
  position: relative;
  padding: 1.25rem;
}

.conten-box:nth-child(3) {
  border-style: solid;
  border-image: linear-gradient(
      -72deg,
      #dedeff,
      #ffffff 16%,
      #dedeff 21%,
      #ffffff 24%,
      #555564 27%,
      #dedeff 36%,
      #ffffff 45%,
      #ffffff 60%,
      #dedeff 72%,
      #ffffff 80%,
      #dedeff 84%,
      #555564
    )
    1;
}

.conten-box:nth-child(3) > * {
  width: 3rem;
  height: 3rem;
}

.conten-box:nth-child(1) {
  border: 1px solid #545454;
  border-radius: 1rem;
}
.conten-box:nth-child(2) {
  border: 1px solid #bbbbbb;
  border-radius: 1rem;
}

@media (max-width: 991px) {
  .main .exit {
    top: 97%;
  }
}

@media (max-width: 560px) {
  .main .exit {
    top: 98.5%;
  }

  .screen {
    filter: drop-shadow(0rem 1rem 1rem #e3e4e5);
  }
}
</style>
