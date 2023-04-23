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
                <div class="row ms-2">
                    <div class="col-5">
                        <label  >Horas: </label>
                        <input class="form-control sm mt-2" type="number" min="0" max="23" v-model="horas">
                    </div>
                    
                    <div class="col-5">
                        <label  >Minutos:</label>
                        <input class="form-control sm mt-2" type="number" min="0" max="59" v-model="minutos">
                    </div> 
                </div>
            </div>
            <div class="form-group mb-2">
                <label for="name " >Trailer:</label>
                <input type="text" class="form-control mt-2" id="address" placeholder="Ingrese la trailer" v-model="trailer"> 
            </div> 
            <div class="form-group mb-2">
                <label for="name " >Generos:</label>
                <input type="text" class="form-control mt-2" id="address" placeholder="Agregar Genero" v-model="search"> 
                
                <div v-if="buscar.length" class="col-2" style="position: absolute; width: 85%; margin-top: 0rem;">
                    <ul class="list-group "> 
                        <li  class="list-group-item list-group-item-action" v-for="item in buscar" :key="item"  @click="selectSearch(item)">
                            {{ item.name }}
                        </li>
                    </ul>

                </div>

                <div v-if="generos" class="d-flex flex-wrap ">
                    <div class="mr-2 mb-2" v-for="(genero, index) in Generos" :key="genero">
                        <label class="name">
                            <span class="close" @click="deleteGenero(index)">X</span>
                            {{genero.name}}
                        </label>  
                    </div> 
                </div>
                 
            </div> 
            <div class="form-group mb-2 mt-5">
                <button type="submit" class="btn btn-outline-warning btn-lg w-100" data-bs-dismiss="offcanvas"
                    aria-label="Close" >{{buttonText}}</button>
            </div>
        </form>
    </div>
</template>

<script setup>
    import {ref,watch, computed, onMounted  } from 'vue' 
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
    const {elements, generos}=storeToRefs(useMovie);

    //variables reactivas
    const name= ref('');
    const duration= ref('');
    const horas= ref('');
    const minutos= ref('');
    const trailer= ref('');
    const image= ref(''); 
    const search= ref('')
    const Generos= ref([]) 
    
    

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

      //file select
    const onFileSelected=(e)=>{ 
        image.value = e.target.files[0]; 
    }
    //verifica que los campos estén llenos
    const noEmpty = () =>{
         
        if(name.value === "" ||
            horas.value === "" ||
            minutos.value === "" ||
            trailer.value === "" ||
            image.value === ""  ||
            Generos.value.length === []){
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
        horas.value = "" 
        minutos.value = "" 
        trailer.value = ''
        image.value= ''
        Generos.value=[]
    }
    const createItem=()=>{
        duration.value = horas.value +" : " +minutos.value     
        const element={ 
            name:name.value, 
            duration: duration.value , 
            trailer: trailer.value , 
            image: image.value,
            genders: Generos.value,//agregar generos
        }

        addElement(element);
        resetInputs()
         
    }

    const updateItem=()=>{
        duration.value = horas.value +" : " +minutos.value     
        const newElement={ 
            name:name.value, 
            duration: duration.value , 
            trailer: trailer.value , 
            image: image.value,
            genders: Generos.value,//agregar generos
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
        const partesHora = item.duration.split(":");
        console.log(partesHora[0], partesHora[1])
        if(item){
            name.value=item.name
            duration.value  = item.duration
            horas.value = parseInt(partesHora[0]) 
            minutos.value = parseInt(partesHora[1])
            trailer.value = item.trailer
            image.value = item.image
            Generos.value= item.genders
            //Generos.value=item.gender ,//agregar generos
            console.log(name.value)
        } 
    })

    //buscador de generos
    let buscar = computed(() => {  
        if (search.value === '' || search.value === undefined) {
            return []
        }
        let matches = 0
        if(generos.value.length>0){ 
            return generos.value.filter(item => { 
                if ( item.name.toLowerCase().includes(search.value.toLowerCase())
                    && matches < 10 ) 
                    { 
                        matches++ 
                        return item
                    }
                        
                })
            
        }else{
            return []
        }    
       
    })

    //component select
    const selectSearch = (item) =>{
        Generos.value.push(item)
        //filtrar repetidos
        Generos.value = Generos.value.filter((valor, indice, array) => {
            const primerIndice = array.findIndex(obj => obj.id === valor.id);
            return indice === primerIndice;
            });
        search.value=''
    }

    //eliminar un genero de la lista generada
    const deleteGenero = (id) => {
        Generos.value.splice(id, 1)
    }
</script>

<style scoped> 
.name{
    background: #f6cd37fa ;
    color:#039be5;
    border-radius: 15px;
    margin: .1rem;
    padding: 6px 6px  ;  
}
.name:hover{
    background: #ffc90a;
    color:#0b71a4; 
}

.close { 
    margin-inline: 2px;
    padding: 0px 6px; 
    text-align: center;
    justify-content: center;
    border-radius: 15px;
    border: 1px solid #0b71a4;
}

.close:hover{
    color: #000;
    border: 1px solid #000;
    border-radius: 15px;
    cursor: pointer;
}
 
</style>