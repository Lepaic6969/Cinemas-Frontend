import {defineStore} from 'pinia';
//Importamos los helpers de las peticiones HTTP.
import fetchData from  '../../../../helpers/fetchData'  
import fetchDataImg from '../../../../helpers/fetchDataImg';
import Swal from "sweetalert2";
const URL= 'https://movies-project-production-bb22.up.railway.app/api/v1/movies';
const URL2= 'https://movies-project-production-bb22.up.railway.app/api/v1/genres';
export const  useMovieStore=defineStore('movie',{
    state:()=>({
        elements:[/*
            {   
                id: 0,
                name: "movie 1",
                duration: "1 1",
                trailer: "trailer 1",
                image:  "../../../assets/img/logo.png" ,
            },
            {   
                id: 1, 
                name: "movie 2",
                duration: "1 1",
                trailer: "trailer 2",
                image:  "../../../assets/img/logo.png" ,
            },
            {   
                id: 2, 
                name: "movie 3",
                duration: "1 1",
                trailer: "trailer 3",
                image:  "../../../assets/img/logo.png" ,
            },
            */
        ],
        cargando:true,
        generos:[],
    }),
    actions:{
        async getElements(){
            //endpoint 
            /*
            try {
                const data=await fetchData(URL);
                const data2=await fetchData(URL2)//generos
                this.generos=data2//generos 
                if(data){
                    this.elements=data 
                    this.elements.reverse()
                }
                this.cargando=false
            } catch (error) {
                this.cargando=false
            }
            */

            //localStoragee
            this.cargando=false
            const data = JSON.parse(localStorage.getItem('movies'))  
            this.generos = JSON.parse(localStorage.getItem('generos'))  
            
            if(data){
                this.elements=data 
                this.elements.reverse()
            }
           
        },
        
        getElementById(id){
            const index=this.elements.map(el=>el._id).indexOf(id);
            console.log(id, this.elements[id])
            //return this.elements[index]; 
            return this.elements[id]; 
        },
        
        async addElement(element){ 
            //endpoint
            /*
            this.cargando=false
            const data={
                name:element.name,
                duration:element.duration,
                trailer: element.trailer,
                image:element.image,
                genders:element.gender
            }
            const formData = new FormData();
            for (const key in data) {
                formData.append(key, data[key]);
            } 
            await fetchDataImg(URL, 'post', formData);  
            this.alert("agregada")
            this.getElements()
            */
            //localStorage
            const data={
                id:this.elements.length,
                name:element.name,
                duration:element.duration,
                trailer: element.trailer,
                image:element.image,
                genders:element.genders
            }
            this.elements.push(data);
            this.alert("agregada")
            this.setData()//
            console.log("add: ", data)
            
        },
        async updateElement(id,newElement){ 
            //endpoint
            /*
            this.cargando=false
            const data={
                name:newElement.name,
                duration:newElement.duration,
                trailer: newElement.trailer,
                image:newElement.image,
                genders:newElement.genders
            }
            const formData = new FormData();
            for (const key in data) {
                formData.append(key, data[key]);
            } 
            await fetchDataImg(URL, 'post', formData); 
            this.alert("actualizada") 
            this.getElements()
            */
            //localStorage
            const index=this.elements.findIndex(obj => obj.id === id); //El índice que debo alterar.
            newElement.id=id
            console.log(id, newElement)
            this.elements[index]=newElement; 
            this.alert("actualizada")
            this.setData()
        },
        async deleteElement(id){
            //endpoint
            /*
            this.cargando=false
            const url=`${URL}/${id}`;
            await fetchData(url,'delete'); 
            this.alert("eliminada")
            this.getElements()
            */

            //localStoragee
            const index=this.elements.findIndex(obj => obj.id === id); //El índice que debo alterar.
            this.elements.splice(index,1);
            //this.elements.splice(id,1);
            this.alert("eliminada")
            this.setData()
        }, 
        
        setData(){
            localStorage.setItem('movies', JSON.stringify(this.elements))
            this.getElements()
        },
        
        alert(action){
            Swal.fire({ 
                icon: 'success',
                title: 'Pelicula '+action,
                showConfirmButton: false,
                timer: 1500
            }) 
        }

    }
    
});