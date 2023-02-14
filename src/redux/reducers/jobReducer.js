import { STORE_JOBS, TOGGLE_ERROR, TOGGLE_LOADING } from "../actions";

const initialState = {
  jobs: [],
  isLoading: false,
  isError: false
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };

    case TOGGLE_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case TOGGLE_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};

export default jobReducer;
