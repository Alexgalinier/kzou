import React from 'react';
import './Block.css';

export default ({title, className, children}) => (
  <div className={"block " + className}>
    <h4 className="block-title m0 p20 lh20 fs18 bc1">{title}</h4>
    <div className="p20">
      {children}
    </div>
  </div>
)

