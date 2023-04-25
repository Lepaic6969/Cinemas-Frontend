<template>
    <n-space vertical>
      <n-radio-group v-model:value="type">
        <n-radio-button v-for="_type in types" :key="_type" :value="_type">
          {{ _type }}
        </n-radio-button>
      </n-radio-group>
      <n-radio-group v-model:value="placement">
        <n-radio-button
          v-for="_placement in placements"
          :key="_placement"
          :value="_placement"
        >
          {{ _placement }}
        </n-radio-button>
      </n-radio-group>
      <n-radio-group v-model:value="direction">
        <n-radio-button
          v-for="_direction in directions"
          :key="_direction"
          :value="_direction"
        >
          {{ _direction }}
        </n-radio-button>
      </n-radio-group>
      <n-switch v-model:value="showArrow">
        <template #checked>
          Show arrow
        </template>
        <template #unchecked>
          No arrow
        </template>
      </n-switch>
      <n-carousel
        :direction="direction"
        :show-arrow="showArrow"
        :dot-type="type"
        :dot-placement="placement"
        style="height: 240px"
      >
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
        >
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
        >
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
        >
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
        >
      </n-carousel>
    </n-space>
  </template>
  
  <script>
  import { defineComponent, ref } from "vue";
  
  export default defineComponent({
    setup() {
      const typeRef = ref("dot");
      const placementRef = ref("bottom");
      const directionRef = ref("horizontal");
      return {
        showArrow: ref(false),
        type: typeRef,
        types: ["dot", "line"],
        placement: placementRef,
        placements: ["top", "bottom", "left", "right"],
        direction: directionRef,
        directions: ["horizontal", "vertical"]
      };
    }
  });
  </script>
  
  <style scoped>
  .carousel-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>