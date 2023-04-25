import {defineStore} from 'pinia';
import Swal from "sweetalert2";
//Importamos los helpers de las peticiones HTTP.
import fetchData from  '../../../../helpers/fetchData' 

const URL= 'https://movies-project-production-bb22.up.railway.app/api/v1/rooms';
export const  useRoomStore=defineStore('rooms',{
    state:()=>({
        elements:[/*
            {   
                id: 0,
                name: "Sala 1",
                capacity: 40, 
                status:'libre',
                cinemaId:2,
            },
            {   
                id: 1,
                name: "Sala 2",
                capacity: 40, 
                status:'ocupado',
                cinemaId:2,
            },
            {   
                id: 2,
                name: "Sala 3",
                capacity: 40, 
                status:'inhabilitado ',
                cinemaId:2,
            },
            {   
                id: 3,
                name: "Sala 4",
                capacity: 40, 
                status:'habilitado',
                cinemaId:2,
            },
            */
        ],
        cargando:true,
        id:null,//cinemaId eliminar
        dataLs:[]//eliminar
    }),
    actions:{
        async getElements(id){
            //endpoint 
            this.cargando= true
            try {
                const {data}=await fetchData(URL);
                console.log(data)
                this.id=id//cinemaId 
                if(data){  
                    this.elements= data.filter(obj => obj.cinema.id == this.id)  
                    this.elements.reverse() 
                } 
                this.cargando= false
            } catch (error) { 
                console.log(error)
                this.cargando= false
            } 
            //localStorage 
            /* 
            this.cargando=false
            this.id=id//cinemaId
            this.dataLs = JSON.parse(localStorage.getItem('rooms'))  
            if(this.dataLs){
                this.elements=this.dataLs.filter(obj => obj.cinemaId === this.id)  
                this.elements.reverse()
            }else{
                this.dataLs=[]
            }  
            */
            
        },
        
        getElementById(id){
            const index=this.elements.findIndex(obj => obj.id === id); //El índice que debo alterar.
            console.log(id, this.elements[id])
            //return this.elements[index]; 
            return this.elements[id]; 
        },
        
        async addElement(element){
            //endpoint 
            this.cargando= true
            const data={
                name: element.name,
                capacity: element.capacity,
                status: element.status,
                cinemaId: element.cinemaId,
                }
             console.log(data)
            await fetchData(URL,'post',data);
            this.alert("agregada")
            this.getElements() 

            //localStorage 
            /*  
            const data={ 
                id:this.dataLs.length,
                name: element.name,
                capacity: element.capacity,
                status: element.status,
                cinemaId: element.cinemaId,
             }
            this.dataLs.push(data) 
            this.alert("agregada")
            this.setData()//
            console.log("add: ", data) 
            */
        },
        async updateElement(id,newElement){ 
            //endpoint 
            this.cargando= true
            const url=`${URL}/${id}`;
            const data={
                name: newElement.name,
                capacity: newElement.capacity,
                status: newElement.status,
                cinemaId: newElement.cinemaId,
            } ;
            console.log(data);
            await fetchData(url,'put',data); ///PUT
            this.alert("actualizada")
            this.getElements()  

            //localStorage 
            /* 
            const index=this.dataLs.findIndex(obj => obj.id === id); //El índice que debo alterar.
            newElement.id=id
            this.dataLs[index]=newElement; 
            this.alert("actualizada")
            this.setData()  
            */
        },
        async deleteElement(id){ 
            //endPoint 
            this.cargando= true
            const url=`${URL}/${id}`;
            await fetchData(url,'delete');
            this.alert("eliminada")
            this.getElements() 

           //localStoragee 
            /* 
           const index=this.dataLs.findIndex(obj => obj.id === id); //El índice que debo alterar.
           this.dataLs.splice(index,1); 
            this.alert("eliminada")
           this.setData() 
            */
        }, 
        
        setData(){
             
            localStorage.setItem('rooms', JSON.stringify(this.dataLs))
            this.getElements(this.id)
        },

        alert(action){
            Swal.fire({ 
                icon: 'success',
                title: 'Sala '+action,
                showConfirmButton: false,
                timer: 1500
            }) 
        }

    }
    
});