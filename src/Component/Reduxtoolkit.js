// src/Component/weatherSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  main : [],
wind : '',
cloud : [],
weather : [],
data : [],
  loading: false,
  error: null,

};

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (location, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=04289f90e65ca53cd9f7871eee48e97f`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      return rejectWithValue(error.message || 'Something went wrong');
    }
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        
        state.cloud = action.payload.clouds
        state.data = action.payload;
        state.wind = action.payload.wind
        state.main = action.payload.main
        state.weather = action.payload.weather[0];
        console.log(state.weather);
        
        state.error = null;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default weatherSlice.reducer;
