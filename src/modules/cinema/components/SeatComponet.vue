<template>
  <span class="seat" @click="toggleReservation">{{ seatNumber }}</span>
</template>

<script>
export default {
  props: {
    seatNumber: {
      type: String,
      required: true,
    },
    reserved: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    toggleReservation() {
      this.reserved = !this.reserved;
      this.$emit(this.reserved ? "unreserve" : "reserve", this.seatNumber);
      console.log(this.seatNumber);
    },
  },
};
</script>

<style scoped>
.seat {
  background-image: url("../assets/images/seat.svg");
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
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
}

.seat:hover {
  transform: scale(1.1);
  filter: contrast(130%);
}

.reserved {
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
