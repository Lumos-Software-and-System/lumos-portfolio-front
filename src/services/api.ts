import axios from "axios";

const api = axios.create({
    baseURL: "https://subscribes-lumos-software-and-system.onrender.com",
    timeout: 9000,
});

export default api;
