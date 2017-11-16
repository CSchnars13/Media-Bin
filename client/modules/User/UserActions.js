import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_USER = 'ADD_POST';
export const CHECK_CREDS = 'CHECK_CREDS';

// Export Actions
export function addUser(user) {
  return {
    type: ADD_USER,
    user,
  };
}

export function addUserRequest(user) {
  return (dispatch) => {
    return callApi('user', 'users', {
      user: {
        email: user.email,
        password: user.password,
        role: user.role,
      },
    }).then(res => dispatch(addPost(res.user)));
  };
}

export function checkCredentials(user) {
  return {
    type: CHECK_CREDS,
    user,
  };
}

export function checkCredentialsRequest() {
  return (dispatch) => {
    return callApi('users', 'user', {
      user: {
        email: user.email,
        password: user.password,
        role: user.role,
      },
    }).then(res => {
      dispatch(addPosts(res.user));
    });
  };
}

