import React from 'react';
import classnames from 'classnames';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import { FIELD_SISE } from '../../utilities/constants';

import tile2 from './2.png';

import style from './style.module.scss';

const Field = () => {
  const flowState = useSelector((state) => state.flow.value);
  const row = 1;
  const rowFirstTile = row * 5 - 4;
  const rowLastTile = row * 5;

  const getTileClassName = (index) => {
    if (flowState === 'TILE_CHOOSE') {
      return rowFirstTile <= (FIELD_SISE - (index))
        && (FIELD_SISE - (index)) <= rowLastTile ? style.tileActive : style.tileDisabled;
    }
  };

  return (
    <div className={style.field}>
      {[...Array(FIELD_SISE)].map((tile, index) => (
        <img
          key={`tile-${index}`}
          className={classnames(style.tile, getTileClassName(index))}
          src={tile2}
          alt=""
        />
      ))}
    </div>
  );
};

export default Field;
