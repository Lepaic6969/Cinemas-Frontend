<template>
  <span class="seat">A1</span>
</template>

<script>
export default {
  props: {},
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
  transition: transform 0.3s ease-in-out;
  width: 2.813rem;
  position: relative;
}

.seat:hover {
  transform: scale(1.1);
  filter: brightness(80%);
}

@media (max-width: 768px) {
  .seat {
    width: 2.125rem;
    height: 2.125rem;
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
