import { combineReducers } from 'redux';

import user from './userReducer';
import shop from './shopReducer';

const rootReducer = combineReducers({
  user,
  shop
});

export default rootReducer;