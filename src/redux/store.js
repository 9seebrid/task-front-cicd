import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice'; // 1. slice import
import modalReducer from './slices/modalSlice';
import apiReducer from './slices/apiSlice';

const store = configureStore({
  // 2. store에 slice 등록
  reducer: {
    modal: modalReducer,
    auth: authReducer,
    api: apiReducer,
  },
});

export default store;
