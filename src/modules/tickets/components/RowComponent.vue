<template>
  <div class="main">
    <div class="row justify-content-md-center">
      <img src="../assets/images/pantalla.png" alt="screen" class="img-fluid w-100 screen" />
      <div class="d-flex flex-md-row flex-column gap-5 gap-md-2">
        <div
          class="container d-flex flex-wrap justify-content-start align-items-start gap-2 align-content-start content-box"
        >
          <SeatComponet
            v-for="{ id, seatNumber, status, price } in general"
            :key="id"
            :seatNumber="seatNumber"
            :reserved="status"
            :price="price"
            :id="id"
            @setDataReservation="datoToSaveSeats"
          />
        </div>
        <div
          class="container d-flex flex-wrap justify-content-start align-items-start gap-2 align-content-start content-box vip"
        >
          <SeatComponet
            v-for="{ id, seatNumber, status, price } in vip"
            :key="id"
            :seatNumber="seatNumber"
            :reserved="status"
            :price="price"
            :id="id"
            @setDataReservation="datoToSaveSeats"
          />
        </div>
        <div
          class="container d-flex flex-wrap justify-content-start align-items-start gap-2 align-content-start content-box prefe"
        >
          <SeatComponet
            v-for="{ id, seatNumber, status, price } in preferential"
            :key="id"
            :seatNumber="seatNumber"
            :reserved="status"
            :price="price"
            :id="id"
            @setDataReservation="datoToSaveSeats"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { useTicketStore } from "../../../stores/tickets";
import { storeToRefs } from "pinia";

const ticketStore = useTicketStore();

const { addTickets } = ticketStore;
const { generalSeats, vipSeats, prefeSeats, ticketsToBuy, total } = storeToRefs(ticketStore);

export default {
  components: {
    SeatComponet: defineAsyncComponent(() => import("./SeatComponet.vue")),
  },

  data() {
    return {
      general: generalSeats || [],
      vip: vipSeats || [],
      preferential: prefeSeats || [],
    };
  },

  methods: {
    datoToSaveSeats(dataToSave) {
      addTickets({ ...dataToSave });
    },
  },
};
</script>

<style scoped>
.row {
  white-space: nowrap;
}

.screen {
  filter: drop-shadow(0rem 1rem 1rem #e3e4e5) contrast(120%) brightness(110%);
}

.main {
  position: relative;
  background-color: rgba(43, 43, 43, 0.8);
  padding: 2rem;
  height: 100%;
  max-height: max-content;
  box-shadow: 0.25rem 0.25rem 0.25rem #2b2b2b;
  border-radius: 0 1rem 1rem 0;
  animation: fadeIn 1s ease-in 1;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.main::after {
  content: "Reservada";
  position: absolute;
  width: 6rem;
  height: 2rem;
  background-color: #01eea2;
  border-radius: 0.5rem;
  text-align: center;
  padding: 0.35rem;
  font-weight: 700;
  bottom: 0.35rem;
  right: 0.35rem;
  font-size: 0.8rem;
  box-shadow: 0.15rem 0.15rem 0rem #2b2b2b;
}

.content-box {
  position: relative;
}

.vip > *,
.prefe > * {
  overflow: visible !important;
  margin-bottom: 10%;
}

.prefe > *::after {
  content: "Prefe";
  position: absolute;
  bottom: -40%;
  left: 50%;
  width: 100%;
  border-radius: 1rem;
  height: 1.5rem;
  transform: translate(-50%);
  text-align: center;
  line-height: 1.5rem;
  margin: -10% 0;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
  font-weight: bold;
  text-shadow: 1px 1px 0 #ffffff, -1px -1px 0 #b7b7b7;
  box-shadow: 2px 2px 0.5em rgba(98, 73, 122, 0.55), inset 1px 1px 0 rgba(255, 255, 255, 0.75),
    inset -1px -1px 0 rgba(0, 0, 0, 0.34);
  border: 1px solid #cacaca;
  background: linear-gradient(
    -72deg,
    #dedede,
    #ffffff 16%,
    #dedede 21%,
    #ffffff 24%,
    #caa1de 27%,
    #dea1ca 30%,
    #dedede 38%,
    #ffffff 45%,
    #ffffff 60%,
    #dedede 72%,
    #ffffff 80%,
    #dedede 84%,
    #caa1de 93%,
    #dea1ca
  );
}

.vip > *:after {
  content: "VIP";
  position: absolute;
  bottom: -40%;
  left: 50%;
  width: 100%;
  border-radius: 1rem;
  height: 1.5rem;
  transform: translate(-50%);
  text-align: center;
  line-height: 1.5rem;
  margin: -10% 0;
  color: rgba(82, 82, 34, 0.72);
  text-decoration: none;
  font-weight: bold;
  text-shadow: 1px 1px 0 #ffdeca;
  box-shadow: 2px 2px 0.5em rgba(155, 122, 89, 0.55), inset 1px 1px 0 rgba(255, 255, 255, 0.9),
    inset -1px -1px 0 rgba(0, 0, 0, 0.5);
  border: 1px solid #caa173;
  background: linear-gradient(
    -72deg,
    #ffdea1,
    #ffffff 16%,
    #ffdea1 21%,
    #ffffff 24%,
    #736445 27%,
    #ffdea1 36%,
    #ffffff 45%,
    #ffffff 60%,
    #ffdea1 72%,
    #ffffff 80%,
    #ffdea1 84%,
    #736445
  );
}

@media (max-width: 768px) {
  .prefe > *::after,
  .vip > *::after {
    font-size: 0.7rem;
    bottom: -60%;
  }

  .main::after {
    transform: rotate(90deg);
    bottom: 3rem;
    right: -3rem;
    box-shadow: 0.25rem -0.25rem 0.25rem #2b2b2b;
  }
}

@media (max-width: 767px) {
  .main {
    border-radius: 0 0 1rem 1rem;
  }
}

@media (max-width: 541px) {
  .prefe > *::after {
    content: "P";
    font-size: 1rem;
  }

  .vip > *::after {
    content: "V";
    font-size: 1rem;
  }
}

@media (max-width: 390px) {
  .prefe > *::after,
  .vip > *::after {
    font-size: 0.5rem;
    bottom: -90%;
  }
}
</style>
