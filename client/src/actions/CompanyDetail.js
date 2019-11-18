import {
  COMPANY_DETAIL,
  COMPANY_DETAIL_BY_ID,
  COMPANY_DATES_BY_ID,
  OHLC_CHART,
  GET_SIMILAR_TABLE,
  GET_DROP_DOWN,
  GET_GAUGE_COMPANY1,
  VOLATILITY,
  GET_GAUGE_COMPANY2,
  MONTECARLO_COMPANY1,
  MONTECARLO_COMPANY2,
  ASSETS_COMPANY1,
  ASSETS_COMPANY2
} from "./Types";
import { startLoading, stopLoading } from "./LoadingAction";
import axios from "axios";

// getting company details[NIKHIL]
export const getCompanyDetail = () => dispatch => {
  try {
    return axios
      .get("http://localhost:2001/api/companydetail/all")
      .then(res => {
        dispatch({
          type: COMPANY_DETAIL,
          payload: res.data.data
        });
      });
  } catch (err) {
    console.log(err);
  }
};

// getting company details by id [NIKHIL]
export const getCompanyDetailById = id => dispatch => {
  console.log("get companydetails by id from actions", id);
  try {
    return axios
      .get("http://localhost:2001/api/companydetail/" + id)
      .then(res => {
        dispatch({
          type: COMPANY_DETAIL_BY_ID,
          payload: res.data.data
        });
        let sector = {
          sector: res.data.data["0"].sector
        };
        console.log("obj sector from action", sector);

        //To call another action within the action we call the function in the dipatch.
        // calling another action
        dispatch(getSimilarTable(sector));

        console.log("from then");
      });
  } catch (err) {
    console.log(err);
  }
};

//GETTING DATA FOR DROPDOWN
export const getDropDownData = sector => dispatch => {
  console.log("actions of dropdown", sector);
  try {
    return axios
      .post("http://localhost:2001/api/dropdown", sector)
      .then(res => {
        dispatch({
          type: GET_DROP_DOWN,
          payload: res.data.data
        });
        console.log("from then of drop down action");
      });
  } catch (err) {
    console.log(err);
  }
};

//getting analysis
export const getSimilarTable = sector => dispatch => {
  // const sector = requset.body.sector;
  console.log("get analysis by id from actions", sector);
  try {
    return axios
      .post("http://localhost:2001/api/analysis/analysis", sector)
      .then(res => {
        dispatch({
          type: GET_SIMILAR_TABLE,

          payload: res.data.data
        });
        console.log("from then of similar table");
        dispatch(getDropDownData(sector));
      });
  } catch (err) {
    console.log(err);
  }
};

// Fetching OHLC Chart for company [Bhavana]
export const getOhlcChart = id => dispatch => {
  console.log(id);
  dispatch(startLoading());
  try {
    return axios.get("http://localhost:5000/companyindices/" + id).then(res => {
      dispatch(stopLoading());
      dispatch({
        type: OHLC_CHART,

        payload: res.data
      });
    });
  } catch (err) {
    dispatch(startLoading());
    console.log(err);
  }
};

// downloading ohlc data for company[piyush]

export const downloadOhlcDataCompany = ohlc => {
  try {
    return axios.get(
      "http://localhost:2001/api/companydetail/downloadohlc/" + ohlc
    );
  } catch (err) {
    console.log(err);
  }
};

// getting company dates by id
export const getCompanyDatesById = id => dispatch => {
  // console.log("get companydetails by id from actions", id);
  try {
    return axios
      .get("http://localhost:2001/api/companydetail/financial/" + id)
      .then(res => {
        dispatch({
          type: COMPANY_DATES_BY_ID,
          payload: res.data.data
        });
      });
  } catch (err) {
    console.log(err);
  }
};

// Gauge for Company1
export const getGaugeCompany1 = ticker => dispatch => {
  dispatch(startLoading());
  try {
    return axios
      .get("http://localhost:5000/gaugeCompany1/" + ticker)
      .then(res => {
        dispatch(stopLoading());
        dispatch({
          type: GET_GAUGE_COMPANY1,

          payload: res.data
        });
      });
  } catch (err) {
    dispatch(startLoading());
    console.log(err);
  }
};

// gauge fro company2
export const getGaugeCompany2 = ticker => dispatch => {
  dispatch(startLoading());
  try {
    return axios
      .get("http://localhost:5000/gaugeCompany2/" + ticker)
      .then(res => {
        dispatch(stopLoading());
        dispatch({
          type: GET_GAUGE_COMPANY2,

          payload: res.data
        });
      });
  } catch (err) {
    dispatch(startLoading());
    console.log(err);
  }
};

// Montre Carlo Prediction for Company1
export const getmonteCarloCompany1 = ticker => dispatch => {
  dispatch(startLoading());
  try {
    return axios
      .get("http://localhost:5000/monteCarloCompany1/" + ticker)
      .then(res => {
        dispatch(stopLoading());
        dispatch({
          type: MONTECARLO_COMPANY1,

          payload: res.data
        });
      });
  } catch (err) {
    dispatch(startLoading());
    console.log(err);
  }
};

// Monte Carlo Prediction for Company2
export const getmonteCarloCompany2 = ticker => dispatch => {
  dispatch(startLoading());
  try {
    return axios
      .get("http://localhost:5000/monteCarloCompany2/" + ticker)
      .then(res => {
        dispatch(stopLoading());
        dispatch({
          type: MONTECARLO_COMPANY1,

          payload: res.data
        });
      });
  } catch (err) {
    dispatch(startLoading());
  }
};

// Assets and Liabilities Graph for Company1
export const getAssetsCompany1 = ticker => dispatch => {
  dispatch(startLoading());
  try {
    return axios
      .get("http://localhost:5000/assetsCompany1/" + ticker)
      .then(res => {
        dispatch(stopLoading());
        dispatch({
          type: ASSETS_COMPANY1,

          payload: res.data
        });
      });
  } catch (err) {
    dispatch(startLoading());
  }
};

// Assets and Liabilities Graph for Company1
export const getAssetsCompany2 = ticker => dispatch => {
  dispatch(startLoading());
  try {
    return axios
      .get("http://localhost:5000/assetsCompany2/" + ticker)
      .then(res => {
        dispatch(stopLoading());
        dispatch({
          type: ASSETS_COMPANY2,

          payload: res.data
        });
      });
  } catch (err) {
    dispatch(startLoading());
  }
};

export const getVolatility = ticker => dispatch => {
  dispatch(startLoading());
  try {
    return axios.get("http://localhost:5000/voltality/" + ticker).then(res => {
      dispatch(stopLoading());
      dispatch({
        type: VOLATILITY,

        payload: res.data
      });
    });
  } catch (err) {
    dispatch(startLoading());
  }
};
