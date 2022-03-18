import React from 'react';
import Title from './components/title/title';
import Todays from './components/todays/todays';
import NextDays from './components/nextDays/nextDays';

import './App.css';

function App() {
  return (
    <div>
      <Title/>
      <Todays/>
      <NextDays />
    </div>
  );
}

export default App;
