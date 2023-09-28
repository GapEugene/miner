import React, { useRef } from 'react';
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { useSound } from 'use-sound';

import Mole from '../Mole';

import { getVwCoords } from '../../utilities/getVwCoords';
import { isBomb } from '../../utilities/isBombs';

import { nextRow, restart } from '../../store/reducers/rowSlice';
import { defeat } from '../../store/reducers/flowSlice';
import { setCoords } from '../../store/reducers/moleSlice';

import { FIELD_SISE, FLOW } from '../../utilities/constants';

import tileImage from './assets/images/tile.png';
import lavaImage from './assets/images/lava.png';

import deathSound1 from './assets/sounds/death-1.mp3';
import deathSound2 from './assets/sounds/death-2.mp3';
import deathSoundIdle from './assets/sounds/death-idle.mp3';
import winSound from './assets/sounds/win.mp3';

import style from './style.module.scss';

const Field = () => {
  const [playSound1] = useSound(deathSound1);
  const [playSound2] = useSound(deathSound2);
  const [playSound3] = useSound(deathSoundIdle);
  const [playSound4] = useSound(winSound);

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
      playSound1();
      playSound2();
      dispatch(defeat());
      dispatch(restart());
      playSound3();
    }

    if (!isBomb(index)) {
      if (rowState === 13) {
        dispatch(defeat());
        dispatch(restart());
        playSound4();
      }

      if (rowState < 13) {
        dispatch(nextRow());
      }
    }
  };

  const tilesRef = useRef([]);

  const getTileBackgroundImage = (index) => {
    if (isBomb(index) && flowState === FLOW.DEFEAT) {
      return `url(${lavaImage})`;
    }

    return `url(${tileImage})`;
  };

  return (
    <>
      <Mole />
      <div className={style.field}>
        {[...Array(FIELD_SISE)].map((tile, index) => {
          return <div
            key={`tile-${index}`}
            className={classnames(style.tile, getTileClassName(index), isBomb(index) && style.tileBomb)}
            onClick={() => getRowTiles(index) && tileClick(index)}
            ref={(element) => tilesRef.current[index] = element}
            style={{ backgroundImage: getTileBackgroundImage(index) }}
          />
        })}
      </div>
    </>
  );
};

export default Field;
