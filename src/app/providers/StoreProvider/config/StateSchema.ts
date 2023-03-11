import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'feature/AuthByUsername';

export interface CounterState {
  value: number;
}

export interface StateSchema {
  counter: CounterSchema;
  user:UserSchema;
  loginForm?:LoginSchema;
}
