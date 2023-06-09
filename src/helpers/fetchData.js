import axios from "axios";
import Swal from "sweetalert2";

const baseURL = 'https://movies-project-production-bb22.up.railway.app/api/v1';

/**
 * Esta funcion realiza una solicitud HTTP utilizando axios.
 *
 * Ejemplo url - ruta: "/users".
 *
 * Ejemplo url - completa: "http://localhost:3000/users".
 * @param {string} url -  La ruta del endpoint al que se enviará la solicitud , si le pasas la url completa en este parametro se usara como endpoint
 * @param {string} method - El método HTTP utilizado para la solicitud (get, post, etc.), por defecto usa "get"
 * @param {Object{}} data - Los datos que se enviarán con la solicitud, por defecto es un obj vacio.
 * @returns {Promise<Object>} - Data retornada si la peticion es exitosa!.
 * @throws {Error} - Es un Error disparado, si la solicitud falla.
 */
const fetchData = async (url, method = "get", data = {}) => {
  const options = {
    url: url.includes("http") ? url : `${baseURL}${url}`,
    method,
    data,
    headers: {
      "Content-Type": "application/json",
      "x-access-token": `${localStorage.getItem("token") || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInJvbGUiOiJjbGllbnQiLCJlbWFpbCI6ImNhbWlsb0BnbWFpbC5jb20iLCJpYXQiOjE2ODMwNzgxMTMsImV4cCI6MTY4MzA4MTcxM30.0G2_o2i63Z4kT7Bgo6N2B_plmRLn91TXc-wt-1QlMNE"}`,
    },
  };
  try {
    const { data } = await axios(options);
    return data;
  } catch (error) {
    Swal.fire("Error", `${error.response.data.message}`, "error");
  }
};

export default fetchData;
