import {AUTH_ACTION_TYPE} from '../ActionType/AuthActionType';
import {AuthService} from '../service/Authsevice';

export const AuthActtion = {
  LoginAction,
};
function LoginAction(username, pass) {
  // console.log(mobile, date_time);
  return dispatch => {
    dispatch(request());
    return AuthService.Login(username, pass).then(
      response => {
        dispatch(success(response));
        return Promise.resolve(response);
      },
      error => {
        dispatch(failure(error));
        return Promise.reject();
      },
    );
  };
  function request() {
    return {
      type: AUTH_ACTION_TYPE.LOGIN_REQUEST,
    };
  }
  function success(data) {
    return {type: AUTH_ACTION_TYPE.LOGIN_SUCCESS, data};
  }
  function failure(error) {
    return {type: AUTH_ACTION_TYPE.LOGIN_FAILURE, error};
  }
}
