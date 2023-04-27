<template>
  <footer class="footer-container">
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
        <div class="social-container text-center" v-if="selectedCinema">
          {{ selectedCinema.name }}
          <br>
          © 2023 {{ selectedCinema.name }}. Todos los derechos reservados.
          <br>
          Dirección: {{ selectedCinema.address }}. 
          <br>
          Ciudad:
          {{ selectedCinema.city }}.
          <br>
           Teléfono: {{ selectedCinema.phone }}.
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

export default {
  name: "footer",
  props: {
    selectedCinema: {
      type: Object,
      required: true,
    },
  },
  components: {
    LogoInstagram,
    LogoFacebook,
    LogoTwitter,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Poppins", sans-serif !important;
  font-weight: 800;
  height: 100%;
  background: #2c3e50;
}

.logo-container {
  display: flex;
  align-items: center;
  height: 100%;
}


.social-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: white;
}

.social-button {
  display: inline-block;
  margin: 0 1rem;
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
  margin-left: 15%;
  width: 20%;
  height: 40%;
  background: transparent;
  animation: moveUpDown 4s infinite;
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
