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
      state.isLoading = false;
    },
    newsRequested: (state, action) => {
      state.isLoading = true;
    },
    newsRequestFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {addNews, newsRequested, newsRequestFailed} = newsSlice.actions;
export default newsSlice.reducer;

export const loadNews = (endpoint) => async (dispatch) => {
  dispatch(newsRequested());
  try {
    const response = await api.get(
      endpoint + 'country=it&' + 'apiKey=' + API_KEY,
    );
    dispatch(addNews(response.data.articles));
  } catch (error) {
    dispatch(newsRequestFailed(error.message));
  }
};
