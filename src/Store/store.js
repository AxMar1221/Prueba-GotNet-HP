import { configureStore } from "@reduxjs/toolkit";
import favoriteCharacters from "./slices/characters/characters";
export default configureStore({
  reducer: {
    favoriteCharacters,
  },
});
