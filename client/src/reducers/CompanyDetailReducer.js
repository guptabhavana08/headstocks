import {
  COMPANY_DETAIL_BY_ID,
  BALANCE_SHEET,
  OHLC_CHART,
  GET_SIMILAR_TABLE,
  COMPANY_DATES_BY_ID,
  GET_DROP_DOWN,
  GET_GAUGE_COMPANY1,
  GET_GAUGE_COMPANY2,
  ASSETS_COMPANY1,
  ASSETS_COMPANY2,
  MONTECARLO_COMPANY1,
  MONTECARLO_COMPANY2,
  VOLATILITY
} from "../actions/Types";

const initialState = {
  company: [],
  balance_sheet: [],
  ohlc_chart: [],
  similar_company: [],
  dates: [],
  drop_down_data: [],
  gauge1: [],
  gauge2: [],
  monteCarlo1: [],
  monteCarlo2: [],
  assets1: [],
  assets2: [],
  voltality: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case COMPANY_DETAIL_BY_ID:
      return {
        ...state,
        company: action.payload
      };
    case COMPANY_DATES_BY_ID:
      return {
        ...state,
        dates: action.payload
      };
    case GET_SIMILAR_TABLE:
      return {
        ...state,
        similar_company: action.payload
      };
    case BALANCE_SHEET:
      return {
        ...state,
        balance_sheet: action.payload
      };
    case GET_DROP_DOWN:
      return {
        ...state,
        drop_down_data: action.payload
      };
    case OHLC_CHART:
      return { ...state, ohlc_chart: action.payload };
    case GET_GAUGE_COMPANY1:
      return { ...state, gauge1: action.payload };
    case GET_GAUGE_COMPANY2:
      return { ...state, gauge2: action.payload };
    case MONTECARLO_COMPANY1:
      return { ...state, monteCarlo1: action.payload };
    case MONTECARLO_COMPANY2:
      return { ...state, monteCarlo2: action.payload };
    case ASSETS_COMPANY1:
      return { ...state, assets1: action.payload };
    case ASSETS_COMPANY2:
      return { ...state, assets2: action.payload };
    case VOLATILITY:
      return { ...state, voltality: action.payload };
    default:
      return state;
  }
}
