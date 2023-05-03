import { configureStore } from '@reduxjs/toolkit';
import missions from './missions/missions';
import rockets from './rockets/rocketSlice';

const store = configureStore({
  reducer: {
    missions,
    rockets,
  },
});

export default store;
