import { STORE_JOBS } from "../actions/actionTypes";

const initialState = {
  jobs: []
}


const jobReducer = (state = initialState, action) => {
  switch (action.type){

    case STORE_JOBS:
    return {
      jobs: action.payload
    }
    default:
    return state
  }

}


export default jobReducer