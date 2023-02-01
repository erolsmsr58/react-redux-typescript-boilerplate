import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../types/storeTypes';

export const useAppDispatch = () => useDispatch<AppDispatch>();
