import {createSlice, createAction} from '@reduxjs/toolkit';
import api from '../api/api';
import firestore from '@react-native-firebase/firestore';
import {API_KEY} from '@env';

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    topArticles: '',
    searchedArticles: '',
    savedArticles: [],
    isLoading: false,
    loadTopNewsError: null,
    searchNewsError: null,
  },
  reducers: {
    saveTopNews: (state, action) => {
      state.topArticles = action.payload;
      state.loadTopNewsError = null;
      state.isLoading = false;
    },
    addSearchedNews: (state, action) => {
      state.searchedArticles = action.payload;
      state.searchNewsError = null;
      state.isLoading = false;
    },
    toggleSaveArticle: (state, action) => {
      const alreadySaved = state.savedArticles.findIndex(
        (article) => article['url'] === action.payload.url,
      );
      if (alreadySaved === -1) {
        state.savedArticles.push(action.payload);
      } else {
        state.savedArticles.splice(alreadySaved, 1);
      }
    },

    loadSavedArticles: (state, action) => {
      const alreadySaved = state.savedArticles.findIndex(
        (article) => article['url'] === action.payload.url,
      );
      if (alreadySaved === -1) {
        state.savedArticles.push(action.payload);
      } else return state;
    },
    clearSavedArticles: (state) => {
      state.savedArticles = [];
    },
    newsRequested: (state) => {
      state.isLoading = true;
    },
    topNewsRequestFailed: (state, action) => {
      state.loadTopNewsError = action.payload;
      state.isLoading = false;
    },
    searchNewsRequestFailed: (state, action) => {
      state.searchNewsError = action.payload;
      state.isLoading = false;
    },
  },
});

export const {toggleSaveArticle, clearSavedArticles} = newsSlice.actions;
export default newsSlice.reducer;

//actions
export const apiCallBegan = createAction('apiCallBegan');
export const firestoreCallBegan = createAction('firestoreCallBegan');

export const loadTopNews = () => {
  return apiCallBegan({
    endpoint: '/top-headlines?',
    country: 'IT',
    onSuccess: 'news/saveTopNews',
    onError: 'news/topNewsRequestFailed',
  });
};

export const searchNews = (query) => {
  return apiCallBegan({
    endpoint: '/everything?q=' + query + '&',
    country: '',
    onSuccess: 'news/addSearchedNews',
    onError: 'news/searchNewsRequestFailed',
  });
};

export const loadArticles = (user) => {
  return firestoreCallBegan({
    user,
    collection: 'articles',
    parameter: 'userId',
    filter: '==',
    onSuccess: 'news/loadSavedArticles',
  });
};

const {newsRequested} = newsSlice.actions;

//custom middleware for fetching Data
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
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    dispatch({type: onError, payload: error});
  }
};

export const firestoreMiddleware = ({dispatch}) => (next) => (action) => {
  if (action.type !== 'firestoreCallBegan') return next(action);

  const {user, collection, parameter, filter, onSuccess} = action.payload;

  firestore()
    .collection(collection)
    .where(parameter, filter, user.uid)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((documentSnapshot) => {
        dispatch({type: onSuccess, payload: documentSnapshot.data()});
      });
    })
    .catch((e) => {
      console.log('Non è possibile recuperare i dati', e);
    });
};
