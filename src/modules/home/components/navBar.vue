<template>
  <n-nav>
    <n-avatar
      v-if="selectedCinema"
      :src="
        selectedCinema.logo
          ? selectedCinema.logo.secure_url
          : './src/assets/a.png'
      "
      class="logo"
      :alt="selectedCinema.name"
      @click="handleLogoClick"
    />
    <n-avatar
      v-else
      src="./src/assets/a.png"
      alt="Logo de mi sitio web"
      class="logo"
    />

    <n-nav-item @click="openSelect"
      >Cinemas
      <n-icon>
        <FilmSharp />
      </n-icon>
    </n-nav-item>

    <n-nav-item v-if="!user" @click="toggleRegisterModal"
      >Registrarse
      <n-icon>
        <PersonAddSharp />
      </n-icon>
    </n-nav-item>
    <n-nav-item v-else @click="handleExit" class="ml-4"
      >{{ user.email }}
      <n-icon>
        <Exit />
      </n-icon>
    </n-nav-item>

    <n-nav-item v-if="!user" @click="toggleLoginModal"
      >Iniciar sesión
      <n-icon>
        <PersonCircle />
      </n-icon>
    </n-nav-item>
  </n-nav>

  <Modal title="Registrarse" v-if="showRegisterModal"> </Modal>

  <Modal title="Iniciar sesión" v-if="showLoginModal"> </Modal>

  <Modal title="Salir" v-if="showExit"> </Modal>
</template>

<script>
import Modal from "./Modal.vue";
import {
  PersonAddSharp,
  PersonCircle,
  Exit,
  FilmSharp,
} from "@vicons/ionicons5";
import Swal from "sweetalert2";

export default {
  name: "navbar",
  components: {
    PersonAddSharp,
    PersonCircle,
    Modal,
    Exit,
    FilmSharp,
  },
  data() {
    return {
      showRegisterModal: false,
      showLoginModal: false,
      user: JSON.parse(localStorage.getItem("user")),
      selectedCinema: JSON.parse(localStorage.getItem("Sala")),
      showModal: JSON.parse(localStorage.getItem("showModal")),
      aux: false,
    };
  },
  created() {
    this.aux = this.showModal = true;
  },
  methods: {
    openSelect() {
      localStorage.setItem("showModal", JSON.stringify(this.showModal));
      location.reload()
    },
    toggleRegisterModal() {
      this.showRegisterModal = !this.showRegisterModal;
    },
    toggleLoginModal() {
      this.showLoginModal = !this.showLoginModal;
    },
    handleLogoClick() {
      window.location.href = "../";
    },
    handleExit() {
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
          this.user = null;
          window.location.reload();
          this.showModal = true;
          Swal.fire({
            title: "Gracias por visitarnos",
          });
        }
      });
    },
  },
};
</script>

<style scoped>
n-nav {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  background-color: #007bff;
  padding: 5px;
  text-align: center;
  color: #fff;
  overflow: hidden;
  font-family: "Poppins", sans-serif !important;
  font-weight: 800;
  height: 10vh;
}

.logo {
  width: 4.2%;
  height: 85%;
  background: transparent;
  margin-right: auto;
  animation: moveUpDown 4s infinite;
  cursor: pointer;
}

n-nav-item:hover {
  color: #fff;
  background: rgb(0, 154, 154);
  cursor: pointer;
}

n-nav-item {
  display: flex;
  background: transparent;
  height: 8vh;
  width: 27vh;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  margin-right: 8px;
}

@keyframes moveUpDown {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(12px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
