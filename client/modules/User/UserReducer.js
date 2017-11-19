import { ADD_USER, CHECK_CREDS } from './UserActions';

// Initial State
const initialState = { data: [] };

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER :
      return {
        data: [action.user, ...state.data],
      };

    case CHECK_CREDS :
      return {
        data: state.data.filter(user => (user.email !== action.email && user.password !== action.email)),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getUsers = state => state.users.data;

// Get post by cuid
export const getUser = (state, email, password) => state.users.data.filter(user => user.email === email && user.password === password)[0];

// Export Reducer
export default UserReducer;