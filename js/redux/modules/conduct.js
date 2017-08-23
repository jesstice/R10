export const LOAD_CONDUCT_DATA = 'LOAD_CONDUCT_DATA';

export function loadConductData(conductData) {
  return {
    type: LOAD_CONDUCT_DATA,
    payload: conductData
  }
}

export function fetchConductData() {
  return function (dispatch) {
    fetch("https://r10app-95fea.firebaseio.com/code_of_conduct.json")
      .then(response => {
        return response.json()
      })
      .then(response => {
        return dispatch(loadConductData(response))
      })
      .catch(errors => {
        return console.log(errors)
      })
  }
}

const initialState = {
  loading: true,
  conductData: []
}

export function conductReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CONDUCT_DATA:
      const loadState = {
        ...state,
        loading: false,
        conductData: action.payload
      }
      return loadState;
    default:
      return state;
  }
}