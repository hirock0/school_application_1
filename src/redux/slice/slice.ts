"use client";
import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  userId: [{ id: "", userid: "" }],
};

export const SliceData = createSlice({
  name: "user/slice",
  initialState,
  reducers: {
    addUserId: (state, actions) => {
      const pusData = {
        id: nanoid(),
        userid: actions.payload,
      };
      state.userId.push(pusData);
    },
    removeId: (state, action: PayloadAction<any>) => {},
  },
});
export const { addUserId, removeId } = SliceData.actions;

export default SliceData.reducer;
