import * as types from '../actions/actionTypes';

const usersReducer = (state = [], action) => {
  switch(action.type) {

    case types.ADD_USER:
      return [
        action.payload,
        ...state
      ];

    default:
      return state;
  }

}

export default usersReducer;
