import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Main</Link></li>
        <li><Link to="/publications">Publications</Link></li>
        <li><Link to="/photos">Photos</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
