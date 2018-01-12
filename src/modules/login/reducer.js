import * as constants from "./constants";
import Settings from "src/config/settings";

const initialState = {
  user: {
    apiToken: Settings.testApiToken,
    id: Settings.testUserId,
    name: undefined,
    imageUri: undefined
  }
};

export const authentication = (state = initialState, action) => {
  switch (action.type) {
    case constants.LOGOUT_USER:
      return {
        user: initialState.user
      };
    default:
      return state;
  }
};
