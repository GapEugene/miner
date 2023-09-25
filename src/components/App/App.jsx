import React from 'react';

import Gui from '../Gui';
import Scene from '../Scene';

import style from './style.module.scss';

const App = () => {
  return (
    <div className={style.wrapper}>
      <Gui />
      <Scene />
    </div>
  );
};

export default App;
