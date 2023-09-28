import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSound } from 'use-sound';

import { tileChoose, win } from '../../../store/reducers/flowSlice';
import { restart } from '../../../store/reducers/rowSlice';
import { resetCoords } from '../../../store/reducers/moleSlice';

import { FLOW } from '../../../utilities/constants';

import startSound from './assets/sounds/start.mp3';
import styles from './style.module.scss';

const Play = () => {
  const flowState = useSelector((state) => state.flow.value);
  const dispatch = useDispatch();

  const [playSound] = useSound(startSound);

  const buttonClick = () => {
    if (flowState === FLOW.READY_TO_PLAY || flowState === FLOW.DEFEAT) {
      playSound();
      dispatch(tileChoose());
      dispatch(resetCoords());
    }

    if (flowState === FLOW.TILE_CHOOSE) {
      dispatch(win());
      dispatch(restart());
    }
  }

  return (
    <div className={styles.play}>
      <button className={styles.button} onClick={buttonClick}>
        {(flowState === FLOW.READY_TO_PLAY || flowState === FLOW.DEFEAT) && 'Play'}
        {flowState === FLOW.TILE_CHOOSE && 'Collect'}
      </button>
    </div>
  );
};

export default Play;
