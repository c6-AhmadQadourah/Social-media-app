import { configureStore } from "@reduxjs/toolkit";
import users from "./reducers/Users/users";
import usersAuth from "./reducers/usersAuth/usersAuth";

export default configureStore({
    reducer:{
        users:users,
usersAuth:usersAuth
    }
})