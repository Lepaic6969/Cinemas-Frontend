<template>
  <div class="d-flex flex-md-row flex-column gap-2">
    <div class="box-summary" :class="changeSize">
      <TicketsComponent />
      <span></span>
      <SummaryComponent :room="roomSelected" />
    </div>
    <div
      class="col d-flex flex-column justify-content-center align-items-center"
      v-if="seats.length <= 0"
    >
      <h2>Entradas:</h2>
      <h1 class="text-center fw-bold">
        Seleccione <span class="text-primary">una sala y hora</span>
      </h1>
    </div>
    <div class="col-md-9 container-row" v-else>
      <RowComponent />
    </div>
  </div>
</template>

<script setup>
import TicketsComponent from "../components/TicketsComponent.vue";
import RowComponent from "../components/RowComponent.vue";
import SummaryComponent from "../components/SummaryComponent.vue";
import { onMounted, ref, watch } from "vue";
import fetchData from "../../../helpers/fetchData.js";
import { useTicketStore } from "../../../stores/tickets";
import { storeToRefs } from "pinia";

const ticketStore = useTicketStore();
const { setData } = ticketStore;
const { data, seats, roomSelected } = storeToRefs(ticketStore);

const changeSize = ref("box-summary");

onMounted(async () => {
  const { id } = JSON.parse(localStorage.getItem("MovieSelector"));
  const { body } = await fetchData(`/movie-rooms/movie/${id}`); //Estas son las salas disponibles para esa película
  setData(body);
});

watch(seats, (newSeats) => {
  if (newSeats.length > 0) {
    changeSize.value = "box-summary-rounded";
  } else {
    changeSize.value = "box-summary";
  }
});
</script>

<style scoped>
.box-summary {
  box-shadow: 0.15rem 0.15rem 0.8rem #2b2b2b;
  padding: 1rem;
  border-radius: 1rem 1rem 1rem 1rem;
  transition: 0.3s ease-in-out;
}

.box-summary-rounded {
  border-radius: 1rem 0 0 1rem;
}

.box-summary > span {
  background: url("../assets/pattern.png") repeat-x;
  display: block;
  width: 100%;
  height: 0.5rem;
  position: relative;
  overflow: hidden;
  padding-bottom: 2rem;
  border-bottom: 1px dashed #bfbfbf;
}

@media (max-width: 767px) {
  .box-summary {
    border-radius: 1rem 1rem 0 0;
  }
}
</style>
