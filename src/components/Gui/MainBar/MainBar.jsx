import React from 'react';

import { ReactComponent as IconThreeDots } from './assets/icons/icon-48-three-dots.svg';
import { ReactComponent as IconHouse } from './assets/icons/icon-48-house.svg';
import { ReactComponent as IconSpeaker } from './assets/icons/icon-48-speaker.svg';

import style from './style.module.scss';

const MainBar = () => {
  return (
    <div className={style.bar}>
      <button className={style.button}>
        <IconThreeDots className={style.icon} />
      </button>
      <button className={style.button}>
        <IconHouse className={style.icon} />
      </button>
      <button className={style.button}>
        <IconSpeaker className={style.icon} />
      </button>
    </div>
  );
};

export default MainBar;
