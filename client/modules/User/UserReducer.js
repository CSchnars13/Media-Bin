import { ADD_USER, ADD_ALBUM, ADD_ALBUM_ART} from './UserActions';

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
        state.data[0].albums = [action.album, ...state.data[0].albums];

      }
      return {
        data: [...state.data],
      };

    case ADD_ALBUM_ART:
      state.data[0].albums.filter(title => album.title === title)[0].art
      
    default:
      return state;
  }
};

/* Selectors */

// Get all users
export const getUsers = state => state.user.data;

// Get post by cuid
export const getUser = (state, email) => state.user.data.filter(user => user.email === email)[0];

// Export Reducer
export default UserReducer;