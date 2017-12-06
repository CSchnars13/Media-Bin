import { ADD_USER, ADD_USERS, CLEAR_USERS, ADD_ALBUM, ADD_ALBUM_ART, ADD_FOLLOW, ADD_EVENT} from './UserActions';

// Initial State
const initialState = { data: [] };

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER :
      return {
        data: [...state.data, action.user],
      };

    case ADD_USERS :
      return {
        data: [action.users],
      };

    case CLEAR_USERS:
      return{
        data: [],
      };

    case ADD_ALBUM:
      if (state.data.length > 0){
        state.data[0].albums = [action.album, ...state.data[0].albums];

      }
      return {
        data: [...state.data],
      };

    case ADD_EVENT:
      if (state.data.length > 0){
        state.data[0].events = [action.event, ...state.data[0].events];

      }
      return {
        data: [...state.data],
      };

    case ADD_FOLLOW:
      if (state.data.length > 0){
        state.data[0].subscribed = [action.subscribed, ...state.data[0].subscribed];

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