import React from 'react';
import mainFoto from './img/mainFoto.jpg';

const HomePage = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <img src={mainFoto} alt='' />
      <p>This is the main page content.</p>
    </div>
  );
};

export default HomePage;
