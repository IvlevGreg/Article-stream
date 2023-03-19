import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { validateProfileData } from './validateProfileData';

describe('validateProfileData', () => {
  const data = {
    username: 'admin',
    age: 98,
    country: Country.Belarus,
    lastname: 'Ivan',
    first: 'Ivanov',
    city: 'Minsk',
    currency: Currency.RUB,
  };

  test('validateProfileData with data', async () => {
    const res = validateProfileData(data);

    expect(res).toEqual([]);
  });

  test('validateProfileData without first and last name', async () => {
    const res = validateProfileData({ ...data, first: '', lastname: '' });

    expect(res).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });

  test('incorrect age', async () => {
    const res = validateProfileData({ ...data, age: undefined });

    expect(res).toEqual([
      ValidateProfileError.INCORRECT_USER_AGE,
    ]);
  });
  test('incorrect age (NaN)', async () => {
    const res = validateProfileData({ ...data, age: NaN });

    expect(res).toEqual([
      ValidateProfileError.INCORRECT_USER_AGE,
    ]);
  });

  test('incorrect country', async () => {
    const res = validateProfileData({ ...data, country: undefined });

    expect(res).toEqual([
      ValidateProfileError.INCORRECT_USER_COUNTRY,
    ]);
  });

  test('incorrect all', async () => {
    const res = validateProfileData({ });

    expect(res).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_USER_AGE,
      ValidateProfileError.INCORRECT_USER_COUNTRY,
    ]);
  });
});
