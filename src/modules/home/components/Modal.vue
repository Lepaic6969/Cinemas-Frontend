<template>
  <div class="modal" v-if="show">
    <div class="modal-container">
      <h2 class="text-center">{{ title }}</h2>
      <div class="modal-content">  
        <div v-if="title === 'Registrarse'">
  
            <n-image src="./src/assets/logo.png" alt="Logo de mi sitio web" class="logo" />
            <n-form ref="formInstRef">
              <n-space vertical>
                <n-label>Nombre:</n-label>
                <n-input placeholder="Ingrese el nombre"/>
                <n-label>Apellido:</n-label>
                <n-input placeholder="Ingrese el apellido"/>
                <n-label>Correo:</n-label>
                <n-input placeholder="Ingrese el correo" type="email"/>
                <n-label>Contraseña:</n-label>
                <n-input placeholder="Ingrese contraseña" type="password"/>
                <n-label>Teléfono:</n-label>
                <n-input placeholder="Ingrese su teléfono" type="number"/>
              </n-space>
            </n-form>

        </div>
        <div v-if="title === 'Iniciar sesión'">
            <n-image src="./src/assets/logo.png" alt="Logo de mi sitio web" class="logo" />  
            <n-form ref="formInstRef">
               <n-space vertical>
                <n-label>Correo:</n-label>
                <n-input placeholder="Ingrese correo" type="email"/>
                <n-label>Contraseña:</n-label>
                <n-input  placeholder="Ingrese contraseña" type="password"/>
                </n-space>
            </n-form>
        </div>
      </div>
      <n-space >
      <button class="buttons" @click="toggleModal">Ingresar <n-icon> <LogIn/></n-icon></button>
       <button class="buttons" @click="toggleModal"> Cerrar <n-icon> <CloseCircle/></n-icon></button>
      </n-space>
    </div>
  </div>
</template>

<script>
import { CloseCircle, LogIn } from "@vicons/ionicons5";

export default {
  components: { CloseCircle, LogIn},
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      show: true,
      
    };
  },
  methods: {
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
  z-index: 1;
  font-family: "Poppins", sans-serif !important;
  font-weight: 800;
}

.modal-container {
  background-color: #039be5;
  width: 35%;
  max-width: 800px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  color:#fff;
}

.buttons {
  display: flex;
  background-color: #ffc90a;
  padding: 2px 16px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  height: 30px;
  color: black;
  margin-left: 15px;
}
.n-icon{
  margin-top: 4px;
}
.n-image{
  width: 80px;
  height: 80px;
  margin-left: 40%;
  margin-top: -1%;
}

.modal-content{
  border:none;
  background: #039be5;
  color: white;
}

.n-form{
  margin-bottom: 18px;
}

</style>
