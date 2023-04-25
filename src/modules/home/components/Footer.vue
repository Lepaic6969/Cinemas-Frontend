<template>
  <div>
    <div class="modal" v-show="showModal">
      <div class="modal-content">
        <h1>Cinemas</h1>
        <select class="form-select" v-model="selectedCinema">
          <option disabled selected value="">Selecciona un cinema</option>
          <option v-for="cinema in cinemas" :key="cinema.id" :value="cinema">
            {{ cinema.name }}
          </option>
        </select>
      </div>
    </div>
  </div>

  <div class="container"></div>

  <footer class="footer-container" style="background-color: #2c3e50">
    <n-row>
      <n-col span="8">
        <div class="logo-container">
          <a href="../">
             <n-avatar
             v-if="selectedCinema"
            :src="
              selectedCinema.logo
                ? selectedCinema.logo.secure_url
                : 'https://tradebharat.in/assets/catalogue/img/no-product-found.png'
            "
            class="logo"
            :alt="selectedCinema.name"
          />
          </a>
        </div>
      </n-col>
      <n-col span="8">
        <div class="social-container">
          <div class="copy-container">
            <h3 class="company-name" style="color: #fff" v-if="selectedCinema">
              {{ selectedCinema.name }}
            </h3>
            <p style="color: #fff" v-if="selectedCinema">
              © 2023 {{ selectedCinema.name }}. Todos los derechos reservados.
            </p>
            <p style="color: #fff" v-if="selectedCinema">
              Dirección: {{ selectedCinema.address }}.
            </p>
            <p style="color: #fff" v-if="selectedCinema">
              Ciudad: {{ selectedCinema.city }}.
            </p>
             <p style="color: #fff" v-if="selectedCinema">
              Teléfono: {{ selectedCinema.phone }}.
            </p>
          </div>
        </div>
      </n-col>
      <n-col span="8">
        <div class="social-container">
          <a href="#" class="social-button">
            <n-icon size="24" color="#38A1F3">
              <LogoTwitter />
            </n-icon>
          </a>
          <a href="#" class="social-button">
            <n-icon size="24" color="#4267b2">
              <LogoFacebook />
            </n-icon>
          </a>
          <a href="#" class="social-button">
            <n-icon size="24" color="#bc1888">
              <LogoInstagram />
            </n-icon>
          </a>
        </div>
      </n-col>
    </n-row>
  </footer>
</template>
<script>
import { LogoInstagram, LogoFacebook, LogoTwitter } from "@vicons/ionicons5";
import fetchData from "../../../helpers/fetchData.js";
export default {
  name: "footer",
  components: {
    LogoInstagram,
    LogoFacebook,
    LogoTwitter,
  },
  data() {
    return {
      cinemas: [],
      selectedCinema: null,
      showModal: true,
    };
  },
  async mounted() {
    try {
      const data = await fetchData("/cinemas");
      this.cinemas = data.body;
      console.log("Cinemas:", this.cinemas); // Agregado
    } catch (error) {
      console.error(error);
    }
  },
    watch: {
    selectedCinema: function () {
      this.closeModal();
    },
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.01rem;
  font-family: "Poppins", sans-serif !important;
  font-weight: 800;
}

.logo-container {
  display: flex;
  align-items: center;
  margin-top: 1.4rem;
}

.modal {
  display: block;
  position: fixed;
  z-index: 4;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
  font-family: "Poppins", sans-serif !important;
  font-weight: 800;
}

.modal-content {
  background-color: #007bff;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 60%;
  text-align: center;
  color: #fff;
}


.copy-container {
  text-align: center;
}

.social-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.social-button {
  display: inline-block;
  margin: 0 0.8rem;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 0.8rem;
  transition: all 0.2s ease-in-out;
  margin-top: 2.5rem;
}

.social-button:hover {
  background-color: #fff;
  color: #2c3e50;
  cursor: pointer;
}

.logo {
  margin-left: 10px;
  width: 23vh;
  height: 23vh;
  background: transparent;
}
</style>
