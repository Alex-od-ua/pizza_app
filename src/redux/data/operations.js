import { createAsyncThunk } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';

import * as api from 'shared/services/pizza-api';

export const fetchAllPizza = createAsyncThunk(
  'pizza/fetch-all',

  async (_, thunkAPI) => {
    try {
      const data = await api.getAllPizza();
      return data;
    } catch ({ response }) {
      toast.error(` Sorry,${response.data}`);
      return thunkAPI.rejectWithValue(response.data.massage);
    }
  }
);

