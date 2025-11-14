import axios from "axios";

// axios instance
const axiosIns = axios.create({
    baseURL: `https://node-crud-api-0n4d.onrender.com`,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
})

const UserApi = {
    addUser: async (user) => {
        return axiosIns.request({
            method: "POST",
            url: `/api/user/add`,
            data: user
        })
    },
    readAll: async () => {
        return axiosIns.request({
            method: "GET",
            url: `/api/user`
        })
    },
    readById: async (id) => {
        return axiosIns.request({
            method: "GET",
            url: `/api/user/single/${id}`
        })
    },
    updateById: async ({id, user}) => {
        return axiosIns.request({
            method: "PUT",
            url: `/api/user/update/${id}`,
            data: user
        })
    },
    deleteById: async (id) => {
        return axiosIns.request({
            method: "DELETE",
            url: `/api/user/delete/${id}`
        })
    }
}

export default UserApi