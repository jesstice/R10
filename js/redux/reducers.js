import { combineReducers } from 'redux';
import { NavigationReducer } from '@expo/ex-navigation';
import { conductReducer } from './modules/conduct';
import { scheduleReducer } from './modules/schedule';
import { sessionReducer } from './modules/sesssions';

export default combineReducers({
  navigation: NavigationReducer,
  conduct: conductReducer,
  schedule: scheduleReducer,
  session: sessionReducer
})