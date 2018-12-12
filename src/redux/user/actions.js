import ActionType from './actionType';

export const updateUser = user => ({
  type: ActionType.UPDATE,
  params: user,
});

export const getUser = () => ({
  type: ActionType.GET,
});
