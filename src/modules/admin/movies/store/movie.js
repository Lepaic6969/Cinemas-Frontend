import { defineStore } from "pinia";
//Importamos los helpers de las peticiones HTTP.
import fetchData from "../../../../helpers/fetchData";
import fetchDataImg from "../../../../helpers/fetchDataImg";
import Swal from "sweetalert2";
const URL = "https://movies-project-production-bb22.up.railway.app/api/v1/movies";
//const URL= 'http://localhost:3000/api/v1/movies'
const URL2 = "https://movies-project-production-bb22.up.railway.app/api/v1/genres";
export const useMovieStore = defineStore("movie", {
  state: () => ({
    elements: [
      /*
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
    cargando: true,
    generos: [],
  }),
  actions: {
    async getElements() {
      //endpoint
      try {
        const data = await fetchData(URL);

        if (data) {
          this.elements = data.body;
          this.elements.reverse()(this.elements);
        }

        this.cargando = false;
      } catch (error) {
        error;
        this.cargando = false;
      }

      try {
        const data2 = await fetchData(URL2)(
          //generos
          "Generos:",
          data2.body
        );
        if (data2) {
          this.generos = data2.body;
        }
      } catch (error) {
        error;
      }

      //localStoragee
      /* 
            this.cargando=false
            const data = JSON.parse(localStorage.getItem('movies'))  
            this.generos = JSON.parse(localStorage.getItem('generos'))  
            
            if(data){
                this.elements=data 
                this.elements.reverse()
            }
            */
    },

    getElementById(id) {
      const index = this.elements.map((el) => el._id).indexOf(id);
      id, this.elements[id];
      //return this.elements[index];
      return this.elements[id];
    },

    async addElement(element) {
      //endpoint
      this.cargando = true;
      const { name, duration, trailer, image, id_genres } = element;
      const formData = new FormData();
      formData.append("name", name);
      formData.append("duration", duration);
      formData.append("trailer", trailer);
      formData.append("image", image);
      formData.append("id_genres", JSON.stringify(id_genres));

      try {
        const response = await fetch(URL, {
          method: "POST",
          body: formData,
        });
        formData.id_genres;
        const data = await response.json();
        if (response.ok) {
          this.alert("agregada");
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        error.message;
        this.alert(error.message);
      } finally {
        this.cargando = false;
      }
      this.getElements();
      //this.getElements()
      //localStorage
      /* 
            const data={
                id:this.elements.length,
                name:element.name,
                duration:element.duration,
                trailer: element.trailer,
                image:element.image,
                id_genres:element.id_genres
            }
            this.elements.push(data);
            this.alert("agregada")
            this.setData()//
            ("add: ", data)
            */
    },
    async updateElement(id, newElement) {
      //endpoint
      this.cargando = true;
      const { name, duration, trailer, image, id_genres } = newElement;
      const formData = new FormData();
      formData.append("name", name);
      formData.append("duration", duration);
      formData.append("trailer", trailer);
      formData.append("image", image);
      formData.append("id_genres", JSON.stringify(id_genres));
      const url = `${URL}/${id}`;
      try {
        const response = await fetch(url, {
          method: "PUT",
          body: formData,
        });
        const data = await response.json();
        if (response.ok) {
          this.alert("actualizada");
          this.getElements();
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        error.message;
        this.alert(error.message);
      } finally {
        this.cargando = false;
      }
      //localStorage
      /* 
            const index=this.elements.findIndex(obj => obj.id === id); //El índice que debo alterar.
            newElement.id=id
            (id, newElement)
            this.elements[index]=newElement; 
            this.alert("actualizada")
            this.setData()
            */
    },
    async deleteElement(id) {
      //endpoint
      this.cargando = false;
      const url = `${URL}/${id}`;
      await fetchData(url, "delete");
      this.alert("eliminada");
      this.getElements();

      //localStoragee
      /* 
            const index=this.elements.findIndex(obj => obj.id === id); //El índice que debo alterar.
            this.elements.splice(index,1);
            //this.elements.splice(id,1);
            this.alert("eliminada")
            this.setData()
            */
    },

    setData() {
      localStorage.setItem("movies", JSON.stringify(this.elements));
      this.getElements();
    },

    alert(action) {
      Swal.fire({
        icon: "success",
        title: "Pelicula " + action,
        showConfirmButton: false,
        timer: 1500,
      });
    },
  },
});
