const { createStore } = require('redux');

//reducer
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
