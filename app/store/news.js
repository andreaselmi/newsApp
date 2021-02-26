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
    addSearchedArticles: (state, action) => {
      state.searchedArticles = action.payload;
      state.searchNewsError = null;
      state.isLoading = false;
    },
    clearSavedArticles: (state) => {
      state.savedArticles = [];
    },
    loadSavedArticles: (state, action) => {
      const alreadySaved = state.savedArticles.findIndex(
        (article) => article['url'] === action.payload.url,
      );
      if (alreadySaved === -1) {
        state.savedArticles.push(action.payload);
      } else return state;
    },
    newsRequested: (state) => {
      state.isLoading = true;
    },
    saveTopArticles: (state, action) => {
      state.topArticles = action.payload;
      state.loadTopNewsError = null;
      state.isLoading = false;
    },
    searchRequestFailed: (state, action) => {
      state.searchNewsError = action.payload;
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
    topArticlesRequestFailed: (state, action) => {
      state.loadTopNewsError = action.payload;
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
    onSuccess: 'news/saveTopArticles',
    onError: 'news/topArticlesRequestFailed',
  });
};

export const searchNews = (query) => {
  return apiCallBegan({
    endpoint: '/everything?q=' + query + '&',
    country: '',
    onSuccess: 'news/addSearchedArticles',
    onError: 'news/searchRequestFailed',
  });
};

export const loadArticlesFromFirestore = (user) => {
  return firestoreCallBegan({
    user,
    collection: 'articles',
    parameter: 'userId',
    filter: '==',
    onSuccess: 'news/loadSavedArticles',
  });
};

const {newsRequested} = newsSlice.actions;

//custom middleware for fetching data from api
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

//middleware for fetching data from firestore
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
