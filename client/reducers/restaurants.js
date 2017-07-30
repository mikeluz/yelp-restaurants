import axios from 'axios';

const reducer = (state=null, action) => {
  switch (action.type) {
  case SET_RESTAURANTS:
    return action.restaurants;
  }
  return state;
};

const SET_RESTAURANTS = 'SET_RESTAURANTS';
export const setRestaurants = restaurants => ({
  type: SET_RESTAURANTS, restaurants
});

export default reducer;