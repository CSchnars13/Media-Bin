import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_USER = 'ADD_USER';
export const GET_USER = 'GET_USER';
export const ADD_ALBUM = 'ADD_ALBUM';


// Export Actions
export function addUser(user) {
  return {
    type: ADD_USER,
    user,
  };
}

export function addUserRequest(user) {
  console.log("Attempting to perform action");
  return (dispatch) => {
    return callApi('users', 'post', {
      user: {
        email: user.email,
        password: user.password,
        role: user.role,
        albums: [],
        following: [],
      },
    }).then(res => dispatch(addUser(res.user)));
  };
}
/*

*/
export function getUserRequest(email) {
  return (dispatch) => {
    return callApi(`users/${email}`).then(res => {
      console.log(res.user.email);
      dispatch(addUser(res.user));
    });
  };
}

export function addAlbum(album) {
  return {
    type: ADD_ALBUM,
          album,
  };
}

export function addAlbumRequest(email, album) {
  console.log("Submit New Album dispatched");
  return (dispatch) => {
    return callApi(`users/${email}`, 'post', {
      album: {
        title: album.title,
        artist: album.artist,
        date: album.date,
        rating: album.rating,
        comment: album.comment,
      }
    }

      ).then(res => {
      dispatch(addAlbum(res.album));
    });
  };
}