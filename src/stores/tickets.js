import { defineStore } from 'pinia';


export const useTicketStore = defineStore('ticket', {
    state: () => ({ 
        data:[],
        rooms:[],
        schedules:[],
        roomSelected:null, //Este va a contener tanto la sala como el horario, se hace un doble filter y listo.
    }),
    
    actions: {
        setRooms(rooms=[]) {
            this.rooms= rooms;
        },
        setSchedules(id){
          const allObjects=this.data.filter(el=>el.Room.id===id);
          const allSchedules=allObjects.map(el=>el.hour);
          this.schedules=allSchedules;
           
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
        },
        setRoomSelected(id,hour){
          const allObjects=this.data.filter(el=>el.Room.id===id);//Filtro por id
          const Object=allObjects.filter(el=>el.hour===hour); //Filtro por hora
          this.roomSelected=Object;
        }
    }
})
