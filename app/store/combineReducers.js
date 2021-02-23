import {combineReducers} from 'redux';
import news from './news';
import config from './config';
import auth from './auth';

export default combineReducers({
  news,
  config,
  auth,
});
