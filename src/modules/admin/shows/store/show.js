import { defineStore } from "pinia";
import Swal from "sweetalert2";
//Importamos los helpers de las peticiones HTTP.
import fetchData from "../../../../helpers/fetchData";
const URL = "https://movies-project-production-bb22.up.railway.app/api/v1/cinemas";
const URL2 = "https://movies-project-production-bb22.up.railway.app/api/v1/movies";
const URL3 = "https://movies-project-production-bb22.up.railway.app/api/v1/rooms";
export const useShowStore = defineStore("shows", {
  state: () => ({
    elements: [
      /*
            {   
                id: 0,
                start_date: "3/3/2023",
                end_date: "3/4/2023",
                hour: "6:00",
                movie_id:{id:0, name: "movie 1"},
                room_id:0 ,
            },
            {   
                id: 1,
                start_date: "3/3/2023",
                end_date: "3/4/2023",
                hour: "7:00",
                movie_id:{id:0, name: "movie 1"},
                room_id:0 ,
            },
            {   
                id: 2,
                start_date: "3/3/2023",
                end_date: "3/4/2023",
                hour: "8:00",
                movie_id:{id:0, name: "movie 1"},
                room_id:0 ,
            },
            */
    ],
    cargando: true,
    movies: [],
    rooms: [],
    id: null,
    dataLs: [],
  }),
  actions: {
    async getElements(id) {
      //endpoint
      /*
            this.id=id//cinemaId
            try {
                const data=await fetchData(URL);
                
                if(data){
                    this.elements = data
                    this.elements = this.elements.filter(obj => obj.cinemaId == this.id)
                    this.elements.reverse()
                }
                
                
                this.cargando=false
            } catch (error) {
                (error)
                this.cargando=false
            } 

            try{
                const data2=await fetchData(URL2)//movies
                this.generos=data2.body//movies 
            }catch (error){
                (error)
                this.cargando=false 
            }

            try{ 
                const data3=await fetchData(URL3)//rooms
                if(data3){
                    this.rooms=data2//rooms
                    this.rooms=this.rooms.filter(obj => obj.cinemaId === this.id)//filtrar por cinema

                } 
            }catch (error){
                (error)
                this.cargando=false 
            }
            //
            */
      //localStorage
      this.cargando = false;
      this.id = id; //cinemaId
      this.dataLs = JSON.parse(localStorage.getItem("shows"));
      this.movies = JSON.parse(localStorage.getItem("movies")); //movies
      this.rooms = JSON.parse(localStorage.getItem("rooms"))(
        //rooms
        this.rooms
      );
      this.rooms = this.rooms.filter((obj) => obj.cinemaId === this.id)(
        //filtrados
        this.dataLs
      );
      if (this.dataLs) {
        this.elements = this.dataLs.filter((obj) => obj.cinemaId == this.id);
        this.elements.reverse();
      } else {
        this.dataLs = [];
      }
    },

    getElementById(id) {
      const index = this.elements.map((el) => el._id).indexOf(id);
      id, this.elements[id];
      //return this.elements[index];
      return this.elements[id];
    },

    async addElement(element) {
      //endpoint
      /*
            this.cargando= true
            const data={ 
                cinemaId: this.id,
                room_id: element.room_id,
                start_date: element.start_date,
                end_date: element.end_date,
                hour: element.hour,
                movie_id: element.movie_id,
            }
             await fetchData(URL,'post',data);
            this.alert("agregado")
            this.getElements() 
            */
      //localStorage/
      const data = {
        cinemaId: this.id,
        room_id: element.room_id,
        start_date: element.start_date,
        end_date: element.end_date,
        hour: element.hour,
        movie_id: element.movie_id,
      };
      this.dataLs.push(data);
      this.alert("agregado");
      this.setData()(
        //
        "add: ",
        data
      );
    },
    async updateElement(id, newElement) {
      //endpoint
      /* 
            this.cargando= true
            const data={ 
                cinemaId: this.id,
                room_id: newElement.room_id,
                start_date: newElement.start_date,
                end_date: newElement.end_date,
                hour: newElement.hour,
                movie_id: newElement.movie_id,
            }
            (data);
            await fetchData(url,'put',data); ///PUT
            this.alert("actualizado")
            this.getElements()
            
            */
      //localStorage
      const index = this.dataLs.findIndex((obj) => obj.id === id); //El índice que debo alterar.
      newElement.id = id;
      this.dataLs[index] = newElement;
      this.alert("actualizado");
      this.setData();
    },
    async deleteElement(id) {
      //endPoint
      /*
            this.cargando= true
            const url=`${URL}/${id}`;
            await fetchData(url,'delete');
            this.alert("eliminado")
            this.getElements()
            */
      //localStoragee
      const index = this.dataLs.findIndex((obj) => obj.id === id); //El índice que debo alterar.
      this.dataLs.splice(index, 1);
      this.alert("eliminado");
      this.setData();
    },

    setData() {
      localStorage.setItem("shows", JSON.stringify(this.dataLs));
      this.getElements(this.id);
    },

    alert(action) {
      Swal.fire({
        icon: "success",
        title: "Show " + action,
        showConfirmButton: false,
        timer: 1500,
      });
    },
  },
});
