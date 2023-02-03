import axios from "axios";

const flitterApi = axios.create({
  baseURL: "http://localhost:3001"
});

export default flitterApi;