// import {
//   AUTH_LOGIN_REQUEST,
//   AUTH_LOGIN_FAILURE,
//   AUTH_LOGIN_SUCCESS,
//   AUTH_LOGOUT,
// } from "../actions/Authentication";
//
// let user = JSON.parse(localStorage.getItem("user"));
// const initialState = user ? { loggedIn: true, user } : {};
//
// export function authentication(state = initialState, action) {
//   switch (action.type) {
//     case AUTH_LOGIN_REQUEST:
//       return {
//         loggingIn: true,
//         user: action.user,
//       };
//     case AUTH_LOGIN_SUCCESS:
//       return {
//         loggedIn: true,
//         user: action.user,
//       };
//     case AUTH_LOGIN_FAILURE:
//       return {};
//     case AUTH_LOGOUT:
//       return {};
//     default:
//       return state;
//   }
// }
