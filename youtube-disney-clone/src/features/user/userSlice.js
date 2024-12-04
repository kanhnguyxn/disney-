import { createSlice } from "@reduxjs/toolkit";

// Trạng thái ban đầu
const initialState = {
  name: "",
  email: "",
  photo: "",
};

const userSlice = createSlice({
  // Tên slice
  name: "user",

  // Reducer và hành động
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setSignOut: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

// Export các action
export const { setUserLoginDetails, setSignOut } = userSlice.actions;

// Selector để truy cập state
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

// Export reducer
export default userSlice.reducer;
