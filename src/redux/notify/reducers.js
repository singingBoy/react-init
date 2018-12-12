import ActionType from './actionType';
import notify from './notify';

export default (state = notify, {type, params}) => {
  console.log(type, params)
  switch (type) {
    case ActionType.SHOW:
      return {
        ...state,
        ...params,
        open: true,
      };
    case ActionType.CLOSE:
      return {
        ...state,
        ...params,
        open: false,
      };
    default:
      return state
  }
};
