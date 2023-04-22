<template>
    <BottonOffCanvas/>
    <div class="container-md container-fluid mt-5 table-responsive">
      <TableTitle title="Funciones" id="offcanvasTypes" />
      
      <table
        class="table bg-white bg-opacity-75 mt-3 w-100 text-center"
        >
        <!--v-if="references.length!==0"-->
        <thead>
            <tr>
                <th scope="col">Pelicula</th>
                <th scope="col">Fecha de Inicio</th>
                <th scope="col">Fecha de Fin</th> 
                <th scope="col">Hora</th> 
                <th scope="col">Opciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="element in elements" :key="element" >
                 
                <td>{{element.movie_id.name}}</td>
                <td>{{ element.start_date }}</td>
                <td>{{element.end_date}}</td>
                <td>{{element.hour}}</td>
 
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
        <showOffCanvas/> 
    </formCanvas>
    <OffCanvasCinemas/>
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
    import showOffCanvas from "../components/showOffCanvas.vue"
    import OffCanvasCinemas from "../../main/components/OffCanvasCinemas.vue"
    import BottonOffCanvas from "../../main/components/BottonOffCanvas.vue";

    //import store
    import {useOffCanvasStore} from '../store/offcanvas.js';
    import {useShowStore} from '../store/show' 
    
    //instanciar store
    const useOffCanvas = useOffCanvasStore();
    const useShow = useShowStore()

    //usar variables y metodos
    const {updateAction} = useOffCanvas;

    const {elements} = storeToRefs(useShow)
    const {getElements, deleteElement} = useShow

 
  </script>
  
  <style></style>