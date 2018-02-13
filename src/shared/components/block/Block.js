import React from 'react';
import './Block.css';

export default ({ title, className, children }) => (
  <div className={'block ' + className}>
    <h4 className="block-title _m0 _p20 _lh20 _fs18 _bc-grey-1">{title}</h4>
    <div className="_p20">{children}</div>
  </div>
);
