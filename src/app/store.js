import { configureStore } from "@reduxjs/toolkit";
import mainFolderReducer from "../features/mainFolderSlice";

const store = configureStore({
  reducer: {
    mainFolders: mainFolderReducer,
  },
});

export default store;
