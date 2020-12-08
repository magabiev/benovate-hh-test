/** Types **/
const USERS_LOAD_STARTED = "users/load/started";
const USERS_LOAD_SUCCEED = "users/load/succeed";
const CATEGORIES_LOAD_STARTED = "categories/load/started";
const CATEGORIES_LOAD_SUCCEED = "categories/load/succeed";
const MORE_LOAD_STARTED = "users/loadMore/started";
const MORE_LOAD_SUCCEED = "users/loadMore/succeed";
const FILTERED_BY_ALPHABET = "users/filtered/byAlphabet";
const FILTERED_BY_ALPHABET_REVERSE = "users/filtered/byAlphabetReverse";
const FILTERED_BY_CATEGORIES = "users/filtered/byCategories";
const POPUP_SHOW_TOGGLE = "popUp/show/toggled";
const USER_ADD_STARTED = "user/add/started";
const USER_ADD_SUCCEED = "user/add/succeed";

/** State **/
const initialState = {
  users: [],
  usersLoading: false,
  usersMoreLoading: false,
  categories: [],
  categoriesLoading: false,
  popUpIsShow: false,
  filterCategoriesId: "",
  isFilteredByAlphabet: false,
  isFilteredByAlphabetReverse: false,
  adding: false,
};

/** Reducer **/
export default function application(state = initialState, action) {
  switch (action.type) {
    case USERS_LOAD_STARTED:
      return {
        ...state,
        usersLoading: true,
      };
    case USERS_LOAD_SUCCEED:
      return {
        ...state,
        users: action.payload,
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
        users: action.payload,
        usersMoreLoading: false,
      };
    case CATEGORIES_LOAD_STARTED:
      return {
        ...state,
        categoriesLoading: true,
      };
    case CATEGORIES_LOAD_SUCCEED:
      return {
        ...state,
        categories: action.payload,
        categoriesLoading: false,
      };
    case FILTERED_BY_CATEGORIES:
      return {
        ...state,
        filterCategoriesId: action.payload,
      };
    case FILTERED_BY_ALPHABET:
      return {
        ...state,
        isFilteredByAlphabetReverse: false,
        isFilteredByAlphabet: true,
      };
    case FILTERED_BY_ALPHABET_REVERSE:
      return {
        ...state,
        isFilteredByAlphabet: false,
        isFilteredByAlphabetReverse: true,
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
        users: [action.payload, ...state.users],
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
      .then((response) => response.json())
      .then((json) =>
        dispatch({
          type: MORE_LOAD_SUCCEED,
          payload: json,
        })
      );
  };
}
function loadCategories() {
  return (dispatch) => {
    dispatch({ type: CATEGORIES_LOAD_STARTED });
    fetch("http://localhost:3005/categories")
      .then((response) => response.json())
      .then((json) =>
        dispatch({
          type: CATEGORIES_LOAD_SUCCEED,
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
export function usersByAlphabet() {
  return { type: FILTERED_BY_ALPHABET };
}
export function usersByAlphabetReverse() {
  return { type: FILTERED_BY_ALPHABET_REVERSE };
}
export function usersByCategories(groupId) {
  return { type: FILTERED_BY_CATEGORIES, payload: groupId };
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