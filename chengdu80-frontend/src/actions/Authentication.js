// import authService from "../services/AuthenticationService";
// import AuthenticationService from "../services/AuthenticationService";
// export const AUTH_LOGIN_REQUEST = "AUTH_LOGIN_REQUEST";
// export const AUTH_LOGIN_SUCCESS = "AUTH_LOGIN_SUCCESS";
// export const AUTH_LOGIN_FAILURE = "AUTH_LOGIN_FAILURE";
//
// export const AUTH_LOGOUT = "AUTH_LOGOUT";
//
// export const authActions = {
//   login,
//   logout,
// };
//
// function login(username, password) {
//   return (dispatch) => {
//     const user = authService.authentication(username, password);
//
//     if (user !== null) {
//       dispatch(success(user));
//     } else {
//       dispatch(failure());
//     }
//   };
//
//   function success(user) {
//     return { type: AUTH_LOGIN_SUCCESS, user };
//   }
//   function failure() {
//     return { type: AUTH_LOGIN_FAILURE };
//   }
// }
//
// function logout() {
//   AuthenticationService.resetUser();
//   return { type: AUTH_LOGOUT };
// }
