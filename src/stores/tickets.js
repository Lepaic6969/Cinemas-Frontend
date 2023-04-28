import { defineStore } from "pinia";
import fetchData from "../helpers/fetchData";

export const useTicketStore = defineStore("ticket", {
  state: () => ({
    data: [],
    rooms: [],
    schedules: [],
    roomSelected: null, //Este va a contener tanto la sala como el horario, se hace un doble filter y listo.

    // states-jasser
    ticketsBuy: {
      tickets: [],
      data: {
        status: true,
      },
    },

    ticketsToBuy: [],
    seats: [],
    total: 0,
  }),

  actions: {
    setRooms(rooms = []) {
      this.rooms = rooms;
    },
    setSchedules(id) {
      const allObjects = this.data.filter((el) => el.Room.id === id);
      const allSchedules = allObjects.map((el) => el.hour);
      this.schedules = allSchedules;
    },
    setData(data = []) {
      this.data = data;
      const totalRooms = this.data.map((el) => el.Room);

      //Esto es para quitar las salas repetidas y mostrar en el select tranquilo.
      const rooms = totalRooms.filter((EL, INDEX, ARR) => {
        return ARR.findIndex((el) => el.name === EL.name) === INDEX;
      });
      //Seteo las salas para poder mostrarlas en el primer select.
      this.setRooms(rooms);
    },
    setRoomSelected(id, hour) {
      const allObjects = this.data.filter((el) => el.Room.id === id); //Filtro por id
      const Object = allObjects.filter((el) => el.hour === hour); //Filtro por hora
      this.roomSelected = Object;
    },

    // actions-jasser

    async getSeats(id) {
      const { data } = await fetchData(`/tickets/movieRoom/${id}`);
      this.seats = data;
      // console.log(this.seats);
    },

    addTickets(ticket = {}) {
      const { id } = ticket;
      this.ticketsToBuy.push({ ...ticket });
      this.ticketsBuy.tickets.push(id.toString());
      this.total += ticket.price;
    },

    deleteTickets(id) {
      // console.log(id);
      const index = this.ticketsToBuy.findIndex((ticket) => ticket.id === id);
      const ticketBuy = this.ticketsBuy.tickets.findIndex((ticket) => ticket.id === id);
      this.total -= this.ticketsToBuy[index].price;
      this.ticketsToBuy.splice(index, 1);
      this.ticketsBuy.tickets.splice(index, 1);
    },
  },

  getters: {
    generalSeats() {
      if (this.seats.length > 0) {
        const generalSeats = this.seats.filter((seat) => seat.seatNumber.includes("G"));
        return generalSeats;
      }
    },
    vipSeats() {
      if (this.seats.length > 0) {
        const vipSeats = this.seats.filter((seat) => seat.seatNumber.includes("V"));
        return vipSeats;
      }
    },
    prefeSeats() {
      if (this.seats.length > 0) {
        const prefeSeats = this.seats.filter((seat) => seat.seatNumber.includes("P"));
        return prefeSeats;
      }
    },
  },
});
