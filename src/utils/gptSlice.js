import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGpt:false,
        gptMovies:null,
        movieNames:null,
        movieResults:null
    },
    reducers: {
        ToggleGptSearchView:(state)=>{
            state.showGpt=!state.showGpt
        },
        AddGptMovieResults:(state,action)=>{
            const {movieNames,movieResults}=action.payload
            state.movieNames=movieNames
            state.movieResults=movieResults
        }
    }

})

export const {ToggleGptSearchView,AddGptMovieResults}=gptSlice.actions
export default gptSlice.reducer