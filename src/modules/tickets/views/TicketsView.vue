<template>
  <div class="d-flex flex-md-row flex-column gap-2">
    <div class="col-md-3 box-summary">
      <TicketsComponent />
      <span></span>
      <SummaryComponent />
    </div>
    <div class="col-md-9 container-row">
      <RowComponent />
    </div>
  </div>
</template>

<script setup>
import TicketsComponent from "../components/TicketsComponent.vue";
import RowComponent from "../components/RowComponent.vue";
import SummaryComponent from "../components/SummaryComponent.vue";
import {onMounted} from 'vue';
import fetchData from '../../../helpers/fetchData.js';
import {useTicketStore} from '../../../stores/tickets';
import { storeToRefs } from "pinia";

const ticketStore=useTicketStore();
const {setData}=ticketStore;
const {data}=storeToRefs(ticketStore);

onMounted(async()=>{
  const {id}=JSON.parse(localStorage.getItem("MovieSelector"));
  const {body}=await fetchData(`/movie-rooms/room/${id}`); //Estas son las salas disponibles para esa película
  setData(body);
  console.log(data.value);
  
});
</script>

<style scoped>
.box-summary {
  box-shadow: 0.15rem 0.15rem 0.8rem #2b2b2b;
  padding: 1rem;
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
