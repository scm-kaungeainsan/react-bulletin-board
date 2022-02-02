import { combineReducers } from "redux";
// import { routerReducer as routing } from "react-router-redux";

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const authReducer = (state = { isAuthenticated: false }, { payload, type }) => {
  switch (type) {
    case LOGIN:
      return { ...state, isAuthenticated: true };
    case LOGOUT:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

export default combineReducers({
  auth: authReducer
  // routing
});
