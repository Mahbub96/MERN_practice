import axios, { Axios } from "axios";
const baseURL = "http://192:168:0:111:5001/api/v1";

const client = axios.create({ baseURL });

export default client;
