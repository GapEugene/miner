import React from 'react';

import coin from './assets/images/coin.svg';

import style from './style.module.scss';

const BetBar = () => {
  return (
    <div className={style.bar}>
      <div className={style.column}>
        <span className={style.caption}>Total Bet</span>
        <span className={style.value}>1 FUN</span>
      </div>
      <img className={style.image} src={coin} alt="" />
    </div>
  );
};

export default BetBar;
