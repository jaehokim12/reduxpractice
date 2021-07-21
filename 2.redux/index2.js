const { createStore } = require('redux');
const reducer = require('./reducer');
//reducer

const initialState = {
  compA: 'a',
  compB: 1,
  compC: null,
};
const store = createStore(reducer, initialState);
//action

const changeCompA = data => {
  return {
    type: 'CHANGE_COMPA',
    data,
  };
};
store.subscribe(
  (listner = () => {
    console.log('change');
  })
);
console.log('1st', store.getState());

store.dispatch(changeCompA('c'));
console.log('2st', store.getState());
