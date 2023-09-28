import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import Lottie from 'react-lottie-player';

import idle from './assets/animations/idle.json';

import styles from './style.module.scss';

const Mole = () => {
  const moleCoords = useSelector(state => state.mole.value);
  const moleRef = useRef(null);

  return (
    <div className={styles.mole} ref={moleRef} style={moleCoords.coords}>
      <Lottie animationData={idle} loop play />
    </div>
  );
};

export default Mole;
