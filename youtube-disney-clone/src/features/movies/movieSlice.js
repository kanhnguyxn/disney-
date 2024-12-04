import { createSlice } from "@reduxjs/toolkit";

// tao
const initialState = {
  recommend: null,
  newdisney: null,
  original: null,
  trending: null,
};

// hanh dong
const movieSlide = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovie: (state, action) => {
      state.recommend = action.payload.recommend;
      state.newdisney = action.payload.newdisney;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
    },
  },
});

export const { setMovie } = movieSlide.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newdisney;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;

export default movieSlide.reducer;
