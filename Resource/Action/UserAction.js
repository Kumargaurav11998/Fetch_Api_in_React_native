import {USER_ACTION_TYPE} from '../ActionType/UserActionType';
import {UserService} from '../service/UserService';

export const UserAction = {
  GetUserList,
};
function GetUserList() {
  // console.log(mobile, date_time);
  return dispatch => {
    dispatch(request());
    return UserService.GerUserList().then(
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
      type: USER_ACTION_TYPE.GET_USER_LIST_REQUEST,
    };
  }
  function success(data) {
    return {type: USER_ACTION_TYPE.GET_USER_LIST_SUCCESS, data};
  }
  function failure(error) {
    return {type: USER_ACTION_TYPE.GET_USER_LIST_FAILURE, error};
  }
}
