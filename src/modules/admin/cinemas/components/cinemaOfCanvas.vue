<template>
    <div >
        <h2 class="mb-5 text-center">{{title}}</h2>
        <form @submit.prevent="processForm">
            <div class="form-group mb-2">
                <label for="image" class="mb-2">Seleccionar Logo:</label>
                <input type="file" name="image" class="form-control w-100" id="image" @change="onFileSelected" >
            </div>
            <div class="form-group mb-2">
                <label for="name " >Nombre:</label>
                <input type="text" class="form-control mt-2" id="name" placeholder="Ingrese el nombre" v-model="name"> 
            </div>
            <div class="form-group mb-2">
                <label for="name " >Ciudad:</label>
                <input type="text" class="form-control mt-2" id="city" placeholder="Ingrese la Ciudad" v-model="city"> 
            </div>
            <div class="form-group mb-2">
                <label for="name " >Dirección:</label>
                <input type="text" class="form-control mt-2" id="address" placeholder="Ingrese la Dirección" v-model="address"> 
            </div>
            <div class="form-group mb-2">
                <label for="name " >Teléfono:</label>
                <input type="text" class="form-control mt-2" id="phone" placeholder="Ingrese el Teléfono" v-model="phone"> 
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
    import {useCinemaStore} from '../store/cinema' 
    import {useOffCanvasStore} from '../store/offcanvas' 

    //instanciar store's
    const useCinema = useCinemaStore()
    const useOffCanvas = useOffCanvasStore()

    //variables y metodos de las store's
    const {addElement, getElementById, updateElement} = useCinema

    const {create,id,title,buttonText}=storeToRefs(useOffCanvas);

    //variables reactivas
    const name= ref('');
    const city= ref('');
    const address= ref('');
    const phone= ref('');
    const logo= ref('');

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
            city.value === "" ||
            address.value === "" ||
            phone.value === "" ){
            return false
            //campos incompletos
        }
        //campos completos
        return true
    }
    //reset inputs
    const resetInputs = () => {
        name.value = ''
        city.value = ''
        address.value = ''
        phone.value= ''
    }
    const createItem=()=>{
             
        const element={ 
            name:name.value, 
            city: city.value , 
            address: address.value , 
            phone: phone.value,
        }

        addElement(element);
        resetInputs()
         
    }

    const updateItem=()=>{
        const newElement={
            _id:id.value, 
            name:name.value, 
            city: city.value , 
            address: address.value , 
            phone: phone.value,
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
            city.value  = item.city
            address.value = item.address
            phone.value = item.phone
            console.log(name.value)
        }else{
            name.value='1'
            city.value = '2'
            address.value = '3'
            phone.value = '4'
        }
    })

</script>

<style>

</style>