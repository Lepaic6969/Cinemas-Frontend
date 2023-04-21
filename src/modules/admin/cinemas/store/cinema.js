import {defineStore} from 'pinia';
//Importamos los helpers de las peticiones HTTP.
import fetchData from  '../../../../helpers/fetchData'//'../../../helpers/fetchData.js';

const URL= ' ';
export const  useCinemaStore=defineStore('cinemas',{
    state:()=>({
        elements:[
            {   
                id: 0,
                name: "cine 1",
                address: "address 1",
                city: "city 1",
                phone: "123123",
                logo:"../../../assets/img/logo.png" ,
            },
            {   
                id: 1,
                name: "cine 2",
                address: "address 2",
                city: "city 2",
                phone: "2341234",
                logo:"../../../assets/img/logo.png" ,
            },
            {   
                id: 2,
                name: "cine 3",
                address: "address 3",
                city: "city 3",
                phone: "345345",
                logo:"../../../assets/img/logo.png" ,
            },
        ],
    }),
    actions:{
        async getElements(){
            /*
           const {data}=await fetchData(URL);
           this.elements=data;
           this.sortById();
           */
        },
        
        getElementById(id){
            const index=this.elements.map(el=>el._id).indexOf(id);
            console.log(id, this.elements[id])
            //return this.elements[index]; 
            return this.elements[id]; 
        },
        
        addElement(cinema){
            this.elements.push(cinema);
            //Petición HTTP...
            /*
             const data={name:cinema.name}
             fetchData(URL,'post',data);
             */
            
        },
        updateElement(id,newCinema){ 
            const index=this.elements.map(el=>el._id).indexOf(id); //El índice que debo alterar.
            //this.elements[index]=newCinema;
            this.elements[id]=newCinema;
            //Petición HTTP...
            
            /*const url=`${URL}/${id}`;
            const data={name:newCinema.name};
            console.log(data);
            fetchData(url,'put',data); ///PUT
            */
        },
        deleteElement(id){
            const index=this.elements.map(el=>el._id).indexOf(id); //El índice que debo borrar.
            //this.elements.splice(index,1);
            this.elements.splice(id,1);
            //Petición HTTP...
            /*
            const url=`${URL}/${id}`;
            fetchData(url,'delete');
            */
        }, 

    }
    
});