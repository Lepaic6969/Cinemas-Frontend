import axios from "axios";
import Swal from "sweetalert2";

const fetchDataImg = async (
  url,
  method = "get",
  data = {},
  headers = {
    "Content-Type": "multipart/form-data",
    "x-access-token": `${
      localStorage.getItem("token") ||
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6ImFkbWluaXN0cmF0b3IiLCJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTY4MjM5MzA4NywiZXhwIjoxNjgyMzk2Njg3fQ.gs_k09ZisV8zm8YPZ-JKGDwugamfiQ58HxWVZ8WRSdY"
    }`,
  }
) => {
  "data: ", data;
  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });
    // (headers);
    ("response: ", response)("petición correcta");
    return response;
  } catch (error) {
    error;
    Swal.fire("Error", `${error}`, "error");
  }
};

export default fetchDataImg;
