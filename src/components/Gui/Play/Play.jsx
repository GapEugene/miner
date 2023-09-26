import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { play } from '../../../store/reducers/flowSlice';

import styles from './style.module.scss';

const Play = () => {
  const flowState = useSelector((state) => state.flow.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.play} onClick={() => dispatch(play())}>
      {flowState}
    </div>
  );
};

export default Play;
