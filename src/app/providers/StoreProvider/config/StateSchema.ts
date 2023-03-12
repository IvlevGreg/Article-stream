import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'feature/AuthByUsername';
import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}

export interface StateSchema {
  counter: CounterSchema;
  user:UserSchema;
  // Асинхронные редьюсеры
  loginForm?:LoginSchema;
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
