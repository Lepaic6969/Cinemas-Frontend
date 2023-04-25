import {defineStore} from 'pinia';
import Swal from "sweetalert2";
//Importamos los helpers de las peticiones HTTP.
import fetchData from  '../../../../helpers/fetchData' 
const URL= 'https://movies-project-production-bb22.up.railway.app/api/v1/genres';
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
        cargando:true,
    }),
    actions:{
        async getElements(){
           //endpoint 
            try{
                const data=await fetchData(URL); 
                console.log(data)
                if(data){
                    this.elements=data.body; 
                    this.elements.reverse()
                    this.cargando= false
                }
            }catch(error){
                console.log(error)
                this.cargando= false
            } 
            //localStoragee 
            /* 
            this.cargando=false
            const data = JSON.parse(localStorage.getItem('generos'))
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
            this.cargando= true
            const data={
                name:element.name,  
            }  
            await fetchData(URL, 'post', data);  
             this.alert("agregado")
            this.getElements() 

            //localStorage 
            /* 
            const data={
                id:this.elements.length,
                name:element.name, 
                    
            } 
            this.elements.push(data);
            this.setData()
            this.alert("agregado")
            console.log("add: ", data) 
            */
        },

        async updateElement(id,newElement){ 
            //endpoint  

            this.cargando= true
            const url=`${URL}/${id}`;
            const data={
                name:newElement.name,  
            } 
            await fetchData(url,'put',data); ///PUT
            this.alert("actualizado")
            this.getElements() 

            //localStorage
            /* 
            const index=this.elements.findIndex(obj => obj.id === id); //El índice que debo alterar.
            newElement.id=id
            console.log(id, newElement)
            this.elements[index]=newElement; 
            this.alert("actualizado")
            this.setData()
            */
        },

        async deleteElement(id){
            //endpoint  
            this.cargando= true
            const url=`${URL}/${id}`;
            await fetchData(url,'delete'); 
            this.alert("eliminado")
            this.getElements() 
              

            //localStorage 
            /* 
            const index=this.elements.findIndex(obj => obj.id === id); //El índice que debo alterar.
            this.elements.splice(index,1);
            //this.elements.splice(id,1);
            this.alert("eliminado")
            this.setData() 
            */
        }, 

        setData(){
            localStorage.setItem('generos', JSON.stringify(this.elements))
            this.getElements()
        },
        alert(action){
            Swal.fire({ 
                icon: 'success',
                title: 'Genero '+action,
                showConfirmButton: false,
                timer: 1500
            }) 
        }

    }
    
});