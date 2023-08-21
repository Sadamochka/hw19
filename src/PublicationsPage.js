import React from 'react';
import profileImage from './img/foto1.jpg';
import profileImages from './img/leon.jpg';

function PublicationsPage() {
  return (
    <div className="APP">
      <div class="post"><div class="headName"><img class="logo_photo" src={profileImages} alt="profile-pfoto" />
      <h1>Jean Reno</h1>
      <div class="nameAndData">@Leon 14-09-1994</div></div>
      <h2 class="text">With my Mathilda</h2>
      <img class="pfotoInProfire" src={profileImage} alt='' />
      <div class="fotterButton">
        <div>&#9825;  4K</div>
        <div>&#9998;  453 coments</div>
        <div>&#9993;</div></div>
      </div>
    </div>
  );
}

export default PublicationsPage;
