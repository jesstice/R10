import { formatSessionData } from '../../lib/dataFormatHelpers';

export const LOAD_SCHEDULE_DATA = 'LOAD_SCHEDULE_DATA';

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

const initialState = {
  loading: true,
  scheduleData: []
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
    default:
      return state;
  }
}