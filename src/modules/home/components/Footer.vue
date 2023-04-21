<template>
  <footer class="footer-container" style="background-color: #2c3e50;">
<n-row>
  <n-col span="8">
    <div class="logo-container">
   <a href="../">
      <n-avatar src="./src/assets/a.png" alt="Logo de mi sitio web" class="logo" />
    </a>
    </div>
  </n-col>
  <n-col span="8">
       <div class="social-container">
  
    <div class="copy-container">
           <h3 class="company-name" style="color: #fff;">Nombre de la Empresa</h3>
      <p style="color: #fff;">© 2023 Nombre de la Empresa. Todos los derechos reservados.</p>
    </div>
  </div>
  </n-col>
  <n-col span="8">
    <div class="social-container">
      <a href="#" class="social-button">
        <n-icon  size="24" color="#38A1F3">
          <LogoTwitter/>
        </n-icon>
      </a>
      <a href="#" class="social-button">
        <n-icon  size="24" color="#4267b2">
          <LogoFacebook/>
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
  components: {
  LogoInstagram, LogoFacebook, LogoTwitter
  },
}
</script>

<style scoped>
.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.05rem ;
  font-family: "Poppins", sans-serif !important;
  font-weight: 800;
}

.logo-container {
  display: flex;
  align-items: center;
  margin-top: 1.4rem;
}


.copy-container {
  text-align: center;
  margin: 1rem 0;
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
  width: 14rem;
  height: 14vh;
  background: transparent;
}

</style>
