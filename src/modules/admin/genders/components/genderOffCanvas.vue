<template>
    <div >
        <h2 class="mb-5 text-center">{{title}}</h2>
        <form @submit.prevent="processForm"> 
            <div class="form-group mb-2">
                <label for="name " >Nombre:</label>
                <input type="text" class="form-control mt-2" id="name" placeholder="Ingrese el nombre" v-model="name"> 
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
    import {useGenderStore} from '../store/gender' 
    import {useOffCanvasStore} from '../store/offcanvas' 

    //instanciar store's
    const useGender = useGenderStore()
    const useOffCanvas = useOffCanvasStore()

    //variables y metodos de las store's
    const {addElement, getElementById, updateElement} = useGender
    
    const {create,id,title,buttonText}=storeToRefs(useOffCanvas);
    const {elements}=storeToRefs(useGender);

    //variables reactivas
    const name= ref(''); 

    //función del ormulario  => crear / editar
    const processForm=()=>{
        if(noEmpty()){  
            if(create.value){
                createItem()
            }else{
                updateItem()
            } 
        }else{
            console.log("formulario tiene campo vacio")
        }
    }
 
    //verifica que los campos estén llenos
    const noEmpty = () =>{
        if(name.value === "") {
            return false
            //campos incompletos
        }
        //campos completos
        return true
    }
    //reset inputs
    const resetInputs = () => {
        name.value = ''
        
    }
    const createItem=()=>{ 
        const element={ 
            name:name.value,  
        }

        addElement(element);
        resetInputs() 
        console.log(element)
    }

    const updateItem=()=>{
        const newElement={
            id:id.value, 
            name:name.value, 
            
        } 
        updateElement(id.value,newElement);
        resetInputs()
    }
      
    //Asignar los datos en el form de editar
    watch(title, ()=>{ 
        resetInputs()
        const index=elements.value.findIndex(obj => obj.id === id.value); //El índice que debo alterar.
        const item = elements.value[index]
        if(item){
            name.value= item.name 
        } 
         
    })

</script>

<style>

</style>