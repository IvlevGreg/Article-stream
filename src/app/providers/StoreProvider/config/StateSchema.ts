import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';

export interface CounterState {
  value: number;
}

export interface StateSchema {
  counter: CounterSchema;
  user:UserSchema
}
