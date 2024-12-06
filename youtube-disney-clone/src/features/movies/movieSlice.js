import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: null,
  newdisney: null,
  trending: null,
  original: null,
  popular: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.newdisney = action.payload.newdisney;
      state.trending = action.payload.trending;
      state.original = action.payload.original;
      state.popular = action.payload.popular;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newdisney;
export const selectTrending = (state) => state.movie.trending;
export const selectOriginal = (state) => state.movie.original;
export const selectPopular = (state) => state.movie.popular;

export default movieSlice.reducer;
