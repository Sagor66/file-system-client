import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Get All Folders
export const getMainFolders = createAsyncThunk(
  "mainFolders/getMainFolders",
  async () => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/mainFolder`);
    return res.data;
  }
);

// Create a Folder
export const createMainFolders = createAsyncThunk(
  "mainFolders/createMainFolders",
  async (newFolderData) => {
    const res = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/mainFolder`,
      newFolderData
    );
    return res.data;
  }
);

// Delete a Folder
export const deleteMainFolders = createAsyncThunk(
  "mainFolders/deleteMainFolders",
  async (mainFolderId) => {
    await axios.delete(
      `${import.meta.env.VITE_BASE_URL}/mainFolder/${mainFolderId}`
    );
    return mainFolderId;
  }
);

const mainFolderSlice = createSlice({
  name: "mainFolders",
  initialState: {
    isLoading: false,
    mainFolders: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Fetching
    builder.addCase(getMainFolders.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMainFolders.fulfilled, (state, action) => {
      state.isLoading = false;
      state.mainFolders = action.payload;
      state.error = null;
    });
    builder.addCase(getMainFolders.rejected, (state, action) => {
      state.isLoading = false;
      state.mainFolders = [];
      state.error = action.error.message;
    });

    // Creating
    builder.addCase(createMainFolders.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createMainFolders.fulfilled, (state, action) => {
      state.isLoading = false;
      state.mainFolders.push(action.payload);
      state.error = null;
    });
    builder.addCase(createMainFolders.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // Deleting
    builder.addCase(deleteMainFolders.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteMainFolders.fulfilled, (state, action) => {
      state.isLoading = false;
      const deletedMainFolderId = action.payload;
      state.mainFolders = state.mainFolders.filter(
        (mainFolder) => mainFolder.id !== deletedMainFolderId
      );
      state.error = null;
    });
    builder.addCase(deleteMainFolders.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default mainFolderSlice.reducer;
