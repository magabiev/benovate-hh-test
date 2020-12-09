import { loadCategories } from "./filter";
/** Types **/
export const USERS_LOAD_STARTED = "users/load/started";
export const USERS_LOAD_SUCCEED = "users/load/succeed";
export const MORE_LOAD_STARTED = "users/loadMore/started";
export const MORE_LOAD_SUCCEED = "users/loadMore/succeed";
export const POPUP_SHOW_TOGGLE = "popUp/show/toggled";
export const USER_ADD_STARTED = "user/add/started";
export const USER_ADD_SUCCEED = "user/add/succeed";

/** State **/
export const usersInitialState = {
  items: [],
  usersLoading: false,
  usersMoreLoading: false,
  popUpIsShow: false,
  adding: false,
};

/** Reducer **/
export default function users(state = usersInitialState, action) {
  switch (action.type) {
    case USERS_LOAD_STARTED:
      return {
        ...state,
        usersLoading: true,
      };
    case USERS_LOAD_SUCCEED:
      return {
        ...state,
        items: action.payload,
        usersLoading: false,
      };
    case MORE_LOAD_STARTED:
      return {
        ...state,
        usersMoreLoading: true,
      };
    case MORE_LOAD_SUCCEED:
      return {
        ...state,
        items: action.payload,
        usersMoreLoading: false,
      };
    case POPUP_SHOW_TOGGLE:
      return {
        ...state,
        popUpIsShow: !state.popUpIsShow,
      };
    case USER_ADD_STARTED:
      return {
        ...state,
        adding: true,
      };
    case USER_ADD_SUCCEED:
      return {
        ...state,
        items: [action.payload, ...state.items],
        adding: false,
        popUpIsShow: false,
      };
    default:
      return {
        ...state,
      };
  }
}

/** Thunks **/
export function loadUsers() {
  return (dispatch) => {
    dispatch({ type: USERS_LOAD_STARTED });
    fetch("http://localhost:3005/users?_limit=50")
      .then((response) => response.json())
      .then((json) =>
        dispatch({
          type: USERS_LOAD_SUCCEED,
          payload: json,
        })
      );
  };
}

export function loadUsersMore(limit) {
  return (dispatch) => {
    dispatch({ type: MORE_LOAD_STARTED });
    fetch(`http://localhost:3005/users?_limit=${limit}`)
      .then((response) => {
        console.log(response.headers);
        return response.json();
      })
      .then((json) =>
        dispatch({
          type: MORE_LOAD_SUCCEED,
          payload: json,
        })
      );
  };
}

export function loadApplication() {
  return (dispatch) => {
    dispatch(loadCategories());
    dispatch(loadUsers());
  };
}

export function popUpShowToggled() {
  return { type: POPUP_SHOW_TOGGLE };
}

export function userAdded(name, lastName, groupId) {
  return (dispatch) => {
    dispatch({ type: USER_ADD_STARTED });
    fetch("http://localhost:3005/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        lastName,
        groupId,
      }),
    })
      .then((response) => response.json())
      .then((json) =>
        dispatch({
          type: USER_ADD_SUCCEED,
          payload: json,
        })
      );
  };
}
