import filter, {
  CATEGORIES_LOAD_STARTED,
  CATEGORIES_LOAD_SUCCEED,
  FILTERED_BY_ALPHABET,
  initialState,
} from "../redux/ducks/filter";

describe("testing filter reducer", () => {
  it("CATEGORIES_LOAD_STARTED", () => {
    const action = {
      type: CATEGORIES_LOAD_STARTED,
    };
    expect(filter(initialState, action)).toEqual({
      ...initialState,
      categoriesLoading: true,
    });
  });

  it("CATEGORIES_LOAD_SUCCEED", () => {
    const action = {
      type: CATEGORIES_LOAD_SUCCEED,
      payload: [],
    };
    expect(filter(initialState, action)).toEqual({
      ...initialState,
      categories: action.payload,
      categoriesLoading: false,
    });
  });

  it("FILTERED_BY_ALPHABET", () => {
    const action = {
      type: FILTERED_BY_ALPHABET,
    };
    expect(filter(initialState, action)).toEqual({
      ...initialState,
      isFilteredByAlphabetReverse: false,
      isFilteredByAlphabet: true,
    });
  });
});
