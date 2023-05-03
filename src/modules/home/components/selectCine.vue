<template>
      <div class="modal" v-show="showModal">
    <div class="modal-content">
      <h1>Cinemas</h1>
      <select class="form-select" v-model="selectedCinema">
        <option disabled selected value="">Selecciona un cinema</option>
        <option v-for="cinema in cinemas" :key="cinema.id" :value="cinema">
          {{ cinema.name }}
        </option>
      </select>
    </div>
  </div>
</template>


<script>
import fetchData from "../../../helpers/fetchData.js";

export default {
  name: "Select",
  components: {
  },
  data() {
    return {
      cinemas: [],
      selectedCinema: null,
      showModal: true,
      user: JSON.parse(localStorage.getItem("user")),
    };
  },
  async mounted() {
    try {
      const data = await fetchData("/cinemas");
      this.cinemas = data.body;
    } catch (error) {
      alert(error)
    }

    const showModal = localStorage.getItem("showModal");
    this.showModal = showModal ? JSON.parse(showModal) : true;

    if (this.user === null) {
      localStorage.removeItem("showModal");
    }
  },
  watch: {
    selectedCinema: function () {
      localStorage.setItem("Sala", JSON.stringify(this.selectedCinema));
      this.showModal = false;
      localStorage.setItem("showModal", JSON.stringify(this.showModal));
      location.reload();
    },
  },
  methods: {},
};
</script>

<style scoped>
.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.01rem;
  font-family: "Poppins", sans-serif !important;
  font-weight: 800;
}

.logo-container {
  display: flex;
  align-items: center;
  margin-top: 1.4rem;
}

.modal {
  display: block;
  position: fixed;
  z-index: 9;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(255, 255, 255, 1);
  font-family: "Poppins", sans-serif !important;
  font-weight: 800;
}

.modal-content {
  background-color: #007bff;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 60%;
  text-align: center;
  color: #fff;
}

.copy-container {
  text-align: center;
}

.social-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.social-button {
  display: inline-block;
  margin: 0 0.8rem;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 0.8rem;
  transition: all 0.2s ease-in-out;
  margin-top: 2.5rem;
}

.social-button:hover {
  background-color: #fff;
  color: #2c3e50;
  cursor: pointer;
}

.logo {
  margin-left: 10px;
  width: 23vh;
  height: 23vh;
  background: transparent;
}
</style>
