<template>
  <div class="spinner">
    <div class="spinner-overlay">
      <div class="background-image"></div>
      <div class="spinner-loader"></div>
      <div class="spinner-text">Cargando...</div>
    </div>
  </div>
</template>

<style scoped>
.spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
}

.background-image {
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 4.1rem;
  height: 4.1rem;
  background-image: url('../../../../assets/img/logo.png');
  background-size: contain;
  background-repeat: no-repeat;  
}

.spinner-overlay {
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
}

.spinner-loader {
  border: 0.4rem solid #fff;
  border-top: 0.4rem solid #ffc90a;
  border-bottom: 0.4rem solid #ffc90a;
  border-left: 0.4rem solid #007bff;
  border-right: 0.4rem solid #007bff;
  border-radius: 50%;
  width: 4.4rem;
  height: 4.4rem;
  animation: spin 1s linear infinite; 
  margin-bottom: 10px;
}

.spinner-text {
  color: #000;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>