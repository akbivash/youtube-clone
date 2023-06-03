import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name:'theme',
    initialState:{
        darkTheme:false
    },
    reducers:{
   changeTheme:(state) => {
    state.darkTheme = !state.darkTheme
   }

    }
})

export const {changeTheme} = themeSlice.actions
export default themeSlice.reducer