import { formatSessionData } from '../../lib/dataFormatHelpers';
import { queryFaves } from '../../config/models';

const LOAD_FAVES_DATA = 'LOAD_FAVES_DATA';

export function loadFavesData(faveData) {
  return {
    type: LOAD_FAVES_DATA,
    payload: faveData
  }
}

export function fetchFaveData() {
  return function (dispatch) {
    fetch("https://r10app-95fea.firebaseio.com/sessions.json")
    .then(response => response.json())
    .then(response => {
      const faves = queryFaves().map(fave => fave.id);
      let filteredResponse = response.filter(item => faves.find(fave => fave === item.session_id));
      const scheduleData = formatSessionData(filteredResponse);
      dispatch(loadFavesData(scheduleData))
    })
    .catch(errors => console.log(errors))
  }
}

const initialState = {
  loading: true,
  favesData: []
}

export function favesReducer(state = initialState, action) {
  switch(action.type) {
    case LOAD_FAVES_DATA:
      const loadState = {
        ...state,
        loading: false,
        favesData: action.payload
      }
      return loadState;
    default:
      return state;
  }
}