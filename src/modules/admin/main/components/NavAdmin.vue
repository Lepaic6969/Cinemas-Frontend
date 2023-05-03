<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg z-3">
      <button
        id="tog"
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="logo px-2 py-1 mx-auto">
        <img src="../../../../assets/a.png" style="width: 22vh" />
      </div>

      <div
        class="collapse navbar-collapse p-0 m-0"
        id="navbarToggleExternalContent"
      >
        <div class="navbar-nav mr-auto">
          <router-link :to="{ name: 'admin-cinemas' }" class="nav-item nav-link"
            >Cinemas</router-link
          >

          <router-link
            :to="{ name: 'admin-peliculas' }"
            class="nav-link nav-link"
            >Peliculas</router-link
          >
        </div>
      </div>
      <div class="exit">
        <a class="nav-item nav-link" @click="handleExit()">
          <n-icon size="40" style="margin-top: -6px">
            <ExitOutline />
          </n-icon>
        </a>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { NIcon } from "naive-ui";
import { ExitOutline } from "@vicons/ionicons5";
import Swal from "sweetalert2";

const user = JSON.parse(localStorage.getItem("user"));

const handleExit = () => {
  Swal.fire({
    title: "¿Desea cerrar sesión?",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("user");
      Swal.fire({
        title: "Gracias por visitarnos",
      });
      setTimeout(() => {
       window.location.href = "../";},1600)
    }
  });
};
</script>

<style scoped>
#nav {
  text-align: center;
  padding: 0;
  margin: 0;
}
#nav a {
  font-weight: bold;
  color: #ffffff;
  height: 10vh;
  width: 12vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif !important;
  font-weight: 800;
}

.exit {
  font-size: 4vh;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar {
  background-color: #007bff;
  height: 10vh;
  padding: 0;
}
#nav a.router-link-exact-active {
  color: #fff;
  background: #039be5;
}

#nav a:hover {
  color: #fff;
  background: #039ae56b;
}

@media screen and (max-width: 991px) {
  .navbar {
    height: 100%;
  }

  #tog {
    margin: 5px;
  }

  #nav a {
    width: 100%;
  }
}
</style>
