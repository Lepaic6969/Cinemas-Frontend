<template>
  <div class="container box">
    <div class="container box-text my-3 text-start">
      <h3 class="text-md-start text-center">
        RESUMEN <span class="text-primary">DE TU COMPRA</span>
      </h3>
      <ul v-if="room">
        <li>
          Película: <span class="text-primary">{{ room[0].movie.name }}</span>
        </li>
        <li>
          Función: <span class="text-primary">{{ room[0].hour }}</span>
        </li>
        <li>
          Sala: <span class="text-primary">{{ room[0].Room.name }}</span>
        </li>
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
    <div class="box-buy text-center my-3" v-if="total > 0">
      <n-button color="#1b90fc" round @click="handlePay"><i class="fa-solid fa-wallet me-1"></i> Pagar </n-button>
    </div>
  </div>
</template>

<script>
import { useTicketStore } from "@/stores/tickets.js";
import { storeToRefs } from "pinia";

const ticketStore = useTicketStore();

const { ticketsToBuy, total } = storeToRefs(ticketStore);

export default {
  props: {
    room: {
      type: Object,
      required: true,
    },
  },

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
    handlePay(){
        //Aquí viene lo de las dirrecciones si eres vendedor o cliente normal
        const {email}=JSON.parse(localStorage.getItem("user"));
        if(email==="seller@email.com"){
          this.$router.push('/user/billing');
          //TODO:Si es vendedor aquí de una vez debe hacer la petición, porque no se pasa por pasarela.
        }else{
          this.$router.push('/user/payment');
        }
    }
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
