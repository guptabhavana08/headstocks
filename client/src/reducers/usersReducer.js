import {
  CREATE_USER,
  LOGIN,
  RESET_PASSWORD,
  SEND_OTP,
  VERIFY_OTP,
  ERROR_TYPE
} from "../actions/Types";

const initialstate = {
  users: [],
  error: ""
};

export default function(state = initialstate, action) {
  switch (action.type) {
    case CREATE_USER:
      return state;
    case LOGIN:
      return state;
    case RESET_PASSWORD:
      return state;
    case SEND_OTP:
      return state;
    case VERIFY_OTP:
      return state;
    case ERROR_TYPE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}