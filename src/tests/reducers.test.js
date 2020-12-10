import filter, {
  CATEGORIES_LOAD_STARTED,
  CATEGORIES_LOAD_SUCCEED,
  FILTERED_BY_ALPHABET,
  FILTERED_BY_ALPHABET_REVERSE,
  FILTERED_BY_CATEGORIES,
  filterInitialState,
} from "../redux/ducks/filter";
import users, {
  USERS_LOAD_STARTED,
  USERS_LOAD_SUCCEED,
  MORE_LOAD_STARTED,
  MORE_LOAD_SUCCEED,
  POPUP_SHOW_TOGGLE,
  USER_ADD_STARTED,
  USER_ADD_SUCCEED,
  usersInitialState,
  GET_TOTAL_COUNT,
} from "../redux/ducks/users";

describe("testing filter reducer", () => {
  it("CATEGORIES_LOAD_STARTED", () => {
    const action = { type: CATEGORIES_LOAD_STARTED };
    expect(filter(filterInitialState, action)).toEqual({
      ...filterInitialState,
      categoriesLoading: true,
    });
  });

  it("CATEGORIES_LOAD_SUCCEED", () => {
    const action = {
      type: CATEGORIES_LOAD_SUCCEED,
      payload: [1, 2, 3],
    };
    expect(filter(filterInitialState, action)).toEqual({
      ...filterInitialState,
      categories: action.payload,
      categoriesLoading: false,
    });
  });

  it("FILTERED_BY_CATEGORIES", () => {
    const action = {
      type: FILTERED_BY_CATEGORIES,
      payload: "",
    };
    expect(filter(filterInitialState, action)).toEqual({
      ...filterInitialState,
      selectedCategoriesId: action.payload,
    });
  });

  it("FILTERED_BY_ALPHABET", () => {
    const action = {
      type: FILTERED_BY_ALPHABET,
    };
    expect(filter(filterInitialState, action)).toEqual({
      ...filterInitialState,
      isFilteredByAlphabetReverse: false,
      isFilteredByAlphabet: true,
    });
  });

  it("FILTERED_BY_ALPHABET_REVERSE", () => {
    const action = {
      type: FILTERED_BY_ALPHABET_REVERSE,
    };
    expect(filter(filterInitialState, action)).toEqual({
      ...filterInitialState,
      isFilteredByAlphabet: false,
      isFilteredByAlphabetReverse: true,
    });
  });
});

describe("testing users reducer", () => {
  it("USERS_LOAD_STARTED", () => {
    const action = {
      type: USERS_LOAD_STARTED,
    };
    expect(users(usersInitialState, action)).toEqual({
      ...usersInitialState,
      usersLoading: true,
    });
  });

  it("USERS_LOAD_SUCCEED", () => {
    const action = {
      type: USERS_LOAD_SUCCEED,
      payload: [1, 2, 3],
    };
    expect(users(usersInitialState, action)).toEqual({
      ...usersInitialState,
      items: action.payload,
      usersLoading: false,
    });
  });

  it("GET_TOTAL_COUNT", () => {
    const action = {
      type: GET_TOTAL_COUNT,
      payload: "100",
    };
    expect(users(usersInitialState, action)).toEqual({
      ...usersInitialState,
      usersTotalCount: Number(action.payload),
    });
  });

  it("MORE_LOAD_STARTED", () => {
    const action = {
      type: MORE_LOAD_STARTED,
    };
    expect(users(usersInitialState, action)).toEqual({
      ...usersInitialState,
      usersMoreLoading: true,
    });
  });

  it("MORE_LOAD_SUCCEED", () => {
    const action = {
      type: MORE_LOAD_SUCCEED,
      payload: [1, 2, 3],
    };
    expect(users(usersInitialState, action)).toEqual({
      ...usersInitialState,
      items: action.payload,
      usersMoreLoading: false,
    });
  });

  it("POPUP_SHOW_TOGGLE", () => {
    const action = {
      type: POPUP_SHOW_TOGGLE,
    };
    expect(users(usersInitialState, action)).toEqual({
      ...usersInitialState,
      popUpIsShow: !usersInitialState.popUpIsShow,
    });
  });

  it("USER_ADD_STARTED", () => {
    const action = {
      type: USER_ADD_STARTED,
    };
    expect(users(usersInitialState, action)).toEqual({
      ...usersInitialState,
      adding: true,
    });
  });

  it("USER_ADD_SUCCEED", () => {
    const action = {
      type: USER_ADD_SUCCEED,
      payload: [1, 2, 3],
    };
    expect(users(usersInitialState, action)).toEqual({
      ...usersInitialState,
      items: [action.payload, ...usersInitialState.items],
      adding: false,
      popUpIsShow: false,
    });
  });
});
