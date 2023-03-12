import { useDispatch } from 'react-redux';
import { AppDispactch } from 'app/providers/StoreProvider';

export const useAppDispatch = () => useDispatch<AppDispactch>();
