export const LOAD_SESSION_DATA = 'LOAD_SESSION_DATA';

export function loadSessionData(sessionData) {
  return {
    type: LOAD_SESSION_DATA,
    payload: sessionData
  }
}

export function fetchSessionData() {
  return function (dispatch) {
    fetch("https://r10app-95fea.firebaseio.com/sessions.json")
      .then(response => {
        return response.json()
      })
      .then(response => {
        return dispatch(loadSessionData(response))
      })
      .catch(errors => {
        return console.log(errors)
      })
  }
}

const initialState = {
  loading: true,
  sessionData: []
}

export function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SESSION_DATA:
      const loadState = {
        ...state,
        loading: false,
        sessionData: action.payload
      }
      return loadState;
    default:
      return state;
  }
}