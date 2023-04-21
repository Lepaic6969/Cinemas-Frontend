<template>
    <div >
        <h2 class="mb-5 text-center">{{title}}</h2>
        <form @submit.prevent="processForm">
            <div class="form-group mb-2">
                <label for="image" class="mb-2">Seleccionar Imagen:</label>
                <input type="file" name="image" class="form-control w-100" id="image" @change="onFileSelected" >
            </div>
            <div class="form-group mb-2">
                <label for="name " >Nombre:</label>
                <input type="text" class="form-control mt-2" id="name" placeholder="Ingrese el nombre" v-model="name"> 
            </div>
            <div class="form-group mb-2">
                <label for="name " >Duración:</label>
                <input type="text" class="form-control mt-2" id="city" placeholder="Ingrese la Duración" v-model="duration"> 
            </div>
            <div class="form-group mb-2">
                <label for="name " >Trailer:</label>
                <input type="text" class="form-control mt-2" id="address" placeholder="Ingrese la trailer" v-model="trailer"> 
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
    //import store's
    import {useMovieStore} from '../store/movie' 
    import {useOffCanvasStore} from '../store/offcanvas' 

    //instanciar store's
    const useMovie = useMovieStore()
    const useOffCanvas = useOffCanvasStore()

    //variables y metodos de las store's
    const {addElement, getElementById, updateElement} = useMovie
    const {create,id,title,buttonText}=storeToRefs(useOffCanvas);

    //variables reactivas
    const name= ref('');
    const duration= ref('');
    const trailer= ref('');
    const image= ref(''); 

    //Funcionalidad del formulario.
    const processForm=()=>{
        if(noEmpty()){
            if(create.value){
                createItem();
            }else{
                updateItem();
            }
        }else{
            console.log("campo vacio")
        }
    }

    //verifica que los campos estén llenos
    const noEmpty = () =>{
        if(name.value === "" ||
            duration.value === "" ||
            trailer.value === "" ||
            image.value === "" ){
            return false
            //campos incompletos
        }
        //campos completos
        return true
    }
    //reset inputs
    const resetInputs = () => {
        name.value = ''
        duration.value = ''
        trailer.value = ''
        image.value= ''
    }
    const createItem=()=>{
             
        const element={ 
            name:name.value, 
            duration: duration.value , 
            trailer: trailer.value , 
            image: image.value,
        }

        addElement(element);
        resetInputs()
         
    }

    const updateItem=()=>{
        const newElement={
            _id:id.value, 
            name:name.value, 
            duration: duration.value , 
            trailer: trailer.value , 
            image: image.value,
        }
        console.log(newElement)
        updateElement(id.value,newElement);
        resetInputs()
    }
        

    //Este es el watch en composition API.
    watch(title, ()=>{
        
        let item=getElementById(id.value)
        if(item){
            name.value=item.name
            duration.value  = item.duration
            trailer.value = item.trailer
            image.value = item.image
            console.log(name.value)
        }else{
            name.value=''  
            duration.value=''
            trailer.value=''
            image.value=''
        }
    })

</script>

<style>

</style>