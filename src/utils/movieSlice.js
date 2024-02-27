import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailer:null,
    popularMovies:null
  },
  reducers: {
    AddNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    Addtrailers:(state,action)=>{
      state.trailer=action.payload
    },

    AddPopularMovies:(state,action)=>{
      state.popularMovies=action.payload
    }
  },
});

export const { AddNowPlayingMovies ,Addtrailers ,AddPopularMovies} = movieSlice.actions;
export default movieSlice.reducer;
