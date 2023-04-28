<template>
  <div class="container box">
    <div class="container box-text my-3 text-start">
      <h3 class="text-md-start text-center">
        RESUMEN <span class="text-primary">DE TU COMPRA</span>
      </h3>
      <ul>
        <li>Película:</li>
        <li>Función:</li>
        <li>Fecha:</li>
        <li>Sala:</li>
      </ul>
    </div>
    <div class="box-seats my-3">
      <n-space vertical>
        <n-table striped class="text-center">
          <thead>
            <tr>
              <th>Silla</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="{ price, id, seatNumber } in ticketsToBuy" :key="id">
              <td>{{ seatNumber }}</td>
              <td>{{ newValueFormat(price) }}</td>
            </tr>
            <tr>
              <td class="fw-bold">Total</td>
              <td class="fw-bold">{{ newValueFormat(total) }}</td>
            </tr>
          </tbody>
        </n-table>
      </n-space>
    </div>
    <div class="box-buy text-center my-3">
      <n-button color="#1b90fc" round><i class="fa-solid fa-wallet me-1"></i> Pagar </n-button>
    </div>
  </div>
</template>

<script>
import { useTicketStore } from "@/stores/tickets.js";
import { storeToRefs } from "pinia";

const ticketStore = useTicketStore();

const { ticketsToBuy, total } = storeToRefs(ticketStore);

export default {
  data() {
    return {
      ticketsToBuy,
      total: total || 0,
    };
  },

  methods: {
    newValueFormat(value) {
      const formatter = new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
      });
      return formatter.format(value);
    },
  },
};
</script>

<style scoped>
h3 {
  font-weight: 700;
  font-size: 1.4rem;
  margin: 1rem auto;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
