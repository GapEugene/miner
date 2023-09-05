import React from 'react';

import { FIELD_SISE } from '../../utilities/constants';

import tile2 from './2.png';

import style from './style.module.scss';

const Field = () => {
  return (
    <div className={style.field}>
      {[...Array(FIELD_SISE)].map((tile, index) => (
        <img key={`tile-${index}`} className={style.tile} src={tile2} alt="" />
      ))}
    </div>
  );
};

export default Field;
