<template>
  <div class="modal" v-show="show">
    <div class="modal-container">
      <h2 class="text-center" style="font-family: 'Poppins'; font-weight: 800">
        {{ title }}
      </h2>
      <div class="modal-content">
        <div v-if="title === 'Registrarse'">
          <n-avatar
            src="./src/assets/logo.png"
            alt="Logo de mi sitio web"
            class="logo"
          />
          <n-form ref="formRegisterRef">
            <n-space vertical>
              <n-label>Nombre:</n-label>
              <input placeholder="Ingrese el nombre" />
              <n-label>Apellido:</n-label>
              <input placeholder="Ingrese el apellido" />
              <n-label>Correo:</n-label>
              <input placeholder="Ingrese el correo" />
              <n-label>Contraseña:</n-label>
              <input placeholder="Ingrese contraseña" type="password" />
              <n-label>Teléfono:</n-label>
              <input placeholder="Ingrese su teléfono" type="number" />
            </n-space>
            <n-space>
              <button class="buttons" @click="checkRegister()">
                Ingresar <n-icon> <LogIn /></n-icon>
              </button>
              <button class="buttons" @click="toggleModal">
                Cerrar <n-icon> <CloseCircle /></n-icon>
              </button>
            </n-space>
          </n-form>
        </div>
        <div v-if="title === 'Iniciar sesión'">
          <n-avatar
            src="./src/assets/logo.png"
            alt="Logo de mi sitio web"
            class="logo"
          />
          <n-form ref="formLoginRef">
            <n-space vertical>
              <n-label>Correo:</n-label>
              <input placeholder="Ingrese correo" v-model="correo" />
              <n-label>Contraseña:</n-label>
              <input
                placeholder="Ingrese contraseña"
                type="password"
                v-model="contrasena"
              />
            </n-space>
            <n-space>
              <button class="buttons" @click="checkUser()">
                Ingresar <n-icon> <LogIn /></n-icon>
              </button>
              <button class="buttons" @click="toggleModal">
                Cerrar <n-icon> <CloseCircle /></n-icon>
              </button>
            </n-space>
          </n-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CloseCircle, LogIn } from "@vicons/ionicons5";
import Swal from "sweetalert2";

export default {
  components: { CloseCircle, LogIn, Swal },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      show: true,
      correo: "",
      contrasena: "",
      users: [
        { correo: "abc@gmail.com", contrasena: "123456" },
        { correo: "usuario2@ejemplo.com", contrasena: "contrasena2" },
        { correo: "usuario3@ejemplo.com", contrasena: "contrasena3" },
      ],
    };
  },
  methods: {
    openRegistrationModal() {
      this.title === "Registrarse";
      this.toggleModal();
    },
    toggleModal() {
      this.show = !this.show;
    },
    checkUser() {
      console.log("correo:", this.correo);
      console.log("contrasena:", this.contrasena);
      const userFound = this.users.find(
        (user) =>
          user.correo === this.correo && user.contrasena === this.contrasena
      );
      console.log("userFound:", userFound);
      if (userFound !== undefined) {
        Swal.fire({
          icon: "success",
          title: "¡Bienvenido/a!",
          timer: 1500,
          showConfirmButton: false,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        this.show = false;
      } else {
        Swal.fire({
          title: "No estas registrado",
          text: "¿Deseas registrarse?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sí",
        }).then((result) => {
          if (result.isConfirmed) {
            this.openRegistrationModal();
          }
        });
      }
    },
    checkRegister(){
      
    }
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  font-family: "Poppins", sans-serif !important;
  font-weight: 800;
}

.modal-container {
  background-color: #039be5;
  width: 30%;
  max-width: 800px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  color: #fff;
}

.buttons {
  display: block;
  background-color: #ffc90a;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  height: 30px;
  color: black;
  font-family: "Poppins", sans-serif !important;
  font-weight: 600;
  margin-top: 12px;
}
.n-icon {
  margin-top: 4px;
}
.n-avatar {
  width: 80px;
  height: 80px;
  margin-left: 40%;
  background: transparent;
}

.modal-content {
  border: none;
  background: #039be5;
  color: white;
}

.n-form {
  margin-top: -12px;
  margin-bottom: 18px;
}
input {
  border-radius: 4px;
  border: none;
  font-family: "Poppins", sans-serif !important;
  width: 100%;
}
</style>
