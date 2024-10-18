import axios from "axios";
import { BASE_URL } from "./env_variables.ts";
const customFetch = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export default customFetch;
