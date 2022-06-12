export const Types = {
  GET_USERS_REQUEST: "GET_USERS_REQUEST",
  GET_USERS_SUCCESS: "GET_USERS_SUCCESS",
  GET_USER_REQUEST: "GET_USER_REQUEST"
};

export const getUsersRequest = () => ({
  type: Types.GET_USERS_REQUEST
});

export const getUsersSuccess = (items) => ({
  type: Types.GET_USERS_SUCCESS,
  payload: { items }
});

export const getUserRequest = () => ({
  type: Types.GET_USER_REQUEST
});
