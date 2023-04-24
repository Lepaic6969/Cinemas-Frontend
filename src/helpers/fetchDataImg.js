import axios from "axios";
import Swal from "sweetalert2";

const fetchDataImg = async (
  url,
  method = "get",
  data = {},
  headers = {
    "Content-Type": "multipart/form-data",
    "x-access-token":  `${localStorage.getItem("token") || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mywicm9sZSI6ImFkbWluaXN0cmF0b3IiLCJlbWFpbCI6ImFkbWluMkBnbWFpbC5jb20iLCJpYXQiOjE2ODIzMTYyMzcsImV4cCI6MTY4MjMxOTgzN30.1qoFRt3_5ZmF90MEvP3oMNGblQRXJhkXWPz26UfJe6E"}`,
  }
) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });
    // console.log(headers);
    console.log("petición correcta");
    return response;
  } catch (error) {
    console.log(error)
    Swal.fire("Error", `${error}`, "error");
  }
};

export default fetchDataImg;