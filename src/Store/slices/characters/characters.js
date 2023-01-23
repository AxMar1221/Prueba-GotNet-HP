import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
  name: "characters",
  initialState: {
    favoriteCharacters: [],
  },
  reducers: {
    setFavoriteCharacters: (state, action) => {
      const characterIndex = state.favoriteCharacters.findIndex(
        (item) => item.name === action.payload.name
      );
      if (state.favoriteCharacters.length < 5 && characterIndex === -1) {
        let newFav = [...state.favoriteCharacters];
        newFav.push(action.payload);
        return {
          ...state,
          favoriteCharacters: newFav,
        };
      }
    },
    setDeleteFavoriteCharacters: (state, action) => {
      const characterFound = state.favoriteCharacters.find(
        (item) => item.name === action.payload
      );
      if (characterFound) {
        state.favoriteCharacters.splice(
          state.favoriteCharacters.indexOf(characterFound, 1)
        );
      }
    },
  },
});

export const { setFavoriteCharacters, setDeleteFavoriteCharacters } =
  characterSlice.actions;

export default characterSlice.reducer;

export const addFavoriteCharacter = (personaje) => (dispatch) => {
  dispatch(setFavoriteCharacters(personaje));
};
export const deleteFavoriteCharacters = (name) => (dispatch) => {
  dispatch(setDeleteFavoriteCharacters(name));
};
