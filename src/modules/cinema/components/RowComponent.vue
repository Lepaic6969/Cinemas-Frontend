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
  <div class="container main col-md-9 pb-3 pt-4">
    <div class="row justify-content-md-center">
      <img src="../assets/images/pantalla.png" alt="screen" class="img-fluid w-100 screen" />
      <div class="d-flex flex-md-row flex-column gap-5 gap-md-2">
        <div
          class="container d-flex flex-wrap justify-content-start align-items-start gap-1 align-content-start"
        >
          <SeatComponet v-for="seat in 36" />
        </div>
        <div
          class="container d-flex flex-wrap justify-content-start align-items-start gap-1 align-content-start content-box"
        >
          <SeatComponet v-for="seat in 10" />
        </div>
        <div
          class="container d-flex flex-wrap justify-content-start align-items-start gap-1 align-content-start"
        >
          <SeatComponet v-for="seat in 25" />
        </div>
      </div>
    </div>
    <!-- <div class="container max-auto text-center exit">
      <img src="../assets/images/exit.png" alt="exit" class="img-fluid" />
    </div> -->
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

/* .grid-fluid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(45px, 1fr));
  text-align: center;
} */

.screen {
  filter: drop-shadow(0rem 1rem 1rem #e3e4e5);
}

.main {
  background-color: #2b2b2b;
  border-radius: 0.5rem;
  position: relative;
}

.content-box {
  position: relative;
}
.content-box:after {
  content: "";
  position: absolute;
  width: 100%;
  bottom: 0%;
  height: 2rem;
  background-color: aqua;
}
</style>
