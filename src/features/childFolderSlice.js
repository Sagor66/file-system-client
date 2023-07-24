import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Get All Folders
export const getChildFolders = createAsyncThunk(
  "childFolders/getChildFolders",
  async () => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/childFolder`);
    return res.data;
  }
);

// Create a Folder
export const createChildFolders = createAsyncThunk(
  "childFolders/createChildFolders",
  async (newFolderData) => {
    const res = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/childFolder`,
      newFolderData
    );
    return res.data;
  }
);

// Delete a Folder
export const deleteChildFolders = createAsyncThunk(
  "childFolders/deleteChildFolders",
  async (childFolderId) => {
    await axios.delete(
      `${import.meta.env.VITE_BASE_URL}/childFolder/${childFolderId}`
    );
    return childFolderId;
  }
);

const childFolderSlice = createSlice({
  name: "childFolders",
  initialState: {
    isLoading: false,
    childFolders: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Fetching
    builder.addCase(getChildFolders.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getChildFolders.fulfilled, (state, action) => {
      state.isLoading = false;
      state.childFolders = action.payload;
      state.error = null;
    });
    builder.addCase(getChildFolders.rejected, (state, action) => {
      state.isLoading = false;
      state.childFolders = [];
      state.error = action.error.message;
    });

    // Creating
    builder.addCase(createChildFolders.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createChildFolders.fulfilled, (state, action) => {
      state.isLoading = false;
      state.childFolders.push(action.payload);
      state.error = null;
    });
    builder.addCase(createChildFolders.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // Deleting
    builder.addCase(deleteChildFolders.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteChildFolders.fulfilled, (state, action) => {
      state.isLoading = false;
      const deletedChildFolderId = action.payload;
      state.childFolders = state.childFolders.filter(
        (childFolder) => childFolder.id !== deletedChildFolderId
      );
      state.error = null;
    });
    builder.addCase(deleteChildFolders.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default childFolderSlice.reducer;
