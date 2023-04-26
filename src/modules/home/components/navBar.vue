<template>
  <n-nav>

<n-avatar
  v-if="selectedCinema"
  :src="selectedCinema.logo ? selectedCinema.logo.secure_url : 'https://tradebharat.in/assets/catalogue/img/no-product-found.png'"
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
    <n-nav-item v-show="!loggedIn" @click="toggleRegisterModal"
      >Registrarse
      <n-icon>
        <PersonAddSharp />
      </n-icon>
    </n-nav-item>

    <n-nav-item @click="toggleLoginModal"
      >Iniciar sesión
      <n-icon>
        <PersonCircle />
      </n-icon>
    </n-nav-item>
  </n-nav>
  <Modal title="Registrarse" v-if="showRegisterModal"> </Modal>

  <Modal title="Iniciar sesión" v-if="showLoginModal"> </Modal>
</template>

<script>
import Modal from "./Modal.vue";
import { PersonAddSharp, PersonCircle } from "@vicons/ionicons5";

export default {
  name: "navbar",
  props: {
    selectedCinema: {
      type: Object,
      required: true,
    },
  },
  components: {
    PersonAddSharp,
    PersonCircle,
    Modal,
  },
  data() {
    return {
      showRegisterModal: false,
      showLoginModal: false,
      loggedIn: false,
    };
  },
  methods: {
    toggleRegisterModal() {
      this.showRegisterModal = !this.showRegisterModal;
    },
    toggleLoginModal() {
      this.showLoginModal = !this.showLoginModal;
    },
    handleLogoClick() {
      window.location.href = "../";
      this.loggedIn = !this.loggedIn
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
  margin-bottom: 8px;
  height: 10vh;
}

.logo {
  width: 9vh;
  height: 7vh;
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
