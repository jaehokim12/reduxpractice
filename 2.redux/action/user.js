const logInRequest = data => {
  return {
    type: 'LOG_IN_REQUEST',
    data,
  };
};
const logInSuccess = data => {
  return {
    type: 'LOG_IN_SUCCESS',
    data,
  };
};
const logIn = data => {
  return (dispatch, getState) => {
    dispatch(logInRequest(data));
    try {
      setTimeout(() => {
        dispatch(
          logInSuccess({
            userId: 1,
            nickname: 'zerocho',
          })
        );
      }, 200);
    } catch (e) {
      dispatch(logInFailuer(e));
    }
  };
};
const logInFailuer = error => {
  return {
    type: 'LOG_IN_FAILURE',
  };
};
const logOut = data => {
  return {
    type: 'LOG_OUT',
    data,
  };
};

module.exports = { logIn, logOut };
