import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Lottie from 'react-lottie-player';
import { useDispatch } from 'react-redux';

import { stand, moveEnd } from '../../store/reducers/moleSlice';

import idle from './assets/animations/idle.json';
import glitchIn from './assets/animations/glitch-in.json';
import glitchOut from './assets/animations/glitch-out.json';
import death from './assets/animations/death-idle.json';
import win from './assets/animations/win-idle.json';

import { MOLE_STATES } from '../../utilities/constants';

import styles from './style.module.scss';

const Mole = () => {
  const dispatch = useDispatch();
  const moleState = useSelector(state => state.mole.value);
  const moleRef = useRef(null);

  return (
    <div className={styles.mole} ref={moleRef} style={moleState.coords}>
      {moleState.status === MOLE_STATES.IDLE && <Lottie animationData={idle} loop play />}
      {moleState.status === MOLE_STATES.MOVING && <Lottie animationData={glitchOut} loop={false} onComplete={() => dispatch(moveEnd())} play />}
      {moleState.status === MOLE_STATES.GLITCH_OUT && <Lottie animationData={glitchIn} loop={false} onComplete={() => dispatch(stand())} play />}
      {moleState.status === MOLE_STATES.DEATH && <Lottie animationData={death} loop play />}
      {moleState.status === MOLE_STATES.WIN && <Lottie animationData={win} loop play />}
    </div>
  );
};

export default Mole;
