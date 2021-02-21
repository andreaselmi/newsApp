import {createSelector, createSlice, createAction} from '@reduxjs/toolkit';
import api from '../api/api';
import {API_KEY} from '@env';

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    topArticles: [],
    searchedArticles: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addNews: (state, action) => {
      state.topArticles = action.payload;
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

export const apiCallBegan = createAction('apiCallBegan');

// TODO implementare questa funzione per migliorare il codice

// export const loadTopNews = () => {
//   apiCallBegan({
//     url: '/top-headlines?',
//     country: 'IT',
//     onSuccess: 'addNews',
//     onError: 'newsRequestFailed',
//   });
// };

export const apiMiddleware = ({dispatch}) => (next) => async (action) => {
  if (action.type !== 'apiCallBegan') return next(action);
  dispatch(newsRequested());

  const {endpoint, country, onSuccess, onError} = action.payload;
  try {
    const response = await api.get(
      endpoint + 'country=' + country + '&apiKey=' + API_KEY,
    );

    if (response.status === 200) {
      dispatch({type: onSuccess, payload: response.data.articles});
      dispatch(stopLoading());
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    dispatch({type: onError, payload: error});
    dispatch(stopLoading());
  }
};
