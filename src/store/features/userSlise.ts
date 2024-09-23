import { fetchRegistration, fetchUser }  from "@/api/userAuth";
import { UserType } from "@/Types/user";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginType, SigninType } from "@/Types/sign";

export const getUser = createAsyncThunk(
  "user/getUser",
  async ({ email, password }: LoginType) => {
    const user = await fetchUser({ email, password });
    return user;
  },
);

export const getRegistration = createAsyncThunk(
  "user/getRegistration",
  async ({ email, password, confirmPassword }: SigninType) => {
    const user = await fetchRegistration({ email, password, confirmPassword });
    return user;
  },
);

type UserStateType = {
  user: UserType | null;
};

export const initialState: UserStateType = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
    getUser(state, action) {
      state.user = action.payload;
    },
    getRegistration(state, action) {
      state.user = action.payload;
    },
  },
});

export const { logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
