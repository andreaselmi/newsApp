import {combineReducers} from 'redux';
import news from './news';
import config from './config';
import user from './user';

export default combineReducers({
  news,
  config,
  user,
});
