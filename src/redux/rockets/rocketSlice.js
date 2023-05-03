import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/rockets');
  return response.data;
});

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,

  reducers: {
    reserveRocket: (state, action) => {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: !rocket.reserved };
      });
      return newState;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => {
      const arr = action.payload.map((rocket) => ({
        id: rocket.id,
        rocket_name: rocket.rocket_name,
        reserved: false,
        description: rocket.description,
        flickr_images: rocket.flickr_images,
      }));

      state.push(...arr);
    });
  },
});

export const { reserveRocket } = rocketSlice.actions;

export default rocketSlice.reducer;
