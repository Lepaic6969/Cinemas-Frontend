<template>
  <div class="my-component">
    
    <h2>Gracias por su compra...</h2>
    <div class="d-flex">
      <img src="../../../assets/logo.png" alt="" class="w-25 d-none d-md-inline">
      <p class="font p-2 fw-bold mt-md-4">
       Nuestras películas suelen empezar entre 10 y 15 minútos después de la hora programada,
       esto para dar tiempo a todos nuestros usuarios para ingresar a la sala y no interrumpan el 
       ambiente de la misma. Además así se dispone de un tiempo extra para adquirir algún pasabocas 
       para disfrutarlos en la sala.
      </p>
    </div>
    <button class="btn btn-dark w-100 mt-4" @click="finish">Factura</button>
   
    
  </div>
  
</template>

<script setup>
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import {useStepsStore} from '../store/steps.js'
  const useSteps=useStepsStore();
  const{prevPinia,nextPinia,stepByNumber}=useSteps;

  const router = useRouter();
  const finish=()=>{
    router.push('/user/billing');
    nextPinia();
    
  }

  onMounted(()=>{
      stepByNumber(3);
  })

</script>

<style scoped>
  .font{
    font-weight: 300 !important;
    font-size: small !important;
   
  }
  
  .my-component{
    font-family:Arial, Helvetica, sans-serif;
    background-color: white;
    padding: 50px;
    border-radius: 10px;
  }
  .my-component{
    padding: 10px;
  }
</style>