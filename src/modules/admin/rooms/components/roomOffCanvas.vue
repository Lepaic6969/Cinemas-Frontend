<template>
    <div >
        <h2 class="mb-5 text-center">{{title}}</h2>
        <form @submit.prevent="processForm">
            <div class="form-group mb-2">
                <label for="name " >Nombre:</label>
                <input type="text" class="form-control mt-2" id="name" placeholder="Ingrese el nombre" v-model="name"> 
            </div>
            <div class="form-group mb-2">
                <label for="name " >Capacidad:</label>
                <input type="number" class="form-control mt-2" id="name" placeholder="Ingrese la Capacidad Total" v-model="capacity"> 
            </div>
            <div class="form-group mb-2">
                <label for="name " >Estado:</label>
                <select name="select" class="form-select" aria-label="Default select example"  v-model="status">
                    <option value="libre" selected>Libre </option>
                    <option value="ocupado" >Ocupado </option>
                    <option value="inhabilitado">Inhabilitado </option>
                    <option value="habilitado">Habilitado </option>
                </select>
            </div> 
            <div class="form-group mb-2 mt-5">
                <button type="submit" class="btn btn-outline-warning btn-lg w-100" data-bs-dismiss="offcanvas"
                    aria-label="Close" >{{buttonText}}</button>
            </div>
        </form>
    </div>
</template>

<script setup>
    import {ref,watch} from 'vue' 
    import { storeToRefs } from 'pinia'; 
    import { useRoute } from 'vue-router';//id
    import Swal from "sweetalert2";

    //import store's
    import {useRoomStore} from '../store/room' 
    import {useOffCanvasStore} from '../store/offcanvas' 

    //instanciar store's
    const useRoom = useRoomStore()
    const useOffCanvas = useOffCanvasStore()

    //variables y metodos de las store's
    const {addElement, getElementById, updateElement} = useRoom
    const {create,id,title,buttonText}=storeToRefs(useOffCanvas);
    const {elements}=storeToRefs(useRoom);
    //variables reactivas
    const name= ref('');
    const capacity= ref('');
    const status= ref('');
    const route = useRoute();
    const cinemaId = route.params.id; 

    //Funcionalidad del formulario.
    const processForm=()=>{
        if(noEmpty()){
            if(create.value){
                createItem();
            }else{
                updateItem();
            }
        }else{
            Swal.fire(
            'Formulario Incompleto',
            'Asegurese de llenar todos los campos',
            'error'
            )
        }
    }

    //verifica que los campos estén llenos
    const noEmpty = () =>{
        if(name.value === "" ||
            capacity.value === "" || 
            status.value === "" 
            ){
            return false
            //campos incompletos
        }
        //campos completos
        return true
    }
    //reset inputs
    const resetInputs = () => {
        name.value = ''
        capacity.value = '' 
        status.value= ''
    }
    const createItem=()=>{
             
        const element={ 
            cinemaId:cinemaId,
            name:name.value, 
            capacity: capacity.value ,  
            status: status.value,
        }

        addElement(element);
        resetInputs()
         
    }

    const updateItem=()=>{
        const newElement={
            cinemaId:cinemaId,
            name:name.value, 
            capacity: capacity.value ,  
            status: status.value,
        }
        console.log(newElement)
        updateElement(id.value,newElement);
        resetInputs()
    }
        

    //Este es el watch en composition API.
    watch(title, ()=>{
        resetInputs()
        const index=elements.value.findIndex(obj => obj.id === id.value); //El índice que debo alterar.
        const item = elements.value[index]
        console.log(item)
        if(item){
            name.value=item.name
            capacity.value  = item.capacity 
            status.value = item.status
            console.log(name.value)
        }else{
            name.value=''
        }
    })

</script>

<style>

</style>