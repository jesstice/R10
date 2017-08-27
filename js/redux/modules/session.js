import { formatDataObject } from '../../lib/dataFormatHelpers';

export const LOAD_SPEAKER_DATA = 'LOAD_SPEAKER_DATA';
export const UPDATE_FAVE_STATUS = 'UPDATE_FAVE_STATUS';

export function loadSpeakerData(speakerData) {
  return {
    type: LOAD_SPEAKER_DATA,
    payload: speakerData
  }
}

export function fetchSpeakerData(speakerID) {
  return function (dispatch) {
    fetch(`https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="${speakerID}"`)
      .then(response => response.json())
      .then(response => {
        let speakerData = formatDataObject(response)
        dispatch(loadSpeakerData(speakerData))
      })
      .catch(errors => {
        return console.log(errors)
      })
  }
}

export function updateFaveStatus(bool) {
  return {
    type: UPDATE_FAVE_STATUS,
    payload: bool
  }
}

const initialState = {
  loading: true,
  speakerData: {},
  faveStatus: false
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
    case UPDATE_FAVE_STATUS:
      const faveState = {
        ...state,
        faveStatus: action.payload
      }
      return faveState;
    default:
      return state;
  }
}