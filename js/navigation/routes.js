import { createRouter } from '@expo/ex-navigation';
import About from '../scenes/About/';
// import Faves from '../scenes/Faves/';
// import Schedule from '../scenes/Schedule/';
// import Sessions from '../scenes/Sessions/';
// import Speaker from '../scenes/Speaker/';

export const Router = createRouter(() => ({
  about: () => About,
  // faves: () => Faves,
  // schedule: () => Schedule,
  // sessions: () => Sessions,
  // speaker: () => Speaker
}));