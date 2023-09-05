import React from 'react';

import avatar from './assets/images/avatar.png';

import style from './style.module.scss';

const ProfileBar = () => {
  return (
    <div className={style.bar}>
      <div className={style.profile}>
        <img className={style.avatar} src={avatar} alt="" />
        <span className={style.name}>Allen <br /> Thompson</span>
      </div>
    </div>
  );
};

export default ProfileBar;
