const initialState = {
  places: [],
};

export const cultureReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PLACES":
      return {
        ...state,
        places: action.payload,
      };
    default:
      return state;
  }
};
