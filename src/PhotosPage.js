import React from 'react';
import one from './img/one.jpg';
import two from './img/two.jpg';
import three from './img/three.jpg';
import four from './img/four.jpg';
import five from './img/five.png';
import six from './img/six.jpg';

const PhotosPage = () => {
  return (
    <div>
      <h1>Photos Page</h1>
      <img class="pfotos" src={one} alt='' />
      <img class="pfotos" src={two} alt='' />
      <img class="pfotos" src={three} alt='' />
      <img class="pfotos" src={four} alt='' />
      <img class="pfotos" src={five} alt='' />
      <img class="pfotos" src={six} alt='' />
    </div>
  );
};

export default PhotosPage;
