import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCovidData = createAsyncThunk("covidData/fetchCovidData", async () => {
  const res = await fetch('https://covidnigeria.herokuapp.com/api');
  return await res.json();
});

const covidSlice = createSlice(({
  name: "covidData",
  initialState: {
    covidData: [],
    loading: false,
  },
  extraReducers: {
    [fetchCovidData.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCovidData.fulfilled]: (state, action) => {
      state.loading = false;
      state.covidData = action.payload;
    },
    [fetchCovidData.rejected]: (state, action) => {
      state.loading = false;
    }
  }
}));

export default covidSlice.reducer;