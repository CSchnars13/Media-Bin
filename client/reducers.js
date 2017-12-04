/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import user from './modules/User/UserReducer';
import art from './modules/User/ArtReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  user,
  art,
});
