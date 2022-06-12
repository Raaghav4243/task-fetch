import { Types } from "../actions/users";

const initialState = {
  items: [],
  user: {}
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS:
      return {
        ...state,
        items: action.payload.items
      };
    case Types.SET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user
      };

    default:
      return state;
  }
};
