<template>
  <div class="row">
    <div class="col-md-3">
      <TicketsComponent />
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
</script>

<style scoped></style>
