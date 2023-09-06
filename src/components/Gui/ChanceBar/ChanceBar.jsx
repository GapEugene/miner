import React from 'react';

import style from './style.module.scss';

const ChanceBar = () => {
  return (
    <div className={style.bar}>
      <span className={style.text} data-text="You Can Take 1.23">You Can Take 1.23</span>
    </div>
  );
};

export default ChanceBar;
