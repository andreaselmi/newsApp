import {createSelector, createSlice} from '@reduxjs/toolkit';
import api from '../api/api';
import {API_KEY} from '@env';

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addNews: (state, action) => {
      state.articles = action.payload;
      error = null;
    },
    newsRequested: (state, action) => {
      state.isLoading = true;
    },
    newsRequestFailed: (state, action) => {
      state.error = action.payload;
    },
    stopLoading: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const {
  addNews,
  newsRequested,
  newsRequestFailed,
  stopLoading,
} = newsSlice.actions;
export default newsSlice.reducer;

export const loadNews = (endpoint, country = 'it') => async (dispatch) => {
  dispatch(newsRequested());

  try {
    const response = await api.get(
      endpoint + 'country=' + country + '&apiKey=' + API_KEY,
    );
    console.log(response);
    if (response.status === 200) {
      dispatch(addNews(response.data));
      dispatch(stopLoading());
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    dispatch(newsRequestFailed(error.message));
    dispatch(stopLoading());
  }
};
