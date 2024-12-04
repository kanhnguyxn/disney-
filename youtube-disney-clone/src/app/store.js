import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import movieReducer from "../features/movies/movieSlice";
// taoj store
export default configureStore({
  // định nghĩa các reducer
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  // lấy ra các middleware mặc định được áp dụng cho Redux store
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Vô hiệu hoá kiểm tra tính tuần tự
    }),
});
