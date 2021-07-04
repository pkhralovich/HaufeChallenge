import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        id: -1,
        username: undefined
    },
    reducers: {
        setUser: (state, action) => {
            state.id = action.payload.id;
            state.username = action.payload.username
        },
        clearUser: (state) => {
            state.id = -1;
            state.username = undefined;
        }
    }
});

export const { setUser, clearUser } = userSlice.actions; 

export default userSlice.reducer;