import { configureStore, combineReducers } from "@reduxjs/toolkit";
import UserSlice from "../Reducer/UserReducer";

// combine reducer
const AppReducer = combineReducers({
    users: UserSlice.reducer
})

// store
const AppStore = configureStore({
    reducer: AppReducer,
    devTools: true
})

export default AppStore