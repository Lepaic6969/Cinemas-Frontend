<template>
    <div class="container-md container-fluid mt-5 table-responsive">
      <TableTitle title="Salas" id="offcanvasTypes" />
      
      <table
        class="table bg-white bg-opacity-75 mt-3 w-100 text-center"
        >
        <!--v-if="references.length!==0"-->
        <thead>
            <tr> 
                <th scope="col">Nombre</th>
                <th scope="col">Capacidad</th> 
                <th scope="col">Estado</th>
                <th scope="col">Opciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="element in elements" :key="element" > 
                <td>{{ element.name }}</td>
                <td>{{element.capacity}}</td>
                <td>{{element.state}}</td> 
                <td >
                    <n-button strong   size="large"  round  color="#949494"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasTypes"
                     @click="updateAction(element.id, element.name , element.address, element.city, element.phone, element.logo)"
                    >
                        <n-icon size="30" style="margin-top: -6px">
                            <Create />
                        </n-icon>
                        <span style="margin-top: 5px; margin-left: 4px ">Actualizar</span>
                    </n-button> 

                    <n-button class="mx-2" strong   size="large" round   color="#DF0505"  
                    @click="deleteElement(element.id)"
                    >
                        <n-icon size="30" style="margin-top: -6px">
                            <TrashSharp />
                        </n-icon>
                        <span style="margin-top: 5px; margin-left: 4px">Borrar</span>
                    </n-button> 
                </td>
            </tr>
        </tbody>
    </table>

    <formCanvas> 
        <roomOffCanvas/>
    
    </formCanvas>
    </div>
  </template>
  
<script setup>
    import {NIcon} from "naive-ui";
    import { TrashSharp} from "@vicons/ionicons5";
    import { Create, Film} from "@vicons/ionicons5";
    import { storeToRefs } from "pinia";
    import { onMounted } from "vue";
    
    //components
    import TableTitle from "../../main/components/TableTitle.vue";
    import formCanvas from "../../main/components/FormCanvas.vue";
    import roomOffCanvas from "../components/roomOffCanvas.vue"
    
    //import store
    import {useOffCanvasStore} from '../store/offcanvas.js';
    import {useRoomStore} from '../store/room' 
    
    //instanciar store
    const useOffCanvas = useOffCanvasStore();
    const useRoom = useRoomStore()

    //usar variables y metodos
    const {updateAction} = useOffCanvas;

    const {elements} = storeToRefs(useRoom)
    const {getElements, deleteElement} = useRoom

 
  </script>
  
  <style></style>