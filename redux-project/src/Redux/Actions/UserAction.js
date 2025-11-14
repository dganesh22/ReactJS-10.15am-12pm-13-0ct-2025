import { createAsyncThunk } from "@reduxjs/toolkit";
import UserApi from "../API/UserApi";

// action const and method for adding new user
export const addNewUser = createAsyncThunk("users/add", async (user) => {
    let res = await UserApi.addUser(user)
    return res?.data
})

// read all user
export const readAllUser = createAsyncThunk("users/all", async () => {
    let res = await UserApi.readAll()
    console.log(`read all action = `, res?.data)
    return res?.data
})

// update single user
export const userUpdate = createAsyncThunk("users/update", async ({id, user}) => {
    let res = await UserApi.updateById({id, user })
    return {id, data: res?.data}
})

// delete single user
export const userDelete = createAsyncThunk("users/delete", async (id) => {
    let res = await UserApi.deleteById(id)
    return { id, data: res?.data }
})