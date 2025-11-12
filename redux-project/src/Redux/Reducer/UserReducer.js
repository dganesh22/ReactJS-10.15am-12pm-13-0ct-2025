import { createSlice } from "@reduxjs/toolkit";
import { addNewUser, readAllUser, userUpdate, userDelete } from '../Actions/UserAction'

const UserSlice = createSlice({
    name: "user",
    initialState: [],
    extraReducers: (builder) => {
        builder.addCase(addNewUser.fulfilled, (state,action)=>{})
            .addCase(readAllUser.fulfilled, (state,action) => {})
            .addCase(userUpdate.fulfilled, (state,action) => {})
            .addCase(userDelete.fulfilled, (state,action) => {})
    }
})

export default UserSlice