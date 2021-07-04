import { createSlice } from "@reduxjs/toolkit";

export const charactersSlice = createSlice({
    name: "characters",
    initialState: {
        selectedCharacter: undefined,
        characters: []
    },
    reducers: {
        selectCharacter: (state, action) => {
            state.selectedCharacter = action.payload;
        },
        setCharacters: (state, action) => {
            state.characters = action.payload;
        }
    }
});

export const { selectCharacter, setCharacters } = charactersSlice.actions;

export default charactersSlice.reducer;