import { combineReducers } from 'redux';

const appReducer = combineReducers({
  restaurants: require('./restaurants').default,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
