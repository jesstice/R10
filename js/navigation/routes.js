import { createRouter } from '@expo/ex-navigation';
import Navigation from './NavigationLayout'
import About from '../scenes/About/';
import Faves from '../scenes/Faves/';
import Schedule from '../scenes/Schedule/';
import Sessions from '../scenes/Sessions/';
import Speaker from '../scenes/Speaker/';

export const Router = createRouter(() => ({
  navigationLayout: () => Navigation,
  about: () => About,
  faves: () => Faves,
  schedule: () => Schedule,
  session: () => Sessions,
  speaker: () => Speaker
}));