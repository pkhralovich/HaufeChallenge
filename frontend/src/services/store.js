import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./reducers/user";
import charactersReducer from "./reducers/characters";

export default configureStore({
    reducer: {
        user: userReducer,
        characters: charactersReducer
    }
});