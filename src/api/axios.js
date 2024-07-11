import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://crm.creativesoftware.com.bd",
  // withCredentials: true,
});

export default axiosClient;

// export default axios.create({
//   baseURL: "http://localhost:8000",
//   withCredentials: true,
// });
