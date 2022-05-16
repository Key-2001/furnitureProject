import axios from "../axios";

const getAllUsers = () => {
    return axios.get('/api/v1/users')
}

export {getAllUsers}