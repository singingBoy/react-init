import ActionType from './actionType';

export const showNotify = user => ({
  type: ActionType.SHOW,
  params: user,
});

export const closeNotify = () => ({
  type: ActionType.CLOSE,
});
