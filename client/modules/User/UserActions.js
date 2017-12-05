import callApi from '../../util/apiCaller';

// Export Constants
export const CLEAR_USERS = 'CLEAR_USERS';
export const ADD_USER = 'ADD_USER';
export const ADD_USERS = 'ADD_USERS';
export const GET_USER = 'GET_USER';
export const ADD_ALBUM = 'ADD_ALBUM';


// Export Actions

export function clearUsers() {
  return {
    type: CLEAR_USERS,
  };
}

export function addUser(user) {
  return {
    type: ADD_USER,
    user,
  };
}

export function addUserRequest(user) {
  return (dispatch) => {
    return callApi('users', 'post', {
      user: {
        email: user.email,
        password: user.password,
        name: user.name,
      },
    }).then(res => dispatch(addUser(res.user)));
  };
}

export function addUsers(users) {
  return {
    type: ADD_USERS,
    users,
  };
}

export function fetchUsersRequest() {
  return (dispatch) => {
    return callApi('users').then(res => dispatch(addUser(res.users)));
  };
}

export function getUserRequest(email) {
  return (dispatch) => {
    return callApi(`users/${email}`).then(res => {
      dispatch(addUser(res.user));
    });
  };
}

export function deleteUsersRequest() {
  return (dispatch) => {
    return callApi('users', 'delete').then(res => dispatch(clearUsers()));
  };
}

export function addAlbum(album) {
  return {
    type: ADD_ALBUM,
          album,
  };
}

export function addAlbumRequest(email, album) {
  return (dispatch) => {
    return callApi(`users/${email}`, 'post', {
      album: {
        title: album.title,
        artist: album.artist,
        date: album.date,
        rating: album.rating,
        comment: album.comment,
      }
    }).then(res => {
      dispatch(addAlbum(res.album));
    });
  };
}

