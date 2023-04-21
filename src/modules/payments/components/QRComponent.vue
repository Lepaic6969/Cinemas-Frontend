<template>
   <div  class="mt-5">
      <div id="containerQR" class="containerQR"></div>
  </div>
</template>

<script setup>
    import { onMounted } from 'vue';
     //Esto es para trabajar con el QR
    const getQR=()=>{
        const containerQR=document.getElementById("containerQR");
        if(containerQR!==null){
            new QRCode(containerQR,'https://www.nequi.com.co/');
        }
    }
    onMounted(()=>{
        getQR();
    });
   
</script>

<style scoped>
.containerQR{
    display: flex;
    justify-content: center;
    padding: 48px 0;
  }
</style>