import { configureStore } from "@reduxjs/toolkit";
import mainFolderReducer from "../features/mainFolderSlice";
import childFolderReducer from "../features/childFolderSlice";

const store = configureStore({
  reducer: {
    mainFolders: mainFolderReducer,
    childFolders: childFolderReducer,
  },
});

export default store;
