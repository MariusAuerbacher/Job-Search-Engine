import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE, STORE_JOBS } from "./actionTypes";

export const removeFromFavourite = (payload) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: payload,
  }
}


export const addToFavourite = (payload) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: payload,
  }
}


export const fetchJobs = (baseEndpoint, query) => {
  return async(dispatch) => {
    try {
      const response = await fetch(baseEndpoint + query + '&limit=20')
      if (response.ok) {
        const { data } = await response.json()
        dispatch(storeJobs(data))
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const storeJobs = (payload) => {
  return {
    type: STORE_JOBS,
    payload: payload,
  }
}
