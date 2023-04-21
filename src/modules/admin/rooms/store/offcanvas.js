import {defineStore} from 'pinia';

export  const  useOffCanvasStore = defineStore('offcanvas',{
    state:()=>({
        create:true,
        id:null,
        name:'',
        capacity:'',
        
        state: '',
        
    }),
    actions:{
        updateAction(id,name , capacity, state){
            this.create=false
            this.id=id
            this.name=name
            this.capacity=capacity 
            this.state=state 
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