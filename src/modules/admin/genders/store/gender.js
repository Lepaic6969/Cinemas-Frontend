import {defineStore} from 'pinia';
//Importamos los helpers de las peticiones HTTP.
import fetchData from  '../../../../helpers/fetchData' 
const URL= 'https://movies-project-production-bb22.up.railway.app/api/v1/genders';
export const  useGenderStore=defineStore('cinemas',{
    state:()=>({
        elements:[
            /*
            {   
                id: 0,
                name: "genero 1",
                 
            },
            {   
                id: 1,
                name: "genero 2",
                 
            },
            {   
                id: 2,
                name: "genero 3",
                 
            },*/
        ],
    }),
    actions:{
        async getElements(){
           //endpoint
            /*  
            const data=await fetchData(URL);
            this.elements=data.body; 
            this.elements.reverse()
            */
            //localStoragee 
            const data = JSON.parse(localStorage.getItem('generos'))
            if(data){
                this.elements=data 
                this.elements.reverse()
            }
           
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
            /*
            const data={
                name:cinema.name,  
            } 
            
            
            await fetchData(URL, 'post', data);  
            this.getElements()
            */
            //localStorage
            const data={
                id:this.elements.length,
                name:element.name, 
                    
            } 
            this.elements.push(data);
            this.setData()
            console.log("add: ", data)
        },

        async updateElement(id,newElement){ 
            //endpoint 
            /*
            const url=`${URL}/${id}`;
            const data={
                name:newElement.name,  
            } 
            await fetchData(url,'put',data); ///PUT
           
            this.getElements()
            */
            //localStorage
            const index=this.elements.findIndex(obj => obj.id === id); //El índice que debo alterar.
            newElement.id=id
            console.log(id, newElement)
            this.elements[index]=newElement; 
            this.setData()
        },

        async deleteElement(id){
            //endpoint
             
            const url=`${URL}/${id}`;
            await fetchData(url,'delete'); 
            this.getElements()
              

            //localStoragee
            const index=this.elements.findIndex(obj => obj.id === id); //El índice que debo alterar.
            this.elements.splice(index,1);
            //this.elements.splice(id,1);
            this.setData()
        }, 

        setData(){
            localStorage.setItem('generos', JSON.stringify(this.elements))
            this.getElements()
        },

    }
    
});