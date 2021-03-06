import {
  CREATE_USER,
  LOGIN,
  RESET_PASSWORD,
  SEND_OTP,
  VERIFY_OTP,
  ERROR_TYPE,
  USER_HISTORY,
  BUY_STOCKS,
  WALLET,
  ALL_STOCKS_BOUGHT,
  SELL_STOCKS
} from "../actions/Types";

const initialstate = {
  users: [],
  error: "",
  userhistory: [],
  sell: [],
  wallet: []
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
    case USER_HISTORY:
      return { ...state, userhistory: action.payload };
    case WALLET:
      return { ...state, wallet: action.payload };
    case ALL_STOCKS_BOUGHT:
      return { ...state, users: action.payload };
    case SELL_STOCKS:
      return state;
    case BUY_STOCKS:
      return { ...state, users: action.payload };
    case ERROR_TYPE:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}
