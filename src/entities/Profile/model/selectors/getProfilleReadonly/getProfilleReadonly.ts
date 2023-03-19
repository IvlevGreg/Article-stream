import { StateSchema } from 'app/providers/StoreProvider';

export const getProfilleReadonly = (state: StateSchema) => state?.profile?.readonly;
