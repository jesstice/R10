export const LOAD_SPEAKER_DATA = 'LOAD_SPEAKER_DATA';

export function loadSpeakerData(speakerData) {
  return {
    type: LOAD_SPEAKER_DATA,
    payload: speakerData
  }
}

export function fetchSpeakerData(speakerID) {
  return function (dispatch) {
    fetch(`https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="${speakerID}"`)
      .then(response => {
        return response.json()
      })
      .then(response => {
        return dispatch(loadSpeakerData(response))
      })
      .catch(errors => {
        return console.log(errors)
      })
  }
}

const initialState = {
  loading: true,
  speakerData: []
}

export function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SPEAKER_DATA:
      const loadState = {
        ...state,
        loading: false,
        speakerData: action.payload
      }
      return loadState;
    default:
      return state;
  }
}