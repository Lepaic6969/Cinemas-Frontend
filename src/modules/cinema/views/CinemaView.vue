<template>
  <RowComponent />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    RowComponent: defineAsyncComponent(() => import("../components/RowComponent.vue")),
  },
};
</script>

<style scoped></style>
