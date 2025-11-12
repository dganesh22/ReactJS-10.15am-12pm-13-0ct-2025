import { createAsyncThunk } from "@reduxjs/toolkit";
import UserApi from "../API/UserApi";

// action const and method for adding new user
export const addNewUser = createAsyncThunk("users/add", async (user) => {})

// read all user
export const readAllUser = createAsyncThunk("users/all", async () => {})

// update single user
export const userUpdate = createAsyncThunk("users/update", async ({id, user}) => {})

// delete single user
export const userDelete = createAsyncThunk("users/delete", async (id) => {})