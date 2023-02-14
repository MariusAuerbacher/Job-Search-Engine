
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE'

export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE'

export const STORE_JOBS = 'STORE_JOBS'

export const TOGGLE_LOADING = 'TOGGLE_LOADING'

export const TOGGLE_ERROR = 'TOGGLE_ERROR'

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

export const toggleLoading = (payload) => {
  return {
    type: TOGGLE_LOADING,
    payload: payload,
  }
}

export const toggleError = (payload) => {
  return {
    type: TOGGLE_ERROR,
    payload: payload,
  }
}

export const storeJobs = (payload) => {
  return {
    type: STORE_JOBS,
    payload: payload,
  }
}


export const fetchJobs = (baseEndpoint, query) => {
  return async(dispatch) => {
    	dispatch(toggleLoading(true))


    try {
      const response = await fetch(baseEndpoint + query + '&limit=20')
      if (response.ok) {
        const { data } = await response.json()
        dispatch(storeJobs(data))
        dispatch(toggleError(false))
      } else {
        dispatch(toggleError(true))
      }
    } catch (error) {
      console.log(error)
      dispatch(toggleError(true))
    } 
    dispatch(toggleLoading(false))
    
 
   
  
  }
}


