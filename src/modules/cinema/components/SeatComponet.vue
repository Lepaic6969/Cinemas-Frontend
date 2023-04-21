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
  height: 2.5rem;
  overflow: hidden;
  padding: 0.5rem;
  text-align: center;
  width: 2.5rem;
  user-select: none;
  transition: transform 0.3s ease-in-out;
}

.seat:hover {
  transform: scale(1.2);
  filter: grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(1000%);
  filter: grayscale(100%) brightness(40%) sepia(100%) hue-rotate(90deg) saturate(1000%);
}
</style>
