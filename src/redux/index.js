import {combineReducers} from 'redux'
import user from "./user/reducers";
import notify from "./notify/reducers";

export default combineReducers({
  user,
  notify,
});
