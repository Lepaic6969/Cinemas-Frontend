<template>
  <div>
    <h2 class="mb-5 text-center">{{ title }}</h2>
    <form @submit.prevent="processForm">
      <div class="form-group mb-2">
        <label for="image" class="mb-2">Seleccionar Logo:</label>
        <input
          type="file"
          name="image"
          class="form-control w-100"
          id="image"
          @change="onFileSelected"
        />
      </div>
      <div class="form-group mb-2">
        <label for="name ">Nombre:</label>
        <input
          type="text"
          class="form-control mt-2"
          id="name"
          placeholder="Ingrese el nombre"
          v-model="name"
        />
      </div>
      <div class="form-group mb-2">
        <label for="name ">Ciudad:</label>
        <input
          type="text"
          class="form-control mt-2"
          id="city"
          placeholder="Ingrese la Ciudad"
          v-model="city"
        />
      </div>
      <div class="form-group mb-2">
        <label for="name ">Dirección:</label>
        <input
          type="text"
          class="form-control mt-2"
          id="address"
          placeholder="Ingrese la Dirección"
          v-model="address"
        />
      </div>
      <div class="form-group mb-2">
        <label for="name ">Teléfono:</label>
        <input
          type="number"
          class="form-control mt-2"
          id="phone"
          placeholder="Ingrese el Teléfono"
          v-model="phone"
        />
      </div>
      <div class="form-group mb-2 mt-5">
        <button
          type="submit"
          class="btn btn-outline-warning btn-lg w-100"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          {{ buttonText }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import Swal from "sweetalert2";

//import store's
import { useCinemaStore } from "../store/cinema";
import { useOffCanvasStore } from "../store/offcanvas";

//instanciar store's
const useCinema = useCinemaStore();
const useOffCanvas = useOffCanvasStore();

//variables y metodos de las store's
const { addElement, getElementById, updateElement } = useCinema;

const { create, id, title, buttonText } = storeToRefs(useOffCanvas);
const { elements } = storeToRefs(useCinema);

//variables reactivas
const name = ref("");
const city = ref("");
const address = ref("");
const phone = ref("");
const logo = ref("");

//función del ormulario  => crear / editar
const processForm = () => {
  if (noEmpty()) {
    if (create.value && logo.value !== "") {
      createItem();
    } else {
      updateItem();
    }
  } else {
    Swal.fire("Formulario Incompleto", "Asegurese de llenar todos los campos", "error");
  }
};

//file select
const onFileSelected = (e) => {
  //("Entró a cargar el archivo...")
  logo.value = e.target.files[0];
  //("archivo cargado");
  image.value;
};

//verifica que los campos estén llenos
const noEmpty = () => {
  if (name.value === "" || city.value === "" || address.value === "" || phone.value === "") {
    return false;
    //campos incompletos
  }
  //campos completos
  return true;
};
//reset inputs
const resetInputs = () => {
  name.value = "";
  city.value = "";
  address.value = "";
  phone.value = "";
  logo.value = "";
};
const createItem = () => {
  const element = {
    name: name.value,
    city: city.value,
    address: address.value,
    phone: phone.value,
    logo: logo.value,
  };

  addElement(element);

  element;
};

const updateItem = () => {
  const newElement = {
    id: id.value,
    name: name.value,
    city: city.value,
    address: address.value,
    phone: phone.value,
    logo: logo.value,
  };
  updateElement(id.value, newElement);
  resetInputs();
};

//Asignar los datos en el form de editar
watch(title, () => {
  resetInputs();
  const index = elements.value.findIndex((obj) => obj.id === id.value); //El índice que debo alterar.
  const item = elements.value[index];
  if (item) {
    name.value = item.name;
    city.value = item.city;
    address.value = item.address;
    phone.value = item.phone;
    logo.value = item.phone;
  }
});
</script>

<style></style>
