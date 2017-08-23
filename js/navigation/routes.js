import { createRouter } from '@expo/ex-navigation';
import Navigation from './NavigationLayout'
import About from '../scenes/About/';
import Faves from '../scenes/Faves/';
import Schedule from '../scenes/Schedule/';
import Session from '../scenes/Session/';
import Speaker from '../scenes/Speaker/';

export const Router = createRouter(() => ({
  navigationLayout: () => Navigation,
  about: () => About,
  faves: () => Faves,
  schedule: () => Schedule,
  session: () => Session,
  speaker: () => Speaker
}));