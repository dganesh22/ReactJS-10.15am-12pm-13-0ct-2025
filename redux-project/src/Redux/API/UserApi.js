import axios from "axios";

// axios instance
const axiosIns = axios.create({
    baseURL: ``,
    headers: {
        "Content-Type": "application/json"
    }
})

const UserApi = {
    addUser: async (user) => {
        return axiosIns.request({
            method: "POST",
            url: `/`,
            data: user
        })
    },
    readAll: async () => {
        return axiosIns.request({
            method: "GET",
            url: `/`
        })
    },
    readById: async (id) => {
        return axiosIns.request({
            method: "GET",
            url: `/`
        })
    },
    updateById: async ({id, user}) => {
        return axiosIns.request({
            method: "PUT",
            url: `/`,
            data: user
        })
    },
    deleteById: async (id) => {
        return axiosIns.request({
            method: "DELETE",
            url: `/`
        })
    }
}

export default UserApi