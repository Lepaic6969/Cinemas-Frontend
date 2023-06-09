<template>
  <span :id="id" class="seat" @click="toggleReservation" :class="isReservedColor">{{
    seatNumber
  }}</span>
</template>

<script>
import { useTicketStore } from "@/stores/tickets.js";
import { storeToRefs } from "pinia";

const ticketStore = useTicketStore();

const { deleteTickets } = ticketStore;
const { ticketsBuy } = storeToRefs(ticketStore);
export default {
  props: {
    seatNumber: {
      type: String,
      required: true,
    },
    reserved: {
      type: Boolean,
      default: false,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      isReserved: false,
    };
  },

  methods: {
    toggleReservation() {
      if (this.reserved) return;

      this.isReserved = !this.isReserved;

      if (this.isReserved) {
        this.$emit("setDataReservation", {
          seatNumber: this.seatNumber,
          status: this.isReserved,
          price: this.price,
          id: this.id,
        });
      } else {
        deleteTickets(this.id);
        ticketsBuy;
      }
    },
  },

  computed: {
    isReservedColor() {
      return this.reserved || this.isReserved ? "seat reserved" : "seat no-reserved";
    },
  },
};
</script>

<style scoped>
.seat {
  background-image: url("../assets/images/seat.svg");
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 500;
  height: 2.813rem;
  overflow: hidden;
  padding: 0.5rem;
  text-align: center;
  width: 2.5rem;
  user-select: none;
  width: 2.813rem;
  position: relative;
  filter: drop-shadow(2px 1px 10px #312b2b);
  transition: 0.1s ease-in-out;
  animation: fadeIn 1s ease-in 1;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.no-reserved:hover {
  cursor: pointer;
  transform: scale(1.1);
  filter: contrast(130%);
}

.reserved {
  filter: grayscale(100%) brightness(50%) sepia(100%) hue-rotate(-600deg) saturate(1000%);
}

@media (max-width: 768px) {
  .seat {
    width: 2.125rem;
    height: 2.125rem;
    font-size: 0.65rem;
  }
}

@media (max-width: 390px) {
  .seat {
    width: 1.438rem;
    height: 1.438rem;
    padding: 0.188rem;
    font-size: 0.6rem;
  }
}
</style>
