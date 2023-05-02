<template>
  <div class="modal" v-show="show">
    <div class="modal-container">
      <h2 class="text-center" style="font-family: 'Poppins'; font-weight: 800">
        {{ title }}
      </h2>
      <div class="modal-content">
        <div v-if="title === 'Registrarse' || isRegisterModal">
          <n-avatar
            src="./src/assets/logo.png"
            alt="Logo de mi sitio web"
            class="logo"
          />
          <n-form ref="formRegisterRef">
            <n-space vertical>
              <n-label>Nombre:</n-label>
              <input placeholder="Ingrese el nombre" v-model="name" />
              <n-label>Apellido:</n-label>
              <input placeholder="Ingrese el apellido" v-model="lastName" />
              <n-label>Correo:</n-label>
              <input placeholder="Ingrese el correo" v-model="email" />
              <n-label>Contraseña:</n-label>
              <input
                placeholder="Ingrese contraseña"
                type="password"
                v-model="password"
              />
              <n-label>Teléfono:</n-label>
              <input
                placeholder="Ingrese su teléfono"
                v-model="phone"
                type="number"
              />
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
        <div v-if="title === 'Iniciar sesión' && !isRegisterModal">
          <n-avatar src="./src/assets/logo.png" alt="Logo" class="logo" />
          <n-form ref="formLoginRef">
            <n-space vertical>
              <n-label>Correo:</n-label>
              <input placeholder="Ingrese correo" v-model="email" />
              <n-label>Contraseña:</n-label>
              <input
                placeholder="Ingrese contraseña"
                type="password"
                v-model="password"
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
import fetchData from "../../../helpers/fetchData.js";

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
      name: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      role:"client",
      isRegisterModal: false,
    };
  },
  methods: {
    async checkRegister() {
      if (
        !this.name ||
        !this.lastName ||
        !this.email ||
        !this.password ||
        !this.phone
      ) {
        Swal.fire({
          title: "Campos incompletos",
          text: "Por favor, ingrese todos los campos requeridos.",
          icon: "warning",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
        return;
      }

      const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!correoRegex.test(this.email)) {
        Swal.fire({
          title: "Correo inválido",
          text: "Por favor, ingrese un correo válido.",
          icon: "warning",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
        return;
      }

      if (this.password.length < 6) {
        Swal.fire({
          title: "Contraseña inválida",
          text: "Por favor, ingrese una contraseña con al menos 6 caracteres.",
          icon: "warning",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
        return;
      }

      const telefonoRegex = /^\d{10}$/;
      if (!telefonoRegex.test(this.phone)) {
        Swal.fire({
          title: "Teléfono inválido",
          text: "Por favor, ingrese un teléfono válido (10 dígitos sin espacios ni guiones).",
          icon: "warning",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
        return;
      }

      const data = {
        name: this.name,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        phone: this.phone.toString(),
        role:this.role
      };

      try {      
       
        const response = await fetchData("/users","post",data);
        const result = response.data;
        Swal.fire({
          icon: "success",
          title: "Registro exitoso",
          text: "¡Gracias por registrarte!",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        }).then(() => {
          this.toggleModal();
        });
      } catch (error) {
        Swal.fire({
          title: "Error",
          text:
            "Ha ocurrido un error, por favor intente de nuevo más tarde",
          icon: "error",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
      }
    },

async checkUser() {
  if (
    !this.email ||
    !this.password 
  ) {
    Swal.fire({
      title: "Campos incompletos",
      text: "Por favor, ingrese todos los campos requeridos.",
      icon: "warning",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK",
    });
    return;
  }
  try {
    const response = await fetchData("/users/login", "post", {
      email: this.email,
      password: this.password,
    });
    const User = {
      email: this.email,
      password: this.password,
    }
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(User));
    setTimeout(() => {
  if(this.email === "admin@email.com"){
    this.$router.push("/admin");
  } else {
    window.location.reload();
  }
}, 1600); // Ejecutar después de 5 segundos

    if(!response){
      throw error
    }
    Swal.fire({
      icon: "success",
      title: "¡Bienvenido! " + this.email,
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
  } catch (error) {
    // If there was an error, show a message and give the option to register
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
        this.showRegisterModal();
      }
    });
  }
},


    showRegisterModal() {
      this.isRegisterModal = true;
      this.title = "Registrarse";
    },
    toggleModal() {
      this.show = !this.show;
    },
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
  z-index: 2;
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
  margin-left: 38%;
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
