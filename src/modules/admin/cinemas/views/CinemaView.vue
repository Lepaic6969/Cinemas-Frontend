<template>
    <div class="container-md container-fluid mt-5 table-responsive">
      <TableTitle title="Cinemas" id="offcanvasTypes" />
      
      <table
        class="table bg-white bg-opacity-75 mt-3 w-100 text-center"
        >
        <!--v-if="references.length!==0"-->
        <thead>
            <tr>
                <th scope="col">Logo</th>
                <th scope="col">Nombre</th>
                <th scope="col">Ciudad</th>
                <th scope="col">Dirección</th>
                <th scope="col">Telefono</th>
                <th scope="col">Visualizar</th>
                <th scope="col">Opciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="element in elements" :key="element" >
                <td>
                    <img :src="element.logo.secure_url" style="width: 6vw;" crossorigin="anonymous" > 
                </td>   
                <td>{{ element.name }}</td>
                <td>{{element.city}}</td>
                <td>{{element.address}}</td>
                <td>{{element.phone}}</td>

                <td>
                    <n-button strong   size="large"  round  color="#039be5">
                        <n-icon size="30" style="margin-top: -6px">
                            <Film />
                        </n-icon>
                        <span style="margin-top: 5px; margin-left: 4px">Administrar</span>
                    </n-button> 
                </td>
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
        <cinemaOffCanvas/>
    
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
    import cinemaOffCanvas from "../components/cinemaofCanvas.vue"
    
    //import store
    import {useOffCanvasStore} from '../store/offcanvas.js';
    import {useCinemaStore} from '../store/cinema' 
    
    //instanciar store
    const useOffCanvas = useOffCanvasStore();
    const useCinema = useCinemaStore()

    //usar variables y metodos
    const {updateAction} = useOffCanvas;

    const {elements} = storeToRefs(useCinema)
    const {getElements, deleteElement} = useCinema

    onMounted(() => {
        getElements();
    });
  </script>
  
  <style></style>