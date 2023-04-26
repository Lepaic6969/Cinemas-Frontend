<template>
  <div class="d-flex flex-md-row flex-column gap-2">
    <div class="col-md-3 box-summary">
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

<style scoped>
.box-summary {
  box-shadow: 0.15rem 0.15rem 0.8rem #2b2b2b;
  padding: 1rem;
  border-radius: 1rem 0 0 1rem;
}

@media (max-width: 767px) {
  .box-summary {
    border-radius: 1rem 1rem 0 0;
  }
}
</style>
