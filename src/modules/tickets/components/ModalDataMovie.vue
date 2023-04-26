<template>
    <div>
      <n-loading-bar-provider>
        <n-message-provider>
          <n-notification-provider>
            <n-dialog-provider>
              <n-modal v-model:show="showModal" class="mx-auto">
                <n-card
                  class="color-text"
                  closable
                  @close="handleClose"
                  style="width: auto; max-width: 95%;min-width: 40%; min-height: 500px; height: auto"
                  title="Título de la Película  "
                  :bordered="false"
                  size="huge"
                  role="dialog"
                  aria-modal="true"
                >
                  
                  <form @submit.prevent="handleSubmit">
                    <div class="mb-3">
                      <label for="cinema" class="form-label text-white fs-4">Seleccione la Sala:</label>
                      <SelectComponent v-model="cinema" id="cinema" :data="[{id:1,name:'Sala 1'},{id:2,name:'Sala 2'},{id:3,name:'Sala 3'}]"/>
                    </div>
                    <div class="mb-3">
                      <label for="schedule" class="form-label text-white fs-4">Seleccione el Horario:</label>
                      <SelectComponent v-model="schedule" id="schedule" :data=" (cinema!=='')?([{id:1,name:'1 pm'},{id:2,name:'2 pm'},{id:3,name:'3 pm'}]):[] "/>
                    </div>
                    <button @click="handleClose">ADQUIRIR ASIENTOS</button>
                  </form>

                  
                </n-card>
              </n-modal>
            </n-dialog-provider>
          </n-notification-provider>
        </n-message-provider>
      </n-loading-bar-provider>
  
    </div>
  </template>
  
  <script setup>
  import {ref} from 'vue';
  import { usePosterStore } from "../../../stores/poster.js";
  import { storeToRefs } from "pinia";
  import SelectComponent from "./SelectComponent.vue";

  
  const posterStore = usePosterStore();
  const { showModal } = storeToRefs(posterStore);
  const { handleClose} = posterStore;

  //Variables reactivas que recibo desde el formulario.
  const cinema=ref('');
  const schedule=ref('');

  //Función que procesa el formulario
  const handleSubmit=()=>{
    console.log(cinema.value,schedule.value);
  }
  
  </script>
  
  
    <style scoped >
    .n-button{
      font-size: 20px;
    }
   
    .n-button:active,
    .n-button:focus,
    .n-button:hover {
    border-color: #131240 !important;
    box-shadow: 0 0 3px 1px #131240 !important;
    color: #131240;
  }
  
  .n-modal {
    background-color: #2b2b2b;
    border-radius: 20px;
  }
  
  h5 {
    color: #f2f2f2;
    text-align: center;
    margin-bottom: 40px;
    font-weight: 400;
  }
  button{
    display: block;
    margin: 60px auto;
    width:100% ;

    font-family: 'Roboto', sans-serif ;
    font-weight: 700;
    font-size: 15px;
    color:white;
    background-color: rgba(27, 144, 252, 1);
    height: 51px;
    border-radius: 53px;
    transition: all 0.5s ease;
}
button:hover{
    transform: scale(1.1);
}
  </style>
  