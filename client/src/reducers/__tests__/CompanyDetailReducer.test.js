import companyDetailReducer from "../CompanyDetailReducer";
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
  VOLATILITY,
  SHARE_PRICE_COMPARISON
} from "../../actions/Types";

describe("Testing Company Details Reducer", () => {
  it("should return a state object with user array equal to the payload in the action when the action type is COMOANY_DETAIL (when the returned state is initial state)", () => {
    const action = {
      type: COMPANY_DETAIL_BY_ID,
      payload: [{}, {}, {}]
    };
    const returnedState = companyDetailReducer(undefined, action);
    expect(returnedState).toEqual({
      company: action.payload,
      balance_sheet: [],
      ohlcChart: [],
      similar_company: [],
      dates: [],
      drop_down_data: [],
      gauge1: [],
      gauge2: [],
      monteCarlo1: [],
      monteCarlo2: [],
      assets1: [],
      assets2: [],
      priceComparison: [],
      voltality: []
    });
  });

  it("should return the initial state object when the action type is not mentioned or doesn't concern the reducer (when the returned state is initial state)", () => {
    let action = {
      payload: [{}, {}, {}]
    };
    action = {
      type: "SOME_TYPE",
      payload: [{}, {}, {}]
    };
    let returnedState = companyDetailReducer(undefined, action);
    expect(returnedState).toEqual({
      company: [],
      balance_sheet: [],
      ohlcChart: [],
      similar_company: [],
      dates: [],
      drop_down_data: [],
      gauge1: [],
      gauge2: [],
      monteCarlo1: [],
      monteCarlo2: [],
      assets1: [],
      assets2: [],
      priceComparison: [],
      voltality: []
    });
  });

  it("should return a state object with user array equal to the payload in the action when the action type is COMOANY_DETAIL (when the returned state is initial state)", () => {
    const action = {
      type: GET_GAUGE_COMPANY1,
      payload: [{}, {}, {}]
    };
    const returnedState = companyDetailReducer(undefined, action);
    expect(returnedState).toEqual({
      company: [],
      balance_sheet: [],
      ohlcChart: [],
      similar_company: [],
      dates: [],
      drop_down_data: [],
      gauge1: action.payload,
      gauge2: [],
      monteCarlo1: [],
      monteCarlo2: [],
      assets1: [],
      assets2: [],
      priceComparison: [],
      voltality: []
    });
  });

  it("should return a state object with user array equal to the payload in the action when the action type is COMOANY_DETAIL (when the returned state is initial state)", () => {
    const action = {
      type: GET_GAUGE_COMPANY2,
      payload: [{}, {}, {}]
    };
    const returnedState = companyDetailReducer(undefined, action);
    expect(returnedState).toEqual({
      company: [],
      balance_sheet: [],
      ohlcChart: [],
      similar_company: [],
      dates: [],
      drop_down_data: [],
      gauge1: [],
      gauge2: action.payload,
      monteCarlo1: [],
      monteCarlo2: [],
      assets1: [],
      assets2: [],
      priceComparison: [],
      voltality: []
    });
  });

  it("should return a state object with user array equal to the payload in the action when the action type is COMOANY_DETAIL (when the returned state is initial state)", () => {
    const action = {
      type: ASSETS_COMPANY1,
      payload: [{}, {}, {}]
    };
    const returnedState = companyDetailReducer(undefined, action);
    expect(returnedState).toEqual({
      company: [],
      balance_sheet: [],
      ohlcChart: [],
      similar_company: [],
      dates: [],
      drop_down_data: [],
      gauge1: [],
      gauge2: [],
      monteCarlo1: [],
      monteCarlo2: [],
      assets1: action.payload,
      assets2: [],
      priceComparison: [],
      voltality: []
    });
  });

  it("should return a state object with user array equal to the payload in the action when the action type is COMOANY_DETAIL (when the returned state is initial state)", () => {
    const action = {
      type: ASSETS_COMPANY2,
      payload: [{}, {}, {}]
    };
    const returnedState = companyDetailReducer(undefined, action);
    expect(returnedState).toEqual({
      company: [],
      balance_sheet: [],
      ohlcChart: [],
      similar_company: [],
      dates: [],
      drop_down_data: [],
      gauge1: [],
      gauge2: [],
      monteCarlo1: [],
      monteCarlo2: [],
      assets2: action.payload,
      assets1: [],
      priceComparison: [],
      voltality: []
    });
  });

  it("should return a state object with user array equal to the payload in the action when the action type is COMOANY_DETAIL (when the returned state is initial state)", () => {
    const action = {
      type: OHLC_CHART,
      payload: [{}, {}, {}]
    };
    const returnedState = companyDetailReducer(undefined, action);
    expect(returnedState).toEqual({
      company: [],
      balance_sheet: [],
      ohlcChart: [],
      similar_company: action.payload,
      dates: [],
      drop_down_data: [],
      gauge1: [],
      gauge2: [],
      monteCarlo1: [],
      monteCarlo2: [],
      assets1: [],
      assets2: [],
      priceComparison: [],
      voltality: []
    });
  });

  it("should return a state object with user array equal to the payload in the action when the action type is COMOANY_DETAIL (when the returned state is initial state)", () => {
    const action = {
      type: GET_SIMILAR_TABLE,
      payload: [{}, {}, {}]
    };
    const returnedState = companyDetailReducer(undefined, action);
    expect(returnedState).toEqual({
      company: [],
      balance_sheet: [],
      ohlcChart: [],
      similar_company: action.payload,
      dates: [],
      drop_down_data: [],
      gauge1: [],
      gauge2: [],
      monteCarlo1: [],
      monteCarlo2: [],
      assets1: [],
      assets2: [],
      priceComparison: [],
      voltality: []
    });
  });

  it("should return a state object with user array equal to the payload in the action when the action type is COMOANY_DETAIL (when the returned state is initial state)", () => {
    const action = {
      type: MONTECARLO_COMPANY1,
      payload: [{}, {}, {}]
    };
    const returnedState = companyDetailReducer(undefined, action);
    expect(returnedState).toEqual({
      company: [],
      balance_sheet: [],
      ohlcChart: [],
      similar_company: [],
      dates: [],
      drop_down_data: [],
      gauge1: [],
      gauge2: [],
      monteCarlo1: action.payload,
      monteCarlo2: [],
      assets1: [],
      assets2: [],
      priceComparison: [],
      voltality: []
    });
  });

  it("should return a state object with user array equal to the payload in the action when the action type is COMOANY_DETAIL (when the returned state is initial state)", () => {
    const action = {
      type: MONTECARLO_COMPANY2,
      payload: [{}, {}, {}]
    };
    const returnedState = companyDetailReducer(undefined, action);
    expect(returnedState).toEqual({
      company: [],
      balance_sheet: [],
      ohlcChart: [],
      similar_company: [],
      dates: [],
      drop_down_data: [],
      gauge1: [],
      gauge2: [],
      monteCarlo1: [],
      monteCarlo2: action.payload,
      assets1: [],
      assets2: [],
      priceComparison: [],
      voltality: []
    });
  });

  //test for Financials dates data stored inthe reducer array "dates"
  it("(Get Financials Dates Data)should return a state object with user array equal to the payload in the action when the action type is COMPANY_DATES_BY_ID (when the returned state is initial state)", () => {
    const action = {
      type: COMPANY_DATES_BY_ID,
      payload: [{}, {}, {}]
    };
    const returnedState = companyDetailReducer(undefined, action);
    expect(returnedState).toEqual({
      company: [],
      balance_sheet: [],
      ohlcChart: [],
      similar_company: [],
      dates: action.payload,
      drop_down_data: [],
      gauge1: [],
      gauge2: [],
      monteCarlo1: [],
      monteCarlo2: [],
      assets1: [],
      assets2: [],
      priceComparison: [],
      voltality: []
    });
  });

  it("should return a state object with user array equal to the payload in the action when the action type is COMOANY_DETAIL (when the returned state is initial state)", () => {
    const action = {
      type: BALANCE_SHEET,
      payload: [{}, {}, {}]
    };
    const returnedState = companyDetailReducer(undefined, action);
    expect(returnedState).toEqual({
      company: [],
      balance_sheet: action.payload,
      ohlcChart: [],
      similar_company: [],
      dates: [],
      drop_down_data: [],
      gauge1: [],
      gauge2: [],
      monteCarlo1: [],
      monteCarlo2: [],
      assets1: [],
      assets2: [],
      priceComparison: [],
      voltality: []
    });
  });

  it("should return a state object with user array equal to the payload in the action when the action type is COMOANY_DETAIL (when the returned state is initial state)", () => {
    const action = {
      type: GET_DROP_DOWN,
      payload: [{}, {}, {}]
    };
    const returnedState = companyDetailReducer(undefined, action);
    expect(returnedState).toEqual({
      company: [],
      balance_sheet: [],
      ohlcChart: [],
      similar_company: [],
      dates: [],
      drop_down_data: action.payload,
      gauge1: [],
      gauge2: [],
      monteCarlo1: [],
      monteCarlo2: [],
      priceComparison: [],
      voltality: [],
      assets1: [],
      assets2: []
    });
  });

  it("should return a state object with user array equal to the payload in the action when the action type is COMOANY_DETAIL (when the returned state is initial state)", () => {
    const action = {
      type: VOLATILITY,
      payload: [{}, {}, {}]
    };
    const returnedState = companyDetailReducer(undefined, action);
    expect(returnedState).toEqual({
      company: [],
      balance_sheet: [],
      ohlcChart: [],
      similar_company: [],
      dates: [],
      drop_down_data: [],
      gauge1: [],
      gauge2: [],
      monteCarlo1: [],
      monteCarlo2: [],
      priceComparison: [],
      voltality: action.payload,
      assets1: [],
      assets2: []
    });
  });

  it("should return a state object with user array equal to the payload in the action when the action type is COMOANY_DETAIL (when the returned state is initial state)", () => {
    const action = {
      type: SHARE_PRICE_COMPARISON,
      payload: [{}, {}, {}]
    };
    const returnedState = companyDetailReducer(undefined, action);
    expect(returnedState).toEqual({
      company: [],
      balance_sheet: [],
      ohlcChart: [],
      similar_company: [],
      dates: [],
      drop_down_data: [],
      gauge1: [],
      gauge2: [],
      monteCarlo1: [],
      monteCarlo2: [],
      priceComparison: action.payload,
      voltality: [],
      assets1: [],
      assets2: []
    });
  });
});
