import { defineStore } from 'pinia';


export const useTicketStore = defineStore('ticket', {
    state: () => ({ 
        data:[],
        rooms:[],
        schedules:[],
        roomSelected:'', //Este va a contener tanto la sala como el horario, se hace un doble filter y listo.
    }),
    
    actions: {
        setRooms(rooms=[]) {
            this.rooms= rooms;
        },
        setSchedules(id){
          console.log(id);
            // this.schedules=schedules;
        },
        setData(data=[]){
          this.data=data;
          const totalRooms=this.data.map(el=>el.Room);

          //Esto es para quitar las salas repetidas y mostrar en el select tranquilo.
          const rooms=totalRooms.filter((EL,INDEX,ARR)=>{
            return ARR.findIndex(el=>el.name===EL.name) ===INDEX;
          });
          //Seteo las salas para poder mostrarlas en el primer select.
          this.setRooms(rooms);



          // //TODO: Una vez seteada la data debes setear también las salas.
          // const arregloOriginal = [
          //   { id: 1, nombre: 'Juan' },
          //   { id: 2, nombre: 'María' },
          //   { id: 3, nombre: 'Juan' },
          //   { id: 4, nombre: 'Pedro' },
          //   { id: 5, nombre: 'María' },
          //   { id: 6, nombre: 'Ana' }
          // ];
          
          // const arregloFiltrado = arregloOriginal.filter((objeto, indice, arreglo) => {
          //   return arreglo.findIndex(el => el.nombre === objeto.nombre) === indice;
          // });
          // console.log(arregloFiltrado);
          // const rooms=this.data.map(el=>el.Room);
          // console.log(rooms);
        }
    }
})
