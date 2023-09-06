import React from 'react';

import coins from './assets/images/coins.svg';

import style from './style.module.scss';

const BalanceBar = () => {
  return (
    <div className={style.bar}>
      <img className={style.image} src={coins} alt="" />
      <div className={style.column}>
        <span className={style.caption}>Your Balance</span>
        <span className={style.value}>500 FUN</span>
      </div>
    </div>
  );
};

export default BalanceBar;
