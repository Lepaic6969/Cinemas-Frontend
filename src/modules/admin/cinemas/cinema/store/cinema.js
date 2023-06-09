import { defineStore } from "pinia";
//Importamos los helpers de las peticiones HTTP.
import fetchData from "../../../../../helpers/fetchData";
import fetchDataImg from "../../../../../helpers/fetchDataImg";
const URL = "https://movies-project-production-bb22.up.railway.app/api/v1/cinemas";
export const useCinemaStore = defineStore("cinemas", {
  state: () => ({
    elements: [],
  }),
  actions: {
    async getElements() {
      const data = await fetchData(URL);
      data;
      this.elements = data.body;
      this.elements.reverse();
    },

    getElementById(id) {
      const index = this.elements.map((el) => el._id).indexOf(id);
      //(index, this.elements[index])
      //(id, this.elements[id])
      //return this.elements[index];
      return this.elements[index];
    },

    async addElement(cinema) {
      //this.elements.push(cinema);
      //Petición HTTP...
      const data = {
        name: cinema.name,
        city: cinema.city,
        address: cinema.address,
        phone: cinema.phone,
        logo: cinema.logo,
      };

      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }
      await fetchDataImg(URL, "post", formData);
      ("--------------------post-----------------");
      //this.getElements()
    },
    async updateElement(id, newCinema) {
      //const index=this.elements.map(el=>el._id).indexOf(id); //El índice que debo alterar.
      //this.elements[index]=newCinema;
      //this.elements[id]=newCinema;
      //Petición HTTP...

      const url = `${URL}/${id}`;
      const data = {
        name: newCinema.name,
        city: newCinema.city,
        address: newCinema.address,
        phone: newCinema.phone,
        logo: newCinema.logo,
      };

      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }

      await fetchDataImg(url, "put", data); ///PUT

      this.getElements();
    },
    async deleteElement(id) {
      //const index=this.elements.map(el=>el._id).indexOf(id); //El índice que debo borrar.
      //this.elements.splice(index,1);
      //this.elements.splice(id,1);
      //Petición HTTP...

      const url = `${URL}/${id}`;
      await fetchData(url, "delete");

      this.getElements();
    },
  },
});
