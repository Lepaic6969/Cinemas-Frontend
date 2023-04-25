import {defineStore} from 'pinia';

export  const  useOffCanvasStore = defineStore('offcanvas',{
    state:()=>({
        create:true,
        id:null,
        name:'',
        duration:'',
        trailer:'',
        image:'', 
        
    }),
    actions:{
        updateAction(id,name , duration, trailer, image){
            this.create=false
            this.id=id
            this.name=name
            this.duration=duration
            this.trailer=trailer
            this.image=image 
        },
        createAction(){
            this.create=true
            this.id=null
           
        },
    },
    getters:{
        title:(state)=>{
            return (state.create)?'Registro':`Actualizar ${state.name}`;
        },
        buttonText:(state)=>{
            return (state.create)?'Registrar':'Actualizar';
        }
    }
});