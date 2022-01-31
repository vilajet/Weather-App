import { createStore, combineReducers } from 'redux';

import userReducer from './reducers/user';
import weatherReducer from './reducers/weather';

const rootReducer = combineReducers({
  user: userReducer,
  weather: weatherReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
