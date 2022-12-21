import { createSlice } from "@reduxjs/toolkit";

const usersSlice= createSlice({
    name:"users",
    initialState:{
        userDetails:JSON.parse(localStorage.getItem("userDetails")) || null,
    },
    reducers:{
        setUserDetails: (state, action) => {
            state.userDetails = action.payload;
            localStorage.setItem("userDetails", JSON.stringify(state.userDetails));
          },
    }
})

export const {
    setUserDetails,
    
  } = usersSlice.actions;
  export default usersSlice.reducer;
  