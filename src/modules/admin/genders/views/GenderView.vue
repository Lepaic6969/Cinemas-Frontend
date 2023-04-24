<template>
    <BottonOffCanvas/>
   <div class="container-md container-fluid mt-5 table-responsive">
      <TableTitle title="Géneros" id="offcanvasTypes" :createAction="createAction" />
      
      <LoadingSpinner v-if="cargando"/>
      <EmptyElements title="Cinemas" v-if="elements.length<=0 && !cargando"/>
      <table  v-if="elements.length>0 && !cargando"
        class="table bg-white bg-opacity-75 mt-3 w-100 text-center"
        >
        <!--v-if="references.length!==0"-->
        <thead>
            <tr> 
                <th scope="col">Nombre</th> 
                <th scope="col">Opciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="element in elements" :key="element" >    
                <td>{{ element.name }}</td> 
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
                    @click="deleteConfirmed(element.id)"
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
        <genderOffCanvas/> 
    </formCanvas>
    <OffCanvasMovies/>
    </div>
  </template>
  
<script setup>
    import {NIcon} from "naive-ui";
    import { TrashSharp} from "@vicons/ionicons5";
    import { Create, Film} from "@vicons/ionicons5";
    import { storeToRefs } from "pinia";
    import { onMounted } from "vue";
    import Swal from "sweetalert2";

    //components
    import TableTitle from "../../main/components/TableTitle.vue";
    import formCanvas from "../../main/components/FormCanvas.vue";
    import genderOffCanvas from "../components/genderOffCanvas.vue"
    import OffCanvasMovies from "../../main/components/OffCanvasMovies.vue"
    import BottonOffCanvas from "../../main/components/BottonOffCanvas.vue";
    import LoadingSpinner from "../../main/components/LoadingSpinner.vue"
    import EmptyElements from "../../main/components/EmptyElements.vue"
   
    //import store
    import {useOffCanvasStore} from '../store/offcanvas.js';
    import {useGenderStore} from '../store/gender' 
    
    //instanciar store
    const useOffCanvas = useOffCanvasStore();
    const useGender = useGenderStore()

    //usar variables y metodos
    const {updateAction, createAction} = useOffCanvas;

    const {elements, cargando} = storeToRefs(useGender)
    const {getElements, deleteElement} = useGender

    const deleteConfirmed = (id) => {
        Swal.fire({
            title: "¿Desea eliminar este elemento?",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            showCancelButton: true, 
            confirmButtonText: 'Si'
            }).then((result) => {
            if (result.isConfirmed) {
                deleteElement(id) 
        }
        })
    }
    
    onMounted(() => {
        getElements();
    });
  </script>
  
  <style></style>