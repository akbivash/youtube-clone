import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenubarOpen: false,
  isSettingsOpen: false,
  isSearchBarOpen: false,
  isSubSidebarOpen: false,
};

export const componentsSlice = createSlice({
  name: "component",
  initialState,
  reducers: {
    openSettings: (state) => {
      state.isSettingsOpen = true;
    },
    closeSettings: (state) => {
      state.isSettingsOpen = false;
    },
    openSidebar: (state) => {
      state.isMenubarOpen = true;
    },
    closeSidebar: (state) => {
      state.isMenubarOpen = false;
    },
    handleMenubar: (state) => {
   state.isMenubarOpen === false ? state.isMenubarOpen = true : state.isMenubarOpen = false
    },
    openSubSidebar: (state) => {
      state.isSubSidebarOpen = true;
    },
    closeSubSidebar: (state) => {
      state.isSubSidebarOpen = false;
    },
    handleSubSidebar: (state) => {
   state.isSubSidebarOpen === false ? state.isSubSidebarOpen = true : state.isSubSidebarOpen = false
    },
    openSearchBar: (state) => {
      state.isSearchBarOpen = true;
    },
    closeSearchBar: (state) => {
      state.isSearchBarOpen = false;
    },
    handleSearchBar:(state) => {
        state.isSearchBarOpen ? state.isSearchBarOpen = false : state.isSearchBarOpen = true
         
    },
  
  },
});

export const {
  openSettings,
  closeSettings,
  openSidebar,
  closeSidebar,
  openSearchBar,
  closeSearchBar,
  handleMenubar,
  closeSubSidebar,
  openSubSidebar,
  handleSubSidebar,
  handleSearchBar,
} = componentsSlice.actions;
export default componentsSlice.reducer;
