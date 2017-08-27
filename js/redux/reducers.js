import { combineReducers } from 'redux';
import { NavigationReducer } from '@expo/ex-navigation';
import { conductReducer } from './modules/conduct';
import { scheduleReducer } from './modules/schedule';
import { sessionReducer } from './modules/session';
import { favesReducer } from './modules/faves';

export default combineReducers({
  navigation: NavigationReducer,
  conduct: conductReducer,
  schedule: scheduleReducer,
  session: sessionReducer,
  faves: favesReducer
})