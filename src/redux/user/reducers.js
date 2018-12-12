import ActionType from './actionType';
import user from './user';

export default (state = user, {type, params}) => {
  switch (type) {
    case ActionType.GET:
      return state;
    case ActionType.UPDATE:
      return {
        ...state,
        ...params,
      };
    default:
      return state
  }
};
