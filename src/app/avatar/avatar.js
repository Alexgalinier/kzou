import React from 'react';
import './avatar.css';

export default ({ name, photo }) => (
  <div className="avatar">
    {name}
    <img src={photo} alt={name} />
  </div>
);
