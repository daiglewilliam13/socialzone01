import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {userReducer} from '../reducers/user';

export const store = configureStore(userReducer);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
