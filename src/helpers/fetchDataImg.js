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
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInJvbGUiOiJjbGllbnQiLCJlbWFpbCI6ImNhbWlsb0BnbWFpbC5jb20iLCJpYXQiOjE2ODMwNzgxMTMsImV4cCI6MTY4MzA4MTcxM30.0G2_o2i63Z4kT7Bgo6N2B_plmRLn91TXc-wt-1QlMNE"
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
