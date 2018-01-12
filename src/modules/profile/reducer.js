import * as constants from "./constants";

const initialState = {};

export const profile = (state = initialState, action) => {
  switch (action.type) {
    case constants.RECEIVED_API_ERROR:
      return {
        ...state,
        error: action.error,
        fetching: false
      };
    default:
      return state;
  }
};
