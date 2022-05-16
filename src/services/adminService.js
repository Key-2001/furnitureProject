import axios from "../axios";



const loginAdmin = (data) => {
    console.log(data);
    return axios.post('/api/v1/admin/login',data)
}

export {loginAdmin}