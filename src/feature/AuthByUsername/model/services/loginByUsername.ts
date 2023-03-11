import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';

interface loginByUsernameProps{
  username:string;
  password:string;
}

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps>(
  'login/loginByUsername',
  async (authData, thunkApi) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData);
      if (!response.data) throw new Error();

      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
      thunkApi.dispatch(userActions.setAuthData(response.data));
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue('error');
    }
  },
);
