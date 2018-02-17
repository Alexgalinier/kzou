import React from 'react';

export default ({ value, filter }) => {
  if (!filter) return value;

  let parts = value.split(new RegExp('(' + filter + ')', 'gi'));
  for (let i = 1; i < parts.length; i += 2) {
    parts[i] = (
      <span className="filter-match _bg-blue-1" key={i}>
        {parts[i]}
      </span>
    );
  }
  return <div>{parts}</div>;
};
