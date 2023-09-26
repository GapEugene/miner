import React from 'react';

import MainBar from './MainBar';
import ProfileBar from './ProfileBar';
import BalanceBar from './BalanceBar';
import BetBar from './BetBar';
import ChanceBar from './ChanceBar';
import Play from './Play';

const Gui = () => {
  return (
    <>
      <MainBar />
      <ProfileBar />
      <BalanceBar />
      <BetBar />
      <ChanceBar />
      <Play />
    </>
    );
};

export default Gui;
