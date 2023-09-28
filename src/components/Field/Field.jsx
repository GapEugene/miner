import React, { useRef } from 'react';
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

import Mole from '../Mole';

import { getVwCoords } from '../../utilities/getVwCoords';
import { isBomb } from '../../utilities/setBombs';

import { nextRow, restart } from '../../store/reducers/rowSlice';
import { defeat } from '../../store/reducers/flowSlice';
import { setCoords } from '../../store/reducers/moleSlice';

import { FIELD_SISE, FLOW } from '../../utilities/constants';

import tileImage from './assets/images/tile.png';

import style from './style.module.scss';

const Field = () => {
  const flowState = useSelector((state) => state.flow.value);
  const rowState = useSelector((state) => state.row.value);
  const sceneState = useSelector((state) => state.scene.value);
  const dispatch = useDispatch();

  const getRowTiles = (index) => {
    const rowFirstTile = rowState * 5 - 4;
    const rowLastTile = rowState * 5;

    return rowFirstTile <= (FIELD_SISE - (index))
      && (FIELD_SISE - (index)) <= rowLastTile;
  };

  const getTileClassName = (index) => {
    if (flowState === FLOW.TILE_CHOOSE) {
      return getRowTiles(index) ? style.tileActive : style.tileDisabled;
    }
  };

  const tileClick = (index) => {
    const top = Math.round(tilesRef.current[index].getBoundingClientRect().top);
    const left = Math.round(tilesRef.current[index].getBoundingClientRect().left);

    dispatch(setCoords({ top: `${getVwCoords(top + sceneState.top)}vw`, left: `${getVwCoords(left + sceneState.left)}vw` }));

    if (isBomb(index)) {
      dispatch(defeat());
      dispatch(restart());
    }

    if (!isBomb(index)) {
      if (rowState === 13) {
        dispatch(defeat());
        dispatch(restart());
      }

      if (rowState < 13) {
        dispatch(nextRow());
      }
    }
  };

  const tilesRef = useRef([]);

  return (
    <>
      <Mole />
      <div className={style.field}>
        {[...Array(FIELD_SISE)].map((tile, index) => {
          return <img
            key={`tile-${index}`}
            className={classnames(style.tile, getTileClassName(index), isBomb(index) && style.tileBomb)}
            src={tileImage}
            alt=""
            onClick={() => getRowTiles(index) && tileClick(index)}
            ref={(element) => tilesRef.current[index] = element}
          />
        })}
      </div>
    </>
  );
};

export default Field;
