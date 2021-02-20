import {combineReducers} from 'redux';
import news from './news';
import config from './config';

export default combineReducers({
  news,
  config,
});
