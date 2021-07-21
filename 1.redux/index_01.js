const { createStore } = require('redux');
//reducer
const reducer = (prevState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...prevState,
        user: action.data,
      };
    case 'LOG_OUT':
      return {
        ...prevState,
        user: null,
      };
    case 'ADD_POST':
      return {
        ...prevState,
        post: [...prevState.posts, action.data],
      };
    default:
      return prevState;
  }
};
const initialState = {
  user: null,
  posts: [],
};
//action
const logIn = data => {
  return {
    type: 'LOG_IN',
    data,
  };
};
const logOut = data => {
  return {
    type: 'LOG_OUT',
    data,
  };
};
const addPost = data => {
  return {
    type: 'ADD_POST',
    data,
  };
};

const store = createStore(reducer, initialState);
console.log();
store.subscribe(
  (listner = () => {
    console.log('changed');
  })
);
console.log('1st', store.getState());

store.dispatch(logIn({ id: 1, name: 'zerocho', admin: true }));
console.log('2st', store.getState());
