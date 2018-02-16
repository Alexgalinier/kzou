import React from 'react';

export default ({ title, list, content }) => (
  <React.Fragment>
    <div className="_fs30 _lh1 _pt35 _pb35">{title}</div>
    <div className="_fx">
      <div className="layout-list _pr30 _br1 _bc-grey-1">{list}</div>
      <div className="layout-content _pr30 _pl30 _grow">{content}</div>
    </div>
  </React.Fragment>
);
