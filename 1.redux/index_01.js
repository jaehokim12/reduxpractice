const { createStore } = require('redux');
//reducer
const reducer = (prevState, action) => {
  switch (action.type) {
    case 'CHANGE_COMP_A':
      return {
        ...prevState,
        compA: action.data,
      };
    case 'CHANGE_COMP_B':
      return {
        ...prevState,
        compB: action.data,
      };
    case 'CHANGE_COMP_C':
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
  compB: 12,
  compC: null,
};
//action
const changeCompA = data => {
  return {
    type: 'CHANGE_COMP_A',
    data,
  };
};
const store = createStore(reducer, initialState);
store.subscribe(
  (listner = () => {
    console.log('changed');
  })
);
console.log('1st', store.getState());

store.dispatch(changeCompA('c'));
console.log('2st', store.getState());
