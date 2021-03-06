import * as types from "../actions/actionTypes";

const initialState = {
  email: "",
  admin: false,
  currentLang: "en",
  mainScreen: "",
  userToEdit: null,
  openCalendar: false,
  title: null,
  description: null,
  startDate: null,
  endDate: null
};

export default function userDataReducer(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_USER_DATA:
      return Object.assign({}, state, action.payload);
      
    default:
      return state;
  }
}
