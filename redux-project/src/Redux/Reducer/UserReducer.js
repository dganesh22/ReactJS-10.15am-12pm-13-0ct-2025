import { createSlice } from "@reduxjs/toolkit";
import { addNewUser, readAllUser, userUpdate, userDelete } from '../Actions/UserAction'

const UserSlice = createSlice({
    name: "user",
    initialState: [],
    extraReducers: (builder) => {
        builder.addCase(addNewUser.fulfilled, (state,action)=>{
                state.push(action?.payload?.user)
        }).addCase(addNewUser.rejected, (state,action) => {
                state.error = action?.error?.message
            })
            .addCase(readAllUser.fulfilled, (state,action) => {
                return [...action.payload?.users]
            }).addCase(readAllUser.rejected, (state,action) => {
                state.error = action?.error?.message
            })
            .addCase(userUpdate.fulfilled, (state,action) => {
                let index = state?.findIndex(item => item._id === action.payload.id)
                state[index] = {
                    ...state[index],
                    ...action.payload.user
                }
            })
            .addCase(userDelete.fulfilled, (state,action) => {
                let index = state?.findIndex(item => item._id === action.payload.id)
                state.splice(index,1)
            })
    }
})

export default UserSlice