import * as actions from './actions'

// Initial State
const initialState = {
    counter: 1,
  };
  // Redux: Counter Reducer
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case actions.INCREASE_COUNTER: {
        return {
          ...state,
          counter: state.counter + action.value,
        };
      }
      case actions.DECREASE_COUNTER: {
        return {
          ...state,
          counter: state.counter - action.value,
        };
      }
      default: {
        return state;
      }
    }
  };
  // Exports
  export default counterReducer;