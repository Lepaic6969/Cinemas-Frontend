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
            //endpoint
            
            const data=await fetchData(URL);
            this.elements=data.body; 
            
            //localStoragee
            /* 
             const data = JSON.parse(localStorage.getItem('cinemas'))  
            if(data){
                this.elements=data 
                this.elements.reverse()
            }
            */
           
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
        
        async addElement(element){
            //endpoint
            
            const data={
                name:element.name, 
                city: element.city,
                address: element.address,
                phone: element.phone,
                logo: element.logo, 
            } 
            
            const formData = new FormData();
            for (const key in data) {
                formData.append(key, data[key]);
            } 
            await fetchDataImg(URL, 'post', formData);  
            this.getElements()
            
            //localStorage
            /*
            const data={
                id:this.elements.length,
                name:element.name, 
                city: element.city,
                address: element.address,
                phone: element.phone,
                logo: element.logo, 
            } 
            this.elements.push(data);
            this.setData()//
            console.log("add: ", data)
            */
        },

        async updateElement(id,newElement){ 
            //endpoint 
            const url=`${URL}/${id}`;
            const data={
                name:newElement.name, 
                city: newElement.city,
                address: newElement.address,
                phone: newElement.phone,
                logo: newElement.logo, 
            } 
            
            const formData = new FormData();
            for (const key in data) {
                formData.append(key, data[key]);
            } 
            
            await fetchData(url,'put',data); ///PUT
            
            this.getElements() 

            //localStoragee
            /*
            const index=this.elements.findIndex(obj => obj.id === id); //El índice que debo alterar.
            newElement.id=id
            console.log(id, newElement)
            this.elements[index]=newElement; 
            this.setData()
            */
        },
        
        async deleteElement(id){
            //endpoint
             
            const url=`${URL}/${id}`;
            await fetchData(url,'delete'); 
            this.getElements()
              

            //localStoragee
            /*
            const index=this.elements.findIndex(obj => obj.id === id); //El índice que debo alterar.
            this.elements.splice(index,1);
            //this.elements.splice(id,1);
            this.setData()
            */
        }, 
        
        setData(){
            localStorage.setItem('cinemas', JSON.stringify(this.elements))
            this.getElements()
        },
    }
    
});