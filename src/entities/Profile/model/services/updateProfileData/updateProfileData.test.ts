import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { updateProfileData } from './updateProfileData';

describe('updateProfileData', () => {
  const form = {
    username: 'admin',
    age: 98,
    country: Country.Belarus,
    lastname: 'Ivan',
    first: 'Ivanov',
    city: 'Minsk',
    currency: Currency.RUB,
  };

  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({
      data: form,
    }));
    const res = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(res.meta.requestStatus).toBe('fulfilled');
    expect(res.payload).toEqual(form);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form,
      },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({
      status: 403,
    }));

    const res = await thunk.callThunk();

    expect(res.meta.requestStatus).toBe('rejected');
    expect(res.payload).toEqual([
      ValidateProfileError.SERVER_ERROR,
    ]);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: {
          ...form, lastname: '',
        },
      },
    });

    const res = await thunk.callThunk();

    expect(res.meta.requestStatus).toBe('rejected');
    expect(res.payload).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });
});
