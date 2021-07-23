const { createStore, compose, applyMiddleware } = require('redux');
const { logIn, logOut } = require('./action/user');
const { addPost } = require('./action/post');
const reducer = require('./reducers');

const initialState = {
  user: {
    isLogginIn: true,
    data: null,
  },
  post: [],
  Comment: [],
  favorites: [],
  history: [],
  likes: [],
  followers: [],
};
const firstMiddleware = store => dispatch => action => {
  console.log('로깅', action);
  dispatch(action);
};
const thunkMiddleware = store => dispatch => action => {
  if (typeof action === 'function') {
    //비동기 action type이 함수이면
    return action(store.dispatch, store.get);
  }
  return dispatch(action);
};
const enhancer = applyMiddleware(firstMiddleware, thunkMiddleware);
const store = createStore(reducer, initialState, enhancer);
console.log();
store.subscribe(
  (listner = () => {
    console.log('changed');
  })
);

console.log('1st', store.getState());

store.dispatch(logIn({ id: 1, name: 'zerocho', admin: true }));
console.log('2st', store.getState());
