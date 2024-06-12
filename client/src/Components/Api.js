import axios from "axios";

const baseURL = "https://bloodbankapi.vercel.app/";

export default axios.create({ baseURL: baseURL });
