<template>
  <div class="d-flex flex-md-row flex-column gap-2">
    <div class="box-summary" :class="changeSize">
      <TicketsComponent />
      <span></span>
      <h3 class="text-center my-5" v-if="seats.length <= 0">
        Aqui veras el
        <p class="text-primary">RESUMEN DE TU COMPRA</p>
      </h3>
      <SummaryComponent v-else />
    </div>
    <div class="col-md-9 container-row" v-if="seats.length > 0">
      <RowComponent />
    </div>
  </div>
</template>

<script setup>
import TicketsComponent from "../components/TicketsComponent.vue";
import RowComponent from "../components/RowComponent.vue";
import SummaryComponent from "../components/SummaryComponent.vue";
import { computed, onMounted } from "vue";
import fetchData from "../../../helpers/fetchData.js";
import { useTicketStore } from "../../../stores/tickets";
import { storeToRefs } from "pinia";

const ticketStore = useTicketStore();
const { setData } = ticketStore;
const { data, seats } = storeToRefs(ticketStore);

onMounted(async () => {
  const { id } = JSON.parse(localStorage.getItem("MovieSelector"));
  console.log("id que mando en la pet: " + id);
  const { body } = await fetchData(`/movie-rooms/room/${id}`); //Estas son las salas disponibles para esa película
  setData(body);
  console.log(data.value);
});

const changeSize = computed(() => {
  return seats.length <= 0 ? "col-md-3" : "col container";
});
</script>

<style scoped>
.box-summary {
  box-shadow: 0.15rem 0.15rem 0.8rem #2b2b2b;
  padding: 1rem;
  border-radius: 1rem 0 0 1rem;
  transition: all 0.3s linear;
}

.box-summary-rounded {
  border-radius: 1rem 0 0 1rem;
}

span {
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
