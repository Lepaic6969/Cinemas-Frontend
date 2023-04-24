import { defineStore } from 'pinia';


export const usePosterStore = defineStore('poster', {
    state: () => ({ 
        showModal :false,
    }),
    
    actions: {
        //Acciones para habilitar y desabilitar el modal
        handleClose() {
            this.showModal= false;
        },
        handleOpen(){
            this.showModal=true;
        },
    }
})