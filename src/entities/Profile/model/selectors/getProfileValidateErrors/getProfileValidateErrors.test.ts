import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from 'entities/Profile';
import { ValidateProfileError } from '../../types/profile';

describe('getProfileData', () => {
  test('should work with filled state', () => {
    const errors = [
      ValidateProfileError.SERVER_ERROR,
      ValidateProfileError.INCORRECT_USER_DATA,
    ];

    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: errors,
      },
    };

    expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
