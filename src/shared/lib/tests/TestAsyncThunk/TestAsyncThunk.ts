import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

type ActionCreatorType<Return, Arg, RejecteValue> = (arg: Arg) =>
  AsyncThunkAction<Return, Arg, { rejectValue:RejecteValue }>
export class TestAsyncThunk<Return, Arg, RejecteValue> {
  dispatch: jest.MockedFn<any>;

  getState: () => StateSchema;

  actionCreator: ActionCreatorType<Return, Arg, RejecteValue>;

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejecteValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const res = await action(this.dispatch, this.getState, undefined);

    return res;
  }
}
