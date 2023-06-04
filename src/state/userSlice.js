import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const userSlice = createSlice({
  name: 'followers',
  initialState: {
    followList: [],
  },
  reducers: {
    addUser(state, action) {
      state.followList = [...state.followList, action.payload];
    },
    removeUser(state, action) {
      state.followList = state.followList.filter(id => id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};
const persistedСontactsReducer = persistReducer(
  persistConfig,
  userSlice.reducer
);

export const { addUser, removeUser } = userSlice.actions;

export const userReducer = persistedСontactsReducer;

export const getFollowList = state => state.following.followList;
