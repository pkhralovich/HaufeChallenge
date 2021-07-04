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
        },
        setFavourite: (state, action) => {
            let character = state.characters.find(character => character.id === action.payload.id);
            if (character) {
                character.favourite = action.payload.favourite;
                if (character.id === state.selectedCharacter.id) {
                    state.selectedCharacter = character;
                }
            }
        }
    }
});

export const { selectCharacter, setCharacters, setFavourite } = charactersSlice.actions;

export default charactersSlice.reducer;