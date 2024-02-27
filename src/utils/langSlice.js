import { createSlice } from "@reduxjs/toolkit";

const langSlice=createSlice({
    name:"config",
    initialState:{
        lang:"en"
    },
    reducers:{
        ChangeLanguage:(state,action)=>{
            state.lang=action.payload;
        }
    }
})

export const {ChangeLanguage}=langSlice.actions;
export default langSlice.reducer