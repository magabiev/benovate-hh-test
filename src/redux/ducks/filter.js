/** Types **/
const CATEGORIES_LOAD_STARTED = "categories/load/started";
const CATEGORIES_LOAD_SUCCEED = "categories/load/succeed";
const FILTERED_BY_ALPHABET = "users/filtered/byAlphabet";
const FILTERED_BY_ALPHABET_REVERSE = "users/filtered/byAlphabetReverse";
const FILTERED_BY_CATEGORIES = "users/filtered/byCategories";

/** State **/
const initialState = {
  categories: [],
  categoriesLoading: false,
  selectedCategoriesId: "",
  isFilteredByAlphabet: false,
  isFilteredByAlphabetReverse: false,
};

/** Reducer **/
export default function filter(state = initialState, action) {
  switch (action.type) {
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
        selectedCategoriesId: action.payload,
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
    default:
      return {
        ...state,
      };
  }
}

/** Thunks **/
export function loadCategories() {
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

export function usersByAlphabet() {
  return { type: FILTERED_BY_ALPHABET };
}

export function usersByAlphabetReverse() {
  return { type: FILTERED_BY_ALPHABET_REVERSE };
}

export function usersByCategories(groupId) {
  return { type: FILTERED_BY_CATEGORIES, payload: groupId };
}
