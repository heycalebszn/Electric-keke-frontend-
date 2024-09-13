import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
      console.log(action);
      state = action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
