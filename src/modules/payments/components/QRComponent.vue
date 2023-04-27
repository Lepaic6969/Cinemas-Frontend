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
            new QRCode(containerQR,'https://transacciones.nequi.com/bdigital/login.jsp');
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
    padding: 30px 0;
    padding-top: 0;
    /* border:1px solid black; */
    height: 220px;
  }
</style>