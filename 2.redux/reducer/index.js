const reducer = (prevState, action) => {
  switch (action.type) {
    case 'CHANGE_COMPA':
      return {
        ...prevState,
        compA: action.data,
      };
    case 'CHANGE_COMPB':
      return {
        ...prevState,
        compB: action.data,
      };
    case 'CHANGE_COMPC':
      return {
        ...prevState,
        compC: action.data,
      };
    default:
      return prevState;
  }
};
module.exports = reducer;
