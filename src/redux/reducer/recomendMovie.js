import {createSlice, current} from '@reduxjs/toolkit';
import {original} from 'immer';
import apiManager from '../../manager/api/apiManager';
import {endpoint} from '../../utils/endpoint';

export const sample = createSlice({
  name: 'recomendMovie',
  initialState: {
    data: null,
    loading: true,
    error: {
      status: false,
      message: '',
    },
  },
  reducers: {
    REQ_RECOMEND_MOVIE: (state, action) => {
      state.data = null;
      state.loading = true;
      state.error = {status: false, message: ''};
    },
    SET_RECOMEND_MOVIE: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = {status: false, message: ''};
    },
    FAIL_RECOMENDED_MOVIE: (state, action) => {
      state.data = null;
      state.loading = true;
      state.error = {status: true, message: action.payload};
    },
  },
});

// Action creators are generated for each case reducer function
export const {REQ_RECOMEND_MOVIE, SET_RECOMEND_MOVIE, FAIL_RECOMENDED_MOVIE} =
  sample.actions;

export default sample.reducer;
