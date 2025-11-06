import axios from "axios";

const base_url = "https://expense-tracker-api-gi5q.onrender.com";


export const ExpenseApi = {
    registerUser: `${base_url}/api/auth/register`,
    loginUser: `${base_url}/api/auth/login`,
    logoutUser: `${base_url}/api/auth/logout`,
    verifyUser: `${base_url}/api/auth/verify`,
    addTransaction: `${base_url}/api/transaction/add`,
    allTransaction: `${base_url}/api/transaction/all`,
    singleTransaction: (id) => `${base_url}/api/transaction/single/${id}`,
    updateTransaction: (id) => `${base_url}/api/transaction/update/${id}`,
    deleteTransaction: (id) => `${base_url}/api/transaction/delete/${id}`,

}