import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchSuggestions: [],
  category: "All",
  loading: false,
  error: false,
  success: true,
  selectedCategory: ""
};

export const videosSlice:any = createSlice({
  name: "videos",
  initialState,
  reducers: {
    isLoading: (state) => {
      state.loading;
    },
    isError: (state) => {
      state.loading = false, 
      state.error = true
    },
    isSuccess: (state) => {
      state.loading = false;
      state.error = false
      state.success = true
    },
    getSearchSuggestions: (state, action) => {
      state.loading = false;
      state.searchSuggestions = action.payload;
    },
    setSelectedCategoryId: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const {
  isError,
  isLoading,
  isSuccess,
  getSearchSuggestions,
  setSelectedCategoryId
} = videosSlice.actions;
export default videosSlice.reducer;
