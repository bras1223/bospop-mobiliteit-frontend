import thunkMiddleware from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { loadLogin } from "./localStorage";
import { authentication } from "src/modules/login/reducer";

const rootReducer = combineReducers({
  authentication
});
const middleware = applyMiddleware(thunkMiddleware);

const persistedLogin = loadLogin();

const store = createStore(
  rootReducer,
  persistedLogin,
  compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
