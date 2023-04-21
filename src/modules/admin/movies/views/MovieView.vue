<template>
    <div class="container-md container-fluid mt-5 table-responsive">
      <TableTitle title="Peliculas" id="offcanvasTypes" />
      
      <table
        class="table bg-white bg-opacity-75 mt-3 w-100 text-center"
        >
        <!--v-if="references.length!==0"-->
        <thead>
            <tr> 
                <th scope="col">Imagen</th> 
                <th scope="col">Nombre</th>
                <th scope="col">Duración</th>
                <th scope="col">Trailer</th>
                <th scope="col">Opciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="element in elements" :key="element" >
                <td>
                    <img src={{element.image}} style="width: 6vh;"> 
                </td> 
                <td>{{ element.name }}</td>
                <td>{{element.duration}}</td>
                <td>{{element.trailer}}</td>  
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
        <movieOffCanvas/>
    
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
    import movieOffCanvas from "../components/movieOffCanvas.vue"
    
    //import store
    import {useOffCanvasStore} from '../store/offcanvas.js';
    import {useMovieStore} from '../store/movie' 
    
    //instanciar store
    const useOffCanvas = useOffCanvasStore();
    const useMovie = useMovieStore()

    //usar variables y metodos
    const {updateAction} = useOffCanvas;

    const {elements} = storeToRefs(useMovie)
    const {getElements, deleteElement} = useMovie

 
  </script>
  
  <style></style>