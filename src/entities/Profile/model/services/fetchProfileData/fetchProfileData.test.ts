import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { fetchProfileData } from './fetchProfileData';

describe('fetchProfileData', () => {
  const data = {
    username: 'admin',
    age: 98,
    country: Country.Belarus,
    lastname: 'Ivan',
    first: 'Ivanov',
    city: 'Minsk',
    currency: Currency.RUB,
  };

  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({
      data,
    }));
    const res = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(res.meta.requestStatus).toBe('fulfilled');
    expect(res.payload).toBe(data);
  });

  test('error login', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(Promise.resolve({
      status: 403,
    }));

    const res = await thunk.callThunk();

    expect(res.meta.requestStatus).toBe('rejected');
  });
});
