import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
import { User, UserSchema } from '../types/user';

const initialState:UserSchema = {
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action:PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initialAuthData: (state, action:PayloadAction<User>) => {
      const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logout: (state, action:PayloadAction<User>) => {
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
      state.authData = undefined;
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
