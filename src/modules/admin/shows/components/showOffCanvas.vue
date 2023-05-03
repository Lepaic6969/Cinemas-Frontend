<template>
  <div>
    <h2 class="mb-5 text-center">{{ title }}</h2>
    <form @submit.prevent="processForm">
      <div class="form-group mb-2">
        <label for="name ">Sala:</label>
        <select
          name="select"
          class="form-select"
          aria-label="Default select example"
          v-model="room_id"
        >
          <option v-for="room in rooms" :key="room" :value="room">{{ room.name }}</option>
        </select>
      </div>

      <div class="form-group mb-2">
        <label for="name ">Capacidad: {{ room_id.capacity }}</label>
        <div class="row ms-2">
          <div class="col-4">
            <label>General: </label>
            <input class="form-control sm mt-2" type="number" placeholder="0" v-model="general" />
          </div>

          <div class="col-4">
            <label>Preferencial:</label>
            <input
              class="form-control sm mt-2"
              type="number"
              placeholder="0"
              v-model="preferencial"
            />
          </div>

          <div class="col-4">
            <label>Vip:</label>
            <input class="form-control sm mt-2" type="number" placeholder="0" v-model="vip" />
          </div>
        </div>
      </div>

      <div class="form-group mb-2">
        <label for="name ">Pelicula:</label>
        <input
          type="text"
          class="form-control mt-2"
          id="address"
          placeholder="Agregar pelicula"
          v-model="search"
          @click="toggleOptions"
        />

        <div
          v-if="showOptions && buscar.length"
          class="col-2"
          style="position: absolute; width: 85%; margin-top: 0rem"
        >
          <ul class="list-group">
            <li
              class="list-group-item list-group-item-action"
              v-for="item in buscar"
              :key="item"
              @click="selectSearch(item)"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
      <div class="form-group mb-2">
        <label for="name ">Fecha de Inicio:</label>
        <input
          type="date"
          class="form-control mt-2"
          id="city"
          placeholder="Fecha Inicio"
          v-model="start_date"
          :min="minDate"
        />
      </div>
      <div class="form-group mb-3">
        <label for="name ">Fecha de Fin:</label>
        <input
          type="date"
          class="form-control mt-2"
          id="address"
          placeholder="Fecha de Fin"
          v-model="end_date"
          :min="start_date"
        />
      </div>
      <div class="form-group mb-2">
        <label for="name ">Hora de la función:</label>
        <div class="row ms-2">
          <div class="col-4">
            <label>Hora: </label>
            <input
              type="number"
              class="form-control mt-2"
              id="phone"
              min="0"
              max="23"
              @input="limitarHora"
              placeholder="00 "
              v-model="hour"
            />
          </div>

          <div class="col-4">
            <label>Minutos:</label>
            <input
              class="form-control sm mt-2"
              type="number"
              min="0"
              max="59"
              @input="limitarMinuto"
              v-model="minutos"
              placeholder="00"
            />
          </div>
        </div>
      </div>
      <div class="form-group mb-2 mt-3">
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
import { ref, watch, computed } from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router"; //id
import Swal from "sweetalert2";

//import store's
import { useShowStore } from "../store/show";
import { useOffCanvasStore } from "../store/offcanvas";

//instanciar store's
const useShow = useShowStore();
const useOffCanvas = useOffCanvasStore();

//variables y metodos de las store's
const { addElement, getElementById, updateElement } = useShow;
const { create, id, title, buttonText } = storeToRefs(useOffCanvas);
const { elements, movies, rooms } = storeToRefs(useShow);
//variables reactivas
const sala = ref("");
const room_id = ref("");
const minDate = new Date().toISOString().slice(0, 10); // fecha actual en formato "yyyy-mm-dd"
const start_date = ref("");
const end_date = ref("");
const hour = ref("");
const movie_id = ref("");
const search = ref("");
const showOptions = ref(false);
const minutos = ref("");
const general = ref("");
const preferencial = ref("");
const vip = ref("");
//params
const route = useRoute();
const cinemaId = route.params.id;

//Funcionalidad del formulario.
const processForm = () => {
  if (noEmpty()) {
    if (create.value) {
      createItem();
    } else {
      updateItem();
    }
  } else {
    Swal.fire("Formulario Incompleto", "Asegurese de llenar todos los campos", "error");
  }
};

//verifica que los campos estén llenos
const noEmpty = () => {
  if (
    room_id.value === "" ||
    start_date.value === "" ||
    end_date.value === "" ||
    hour.value === "" ||
    movie_id.value === "" ||
    minutos.value == ""
  ) {
    "room_id: ",
      room_id.value,
      "start_date: ",
      start_date.value,
      "end_date: ",
      end_date.value,
      "hour: ",
      hour.value,
      "movie_id: ",
      movie_id.value;
    return false;
    //campos incompletos
  }
  //campos completos
  return true;
};
//reset inputs
const resetInputs = () => {
  room_id.value = "";
  start_date.value = "";
  end_date.value = "";
  hour.value = "";
  minutos.value = 0;
  movie_id.value = "";
  search.value = "";
  general.value = "";
  preferencial.value = "";
  vip.value = "";
};
const createItem = () => {
  const element = {
    room_id: room_id.value.id,
    start_date: start_date.value,
    end_date: end_date.value,
    hour: hour.value + " : " + minutos.value,
    movie_id: movie_id.value,
    general: general.value,
    preferencial: preferencial.value,
    vip: vip.value,
  };

  if (noRepeat(element)) {
    if (calcCapacity()) {
      addElement(element);
      resetInputs();
    }
  } else {
    Swal.fire("¡Sala Ocupada!", "Elija otro horario", "error");
  }
};

const updateItem = () => {
  const newElement = {
    room_id: room_id.value.id,
    start_date: start_date.value,
    end_date: end_date.value,
    hour: hour.value + " : " + minutos.value,
    movie_id: movie_id.value,
    general: general.value,
    preferencial: preferencial.value,
    vip: vip.value,
  }(newElement);

  if (noRepeat(newElement)) {
    if (calcCapacity()) {
      updateElement(id.value, newElement);
      resetInputs();
    }
  } else {
    Swal.fire("¡Sala Ocupada!", "Elija otro horario", "error");
  }
};

const calcCapacity = () => {
  const total = parseInt(general.value) + parseInt(preferencial.value) + parseInt(vip.value);

  if (total > room_id.value.capacity) {
    Swal.fire(
      "¡Sobrepasó la Capacidad!",
      "Reasigne las sillas Generales, preferenciales y Vip",
      "error"
    );
    return false;
  }

  if (total <= 0) {
    Swal.fire(
      "¡No agregó la capacidad!",
      "Reasigne las sillas Generales, preferenciales y Vip",
      "error"
    );
    return false;
  }
  return true;
};
const noRepeat = (nuevoShow) => {
  ("first");
  // Validación 1: no se repitan fecha y hora en la misma sala
  const showExistente = elements.value.find(
    (show) =>
      show.cinemaId === cinemaId &&
      show.room_id === nuevoShow.room_id &&
      show.start_date === nuevoShow.start_date &&
      show.end_date === nuevoShow.end_date &&
      show.hour.split(":")[0] === nuevoShow.hour.split(":")[0]
  );
  if (showExistente) {
    return false;
  }

  // Validación 2: no se superponga con otro show en la misma sala
  const showSuperpuesto = elements.value.find(
    (show) =>
      show.cinemaId === cinemaId &&
      show.room_id === nuevoShow.room_id &&
      nuevoShow.start_date < show.end_date &&
      nuevoShow.end_date > show.start_date &&
      nuevoShow.hour.split(":")[0] === show.hour.split(":")[0]
  );

  if (showSuperpuesto) {
    return false;
  }

  // Validación 3: el start_date y la hour del nuevo show en la sala no puede coincidir con el end_date y hour de otro show en la sala
  const showConflicto1 = elements.value.find(
    (show) =>
      show.cinemaId === cinemaId &&
      show.room_id === nuevoShow.room_id &&
      show.end_date === nuevoShow.start_date &&
      show.hour.split(":")[0] === nuevoShow.hour.split(":")[0]
  );

  if (showConflicto1) {
    return false;
  }

  // Validación 4: el end_date y la hour del nuevo show en la sala no puede coincidir con el start_date y hour de otro show en la sala
  const showConflicto2 = elements.value.find(
    (show) =>
      show.cinemaId === cinemaId &&
      show.room_id === nuevoShow.room_id &&
      show.start_date === nuevoShow.end_date &&
      show.hour.split(":")[0] === nuevoShow.hour.split(":")[0]
  );

  if (showConflicto2) {
    return false;
  }

  // Validación 5: si el show en la sala tiene el start_date y el end_date dentro del rango del start_date y end_date de otro show, no se puede agregar si es en la misma hora
  const showConflicto3 = elements.value.find(
    (show) =>
      show.cinemaId === cinemaId &&
      show.room_id === nuevoShow.room_id &&
      show.start_date <= nuevoShow.start_date &&
      show.end_date >= nuevoShow.end_date &&
      show.hour.split(":")[0] === nuevoShow.hour.split(":")[0]
  );

  if (showConflicto3) {
    return false;
  }

  ("second");
  return true;
};
//Este es el watch en composition API.
watch(title, () => {
  resetInputs();
  const index = elements.value.findIndex((obj) => obj.id === id.value); //El índice que debo alterar.
  const item = elements.value[index];
  const partesHora = item.hour.split(":");
  if (item) {
    room_id.value = item.room_id;
    start_date.value = item.start_date;
    end_date.value = item.end_date;
    hour.value = parseInt(partesHora[0]);
    minutos.value = parseInt(partesHora[1]);
    movie_id.value = item.movie_id;
  }
});

//no sobrepasar las hora
const limitarHora = () => {
  if (hour.value > 23) {
    hour.value = 23;
    //(hour)
  }
};

//no sobrepasar los minutos
const limitarMinuto = () => {
  if (minutos.value > 59) {
    minutos.value = 59;
    //(minutos)
  }
};

//buscador de peliculas
let buscar = computed(() => {
  if (search.value === "" || search.value === undefined) {
    return [];
  }
  let matches = 0;

  if (movies.value.length > 0) {
    return movies.value.filter((item) => {
      if (item.name.toLowerCase().includes(search.value.toLowerCase()) && matches < 10) {
        matches++;
        return item;
      }
    });
  } else {
    return [];
  }
});

//component select
const selectSearch = (item) => {
  movie_id.value = item.id;
  search.value = item.name;
  showOptions.value = false;
};

//toggle options
const toggleOptions = () => {
  showOptions.value = !showOptions.value;
};
</script>

<style></style>
