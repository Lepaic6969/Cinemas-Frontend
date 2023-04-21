import {defineStore} from 'pinia';
//Importamos los helpers de las peticiones HTTP.
import fetchData from  '../../../../helpers/fetchData' 

const URL= 'https://movies-project-production-bb22.up.railway.app/api/v1/cinemas';
export const  useMovieStore=defineStore('movie',{
    state:()=>({
        elements:[
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
        ],
    }),
    actions:{
        async getElements(){
           const {data}=await fetchData(URL);
           this.elements=data.reverse();
           this.sortById();
           
        },
        
        getElementById(id){
            const index=this.elements.map(el=>el._id).indexOf(id);
            console.log(id, this.elements[id])
            //return this.elements[index]; 
            return this.elements[id]; 
        },
        
        async addElement(cinema){
            this.elements.push(cinema);
            //Petición HTTP...
            /*
             const data={name:cinema.name}
             await fetchData(URL,'post',data);
             */
            
        },
        async updateElement(id,newCinema){ 
            const index=this.elements.map(el=>el._id).indexOf(id); //El índice que debo alterar.
            //this.elements[index]=newCinema;
            this.elements[id]=newCinema;
            //Petición HTTP...
            
            /*const url=`${URL}/${id}`;
            const data={name:newCinema.name};
            console.log(data);
            await fetchData(url,'put',data); ///PUT
            */
        },
        async deleteElement(id){
            const index=this.elements.map(el=>el._id).indexOf(id); //El índice que debo borrar.
            //this.elements.splice(index,1);
            this.elements.splice(id,1);
            //Petición HTTP...
            /*
            const url=`${URL}/${id}`;
            await fetchData(url,'delete');
            */
        }, 

    }
    
});