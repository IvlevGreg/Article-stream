import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'feature/AuthByUsername';
import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { ProfileSchema } from 'entities/Profile';
import { To } from '@remix-run/router';
import { NavigateOptions } from 'react-router/dist/lib/context';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';

export interface CounterState {
  value: number;
}

export interface StateSchema {
  counter: CounterSchema;
  user:UserSchema;
  // Асинхронные редьюсеры
  loginForm?:LoginSchema;
  profile?:ProfileSchema;
  articleDetails?:ArticleDetailsSchema;
}

export type StateSchemaKey = keyof StateSchema
export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) =>CombinedState<StateSchema>;
  add: (key:StateSchemaKey, reducer:Reducer) => void;
  remove: (key:StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
  reducerManager:ReducerManager;
}

export interface ThunkExtraArg {
api:AxiosInstance;
navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T>{
rejectValue: T;
extra: ThunkExtraArg;
dispatch?: Dispatch;
state:StateSchema;

}
