import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../../types/storeTypes';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
