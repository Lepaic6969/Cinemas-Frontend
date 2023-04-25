<template>
  <div class="container main col-md-9 pb-3 pt-4">
    <div class="row justify-content-md-center">
      <img src="../assets/images/pantalla.png" alt="screen" class="img-fluid w-100 screen" />
      <div class="d-flex flex-md-row flex-column gap-5 gap-md-2">
        <div
          class="container d-flex flex-wrap justify-content-start align-items-start gap-2 align-content-start content-box"
        >
          <SeatComponet
            v-for="seatG in general"
            :key="seatG"
            :seatNumber="seatG"
            :reserved="true"
          />
        </div>
        <div
          class="container d-flex flex-wrap justify-content-start align-items-start gap-2 align-content-start content-box vip"
        >
          <SeatComponet v-for="seatV in vip" :key="seatV" :seatNumber="seatV" />
        </div>
        <div
          class="container d-flex flex-wrap justify-content-start align-items-start gap-2 align-content-start content-box prefe"
        >
          <SeatComponet v-for="seatP in preferential" :key="seatP" :seatNumber="seatP" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    SeatComponet: defineAsyncComponent(() => import("../components/SeatComponet.vue")),
  },

  data() {
    return {
      general: [
        "G1",
        "G2",
        "G3",
        "G4",
        "G5",
        "G6",
        "G7",
        "G8",
        "G9",
        "G10",
        "G11",
        "G12",
        "G13",
        "G14",
        "G15",
        "G16",
        "G17",
        "G18",
        "G19",
        "G20",
        "G21",
        "G22",
        "G23",
        "G24",
        "G25",
        "G26",
        "G27",
        "G28",
        "G29",
        "G30",
      ],
      vip: ["V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "V10"],
      preferential: [
        "P1",
        "P2",
        "P3",
        "P4",
        "P5",
        "P6",
        "P7",
        "P8",
        "P9",
        "P10",
        "P11",
        "P12",
        "P13",
        "P14",
        "P15",
      ],
    };
  },
};
</script>

<style scoped>
.row {
  white-space: nowrap;
}

/* .grid-fluid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  text-align: center;
} */

.screen {
  filter: drop-shadow(0rem 1rem 1rem #e3e4e5) contrast(120%) brightness(110%);
}

.main {
  position: relative;
  /* background-color: #747474; */
  background-color: #616161;
  padding: 3rem;
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
