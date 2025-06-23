import {configureStore} from "@reduxjs/toolkit"
import Admin from "../slices/Admin.js"
import User from "../slices/User.js"
export const store = configureStore({
    reducer:{
        Admin:Admin,
        user:User
    }
})