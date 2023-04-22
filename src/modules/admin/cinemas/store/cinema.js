import {defineStore} from 'pinia';
//Importamos los helpers de las peticiones HTTP.
import fetchData from  '../../../../helpers/fetchData' 
import fetchDataImg from '../../../../helpers/fetchDataImg';
const URL= 'https://movies-project-production-bb22.up.railway.app/api/v1/cinemas';
export const  useCinemaStore=defineStore('cinemas',{
    state:()=>({
        elements:[
            /*
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
            },*/
        ],
    }),
    actions:{
        async getElements(){
           const data=await fetchData(URL);
           console.log(data)
           this.elements=data.body; 
           this.elements.reverse()
           
        },
        
        getElementById(id){
            console.log(id)
            this.elements.map(item=>{ 
                if(item.id===id){
                    console.log("store",item) 
                    return item; 
                }
                console.log("item: ", item)
            }) 
        },
        
        async addElement(cinema){
            //this.elements.push(cinema);
            //Petición HTTP...
            const data={
                name:cinema.name, 
                city: cinema.city,
                address: cinema.address,
                phone: cinema.phone,
                logo: cinema.logo, 
            } 
            
            const formData = new FormData();
            for (const key in data) {
                formData.append(key, data[key]);
            } 
            await fetchDataImg(URL, 'post', formData);  
            this.getElements()
        },
        async updateElement(id,newCinema){ 
            //const index=this.elements.map(el=>el._id).indexOf(id); //El índice que debo alterar.
            //this.elements[index]=newCinema;
            //this.elements[id]=newCinema;
            //Petición HTTP...
            
            const url=`${URL}/${id}`;
            const data={
                name:newCinema.name, 
                city: newCinema.city,
                address: newCinema.address,
                phone: newCinema.phone,
                logo: newCinema.logo, 
            } 
            
            const formData = new FormData();
            for (const key in data) {
                formData.append(key, data[key]);
            } 

            await fetchData(url,'put',data); ///PUT
           
            this.getElements()
        },
        async deleteElement(id){
            //const index=this.elements.map(el=>el._id).indexOf(id); //El índice que debo borrar.
            //this.elements.splice(index,1);
            //this.elements.splice(id,1);
            //Petición HTTP...
           
            const url=`${URL}/${id}`;
            await fetchData(url,'delete');
            
           
            this.getElements()
        }, 

    }
    
});