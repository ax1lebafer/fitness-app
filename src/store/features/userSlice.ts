import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  token: "",
  id: "",
  isEntering: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.email = "";
      state.token = "";
      state.id = "";
    },
    getUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    getRegistration(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    setIsEntering: (state, action: PayloadAction<boolean>) => {
      state.isEntering = action.payload;
    },
  },
});

export const { logout, getUser, getRegistration, setIsEntering } =
  userSlice.actions;
export const userReducer = userSlice.reducer;
