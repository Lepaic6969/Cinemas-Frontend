<template>
  <div class="container-poster" id="container-poster">
    <div class="elemento1">
      <div class="contenedor-logo">
        <img src="../assets/Daco_4071008 1.png" alt="logo" />
        <div class="texto">
          <h1>¡DISPONIBLE AHORA!</h1>
          <p>
            Aquí iría la descripción de nuestra película, transmitida exclusivamente en nuestro
            cine.
          </p>
        </div>
        <button @click="handleOpen">ENTRADAS</button>
      </div>
    </div>
    <div class="elemento2" id="container-poster-responsive"></div>
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
import { ref, onMounted, watch } from "vue";
import ModalDataMovie from "../components/ModalDataMovie.vue";
import RowComponent from "../components/RowComponent.vue";

//Para abrir el modal...
const posterStore = usePosterStore();
const { handleOpen } = posterStore;

const urlPoster =
  "/src/modules/tickets/assets/walter.jpg"; /*******Poster que quiero mostrar*******/

//Contenedores de la vista.
let containerPoster;
let containerPosterResponsive;
//Enlaces a las imágenes, cambian según el tamaño de pantalla -> Reactivas.
const url = ref(urlPoster);
const urlResponsive = ref("");

//Responsive al momento de cargar la vista en cualquier pantalla.
if (window.matchMedia("(max-width: 1012px)").matches) {
  url.value = "";
  urlResponsive.value = urlPoster;
} else {
  url.value = urlPoster;
  urlResponsive.value = "";
}

//Media query con js -> Es basicamente para que al inspeccionar la vista y reajustar las diferentes
//tamaños de pantalla, las url de las imágenes trabajen acorde al tamaño de pantalla
// que se tiene actualmente (No indispensable).
window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 1012px)").matches) {
    url.value = "";
    urlResponsive.value = urlPoster;
  } else {
    url.value = urlPoster;
    urlResponsive.value = "";
  }
});

//Función que pone las imágenes necesarias a los contenedores.
const setImages = (containerPoster, containerPosterResponsive) => {
  containerPoster.style.backgroundImage = `url('${url.value}')`;
  containerPosterResponsive.style.backgroundImage = `url('${urlResponsive.value}')`;
};

//Esto es para que cada vez que cambie la Url, se vuelvan a cargar las imágenes a los contenedores.
watch(url, (newUrl, oldUrl) => {
  setImages(containerPoster, containerPosterResponsive);
});

onMounted(() => {
  containerPoster = document.getElementById("container-poster");
  containerPosterResponsive = document.getElementById("container-poster-responsive");
  setImages(containerPoster, containerPosterResponsive);
});

//Función para el responsive según el dispositivo en el que se abra la app.
const d = document,
  n = navigator,
  ua = n.userAgent; //Este es el que contiene la información.
const userDiveceInfo = (id) => {
  const $id = d.getElementById(id),
    //Estos objetos sólo son validaciones para el tipo de dispositivo desde el que ven la aplicación.
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      windows: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows(); //Esta validación es para cualquier dispositivo.
      },
    },
    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    //Este objeto es para las validaciones referentes a cual navegador están usando para visitar mi sitio.
    isBrowser = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera|opera mini/i),
      ie: () => ua.match(/msie|iemobile/i),
      edge: () => ua.match(/edg/i),
      any: function () {
        return (
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          this.opera() ||
          this.ie() ||
          this.edge()
        );
      },
    };
  // console.log(ua);
  //  console.log(isBrowser.edge());

  $id.innerHTML = `
        <ul>
            <li>User Agent: <b>${ua}</b></li>
            <li>Plataforma: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
            <li>Navegador: <b>${isBrowser.any()}</b></li>

        </ul>
    `;

  if (isBrowser.chrome() && !isBrowser.edge()) {
    $id.innerHTML += `Este contenido sólo se puede ver en chrome`;
  }
  if (isBrowser.chrome() && isBrowser.edge()) {
    $id.innerHTML += `Este contenido sólo se puede ver en edge`;
  }
  if (isBrowser.firefox()) {
    $id.innerHTML += `Este contenido sólo se puede ver en Firefox`;
  }

  if (isDesktop.windows()) {
    $id.innerHTML += `<p><mark>Descarga nuestro contenido para Windows</mark></p> `;
  }
  if (isDesktop.linux()) {
    $id.innerHTML += `<p><mark>Descarga nuestro contenido para Linux</mark></p> `;
  }
  if (isDesktop.mac()) {
    $id.innerHTML += `<p><mark>Descarga nuestro contenido para Mac</mark></p> `;
  }

  //Redirecciones (Esto es para mostrar una versión de la página dependiendo desde donde se la visite).
  //Redirije a la página de Jonathan Mircha.
  if (isMobile.android()) {
    // location.href="https://jonmircha.com"
  }
};
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
  height: 768px;
  background: white;
  display: flex;
  /* background-image: url(../assets/img.png); */
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  clip-path: polygon(0% 0%, 100% 0%, 100% 88%, 0% 100%);
}

.elemento1 {
  width: 40%;
  height: 100%;
  background-color: #070;
  background-color: rgb(32, 32, 32);

  clip-path: polygon(0% 0%, 85% 0%, 100% 100%, 0% 100%);
}
.elemento2 {
  width: 50%;
  height: 100%;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  /* border: 1px solid gray; */
}

.contenedor-logo {
  width: 60%;
  height: 34%;
  margin: 229px 188px 276px 83px;
}
.contenedor-logo img {
  width: 164px;
  margin-bottom: 24px;
}
.contenedor-logo .texto h1 {
  color: white;
  font-family: "Roboto Condensed", sans-serif;
  margin-bottom: 8px;
}
.contenedor-logo .texto p {
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  margin-bottom: 24px;
}
.contenedor-logo button {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: white;
  background-color: rgba(27, 144, 252, 1);
  width: 158px;
  height: 51px;
  border-radius: 53px;
  transition: all 0.5s ease;
}
button:hover {
  transform: scale(1.1);
}
/* Estilos para pantalla grande */

@media (max-width: 1440px) {
  .container-poster {
    background-position: -300px center;
    height: 1024px;
  }
  .contenedor-logo {
    margin: 337px auto;
  }
}

@media (max-width: 1422px) {
  .container-poster {
    background-position: -400px center;
    height: 1024px;
  }
}
@media (max-width: 1300px) {
  .container-poster {
    background-position: -500px center;
    height: 1024px;
  }
}
@media (max-width: 1100px) {
  .container-poster {
    background-position: -570px center;
    height: 1024px;
  }
}

/* Estilos para Tablet */

@media (max-width: 1012px) {
  .elemento1,
  .elemento2 {
    width: 100%;
    height: 50%;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
  .elemento1 {
    order: 2;
  }
  .elemento2 {
    order: 1;
    height: 57%;
    /* background-image: url(../assets/img.png);  **********Hay que hacerlo dinámicamente********** */
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .container-poster {
    height: 1024px;
    flex-direction: column;
    background: white;
    clip-path: polygon(0% 0%, 100% 0%, 100% 92%, 0% 100%);
  }
  .contenedor-logo {
    width: 83%;
    height: 34%;
    margin: 40px auto;
  }
  .contenedor-logo h1 {
    font-size: 40px;
  }
  .contenedor-logo img {
    width: 193px;
    margin-bottom: 24px;
  }
  .contenedor-logo .texto p {
    width: 90%;
    font-size: 16px;
  }
  .contenedor-logo button {
    display: block;
    margin: 0 auto;
    width: 100%;
  }
}

@media (max-width: 960px) {
  .elemento2 {
    background-position: -10px center;
  }
}
@media (max-width: 900px) {
  .elemento2 {
    background-position: -50px center;
  }
}
@media (max-width: 850px) {
  .elemento2 {
    background-position: -100px center;
  }
}
@media (max-width: 800px) {
  .elemento2 {
    background-position: -150px center;
  }
}
@media (max-width: 750px) {
  .elemento2 {
    background-position: -200px center;
  }
}
@media (max-width: 700px) {
  .elemento2 {
    background-position: -250px center;
  }
}
@media (max-width: 650px) {
  .elemento2 {
    background-position: -300px center;
  }
}

/* Estilos para móvil */
@media (max-width: 600px) {
  .container-poster {
    height: 800px;
    width: 100%;
    background-color: rgb(32, 32, 32);
  }
  .elemento2 {
    height: 42%;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .contenedor-logo {
    margin: 35px auto;
    height: 212px;
    width: 86%;
  }
  .contenedor-logo img {
    width: 25%;
  }
  .contenedor-logo h1 {
    font-size: 24px;
  }
  .contenedor-logo p {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 24px;
  }
  .contenedor-logo button {
    display: block;
    margin: 0 auto;
    width: 100%;
  }
}
@media (max-width: 560px) {
  .elemento2 {
    background-position: -20px center;
  }
}
@media (max-width: 520px) {
  .elemento2 {
    background-position: -60px center;
  }
}
@media (max-width: 480px) {
  .elemento2 {
    background-position: -100px center;
  }
}
@media (max-width: 440px) {
  .elemento2 {
    background-position: -140px center;
  }
}
@media (max-width: 400px) {
  .elemento2 {
    background-position: -180px center;
  }
}
@media (max-width: 360px) {
  .elemento2 {
    background-position: -220px center;
  }
}
@media (max-width: 320px) {
  .elemento2 {
    background-position: -260px center;
  }
}
@media (max-width: 280px) {
  .elemento2 {
    background-position: -300px center;
  }
}
@media (max-width: 240px) {
  .elemento2 {
    background-position: -340px center;
  }
}
</style>
