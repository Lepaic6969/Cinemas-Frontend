<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <img src="../assets/images/pantalla.png" alt="screen" class="img-fluid col-12" />
      <div class="container col-10">
        <div class="row justify-content-center align-items-center gap-5">
          <div class="row justify-content-md-center align-items-center gap-2">
            <SeatComponet v-for="seat in 20" />
          </div>
          <div class="row justify-content-md-center align-items-center gap-2">
            <SeatComponet v-for="seat in 10" />
          </div>
          <div class="row justify-content-md-center align-items-center gap-2">
            <SeatComponet v-for="seat in 25" />
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid my-5 text-center">
      <img src="../assets/images/exit.png" alt="exit" class="img-fluid col-md-6" />
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
</style>
