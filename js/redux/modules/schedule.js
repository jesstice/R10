import { formatSessionData } from '../../lib/dataFormatHelpers';
import { queryFaves } from '../../config/models';

export const LOAD_SCHEDULE_DATA = 'LOAD_SCHEDULE_DATA';
export const GET_FAVE_SESSIONS = 'GET_FAVE_SESSIONS';

export function loadScheduleData(scheduleData) {
  return {
    type: LOAD_SCHEDULE_DATA,
    payload: scheduleData
  }
}

export function fetchScheduleData() {
  return function (dispatch) {
    fetch("https://r10app-95fea.firebaseio.com/sessions.json")
      .then(response => response.json())
      .then(response => {
        const scheduleData = formatSessionData(response);
        dispatch(loadScheduleData(scheduleData))
      })
      .catch(errors => console.log(errors))
  }
}

export function getFaveSessions() {
  const faves = queryFaves().map(fave => fave.id);
  return {
    type: GET_FAVE_SESSIONS,
    payload: faves
  }
}

const initialState = {
  loading: true,
  scheduleData: [],
  faves: []
}

export function scheduleReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SCHEDULE_DATA:
      const loadState = {
        ...state,
        loading: false,
        scheduleData: action.payload
      }
      return loadState;
    case GET_FAVE_SESSIONS:
      const faveState = {
        ...state,
        faves: action.payload
      }
      return faveState;
    default:
      return state;
  }
}