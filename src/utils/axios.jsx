// 📂 /src/utils/axios.jsx
import axios from "axios";

const instance = axios.create({
    baseURL: "",
})

export default instance;

// https://jsonplaceholder.typicode.com/users

// https -> protocol
// jsonplaceholder -> domaain/name
// typicode.com -> subdomain
// /users -> endpoint/route