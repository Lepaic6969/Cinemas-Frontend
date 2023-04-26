<template>
  <div class="container-poster" id="container-poster">
      <div class="container-info">
        <h5 class="card-title">{{movieName}}</h5>
        <button @click="handleOpen">ENTRADAS</button>
      </div>
       
  </div>
  <n-loading-bar-provider>
    <n-message-provider>
      <n-notification-provider>
        <n-dialog-provider>
          <ModalDataMovie />
        </n-dialog-provider>
      </n-notification-provider>
    </n-message-provider>
  </n-loading-bar-provider>

  
</template>

<script setup>
  import { usePosterStore } from "../../../stores/poster.js";
  import ModalDataMovie from "./ModalDataMovie.vue";
  import { onMounted,ref } from "vue";

  const posterStore = usePosterStore();
  const { handleOpen } = posterStore;
  let urlPoster;
  const movieName=ref('');
  onMounted(()=>{
    const {image,name}=JSON.parse(localStorage.getItem("MovieSelector"));
    movieName.value=name;
    urlPoster=image.secure_url;
    //Esto es para poner la imagen de fondo...
    const container=document.getElementById("container-poster");
    console.log(`url(${urlPoster})`);
    container.style.backgroundImage=`url('${urlPoster}')`;

  });
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
* {
  margin: 0;
  padding: 0;
}
.container-poster {
  width: 100%;
  height: 450px;
  background: white;
 
  /* background-image: url(../assets/img.png); */
  border-radius: 15px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}

.container-info{
  background-color: rgb(43,43,43);
  width: 100%;
  height: 25%;
  border-radius: 15px;
  
  position: absolute;
  bottom: 0;
}
.container-info h5{
  color:white !important;
  font-family: "Roboto", sans-serif;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 10px;


}

 button {
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 15px;
  color: white;
  background-color: RGB(27,144,252);
  width: 75%;
  height:50%;
  display: block;
  margin: 0 auto;
  border-radius: 53px;
  transition: all 0.9s ease;
  color:white;
}
button:hover {
  transform: scale(1.1);
}





</style>
