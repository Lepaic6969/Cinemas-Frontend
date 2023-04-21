<template>
    <div >
        <h2 class="mb-5 text-center">{{title}}</h2>
        <form @submit.prevent="processForm"> 
            <div class="form-group mb-2">
                <label for="name " >Pelicula:</label>
                <input type="text" class="form-control mt-2" id="name" placeholder="Elija la Pelicula" v-model="movie_id.name"> 
            </div>
            <div class="form-group mb-2">
                <label for="name " >Fecha de Inicio:</label>
                <input type="text" class="form-control mt-2" id="city" placeholder="Fecha Inicio" v-model="start_date"> 
            </div>
            <div class="form-group mb-2">
                <label for="name " >Fecha de Fin:</label>
                <input type="text" class="form-control mt-2" id="address" placeholder="Fecha de Fin" v-model="end_date"> 
            </div>
            <div class="form-group mb-2">
                <label for="name " >Hora:</label>
                <input type="text" class="form-control mt-2" id="phone" placeholder="Hora " v-model="hour"> 
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
    import {useShowStore} from '../store/show' 
    import {useOffCanvasStore} from '../store/offcanvas' 

    //instanciar store's
    const useShow = useShowStore()
    const useOffCanvas = useOffCanvasStore()

    //variables y metodos de las store's
    const {addElement, getElementById, updateElement} = useShow
    const {create,id,title,buttonText}=storeToRefs(useOffCanvas);

    //variables reactivas
    const name= ref('');
    const start_date= ref('');
    const end_date= ref('');
    const hour= ref('');
    const movie_id= ref('');

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
            start_date.value === "" ||
            end_date.value === "" ||
            hour.value === "" ||
            movie_id.value === "" ){
            return false
            //campos incompletos
        }
        //campos completos
        return true
    }
    //reset inputs
    const resetInputs = () => {
        name.value = ''
        start_date.value = ''
        end_date.value = ''
        hour.value= ''
        movie_id.value= ''
    }
    const createItem=()=>{
             
        const element={ 
            name:name.value, 
            start_date: start_date.value , 
            end_date: end_date.value , 
            hour: hour.value,
            movie_id: movie_id.value,
        }

        addElement(element);
        resetInputs()
         
    }

    const updateItem=()=>{
        const newElement={
            _id:id.value, 
            name:name.value, 
            start_date: start_date.value , 
            end_date: end_date.value , 
            hour: hour.value,
            movie_id: movie_id.value,
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
            start_date.value  = item.start_date
            end_date.value = item.end_date
            hour.value = item.hour
            movie_id.value = item.movie_id
            console.log(name.value)
        }else{
            name.value=''
            start_date.value = ''
            end_date.value = ''
            hour.value = ''
            movie_id.value = ''
        }
    })

</script>

<style>

</style>