const initialState = [];
const postReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return;
      post: [...prevState, action.data];
    default:
      return prevState;
  }
};

module.exports = postReducer;
