import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState = {
    token: localStorage.getItem("token") || ""
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logIn: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        },
        logOut: (state) => {
            state.token = ""
        }
    }
})

export const {logIn, logOut} = authSlice.actions
export default authSlice.reducer