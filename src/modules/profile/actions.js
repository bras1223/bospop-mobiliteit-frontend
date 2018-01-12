import * as constants from "./constants";
import { removeLogin } from "../../localStorage";

export const handleLogoutUser = () => {
  removeLogin();
  window.plugins.googleplus.logout();

  return {
    type: constants.LOGOUT_USER
  };
};

export const receivedApiError = error => {
  return {
    type: constants.RECEIVED_API_ERROR,
    error: error
  };
};
