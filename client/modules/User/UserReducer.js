import { ADD_USER, ADD_ALBUM} from './UserActions';

// Initial State
const initialState = { data: [] };

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER :
      return {
        data: [action.user, ...state.data],
      };

    case ADD_ALBUM:
      if (state.data.length > 0){
        console.log("Pushing album");
        state.data[0].albums = [action.album, ...state.data[0].albums];

      }
      return {
        data: [...state.data],
      };
      
    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getUsers = state => state.user.data;

// Get post by cuid
export const getUser = (state, email) => state.user.data.filter(user => user.email === email)[0];

// Export Reducer
export default UserReducer;