import React from 'react';
import './Input.css';

export default ({
  name,
  inputValue,
  inputOnChange,
  inputRef,
  className,
  ...props
}) => (
  <input
    {...props}
    ref={inputRef}
    className={
      'input _fs16 _pl16 _pr16 _lh40 _mb8 _b1 _bc-grey-2 _alpha50 _bg-grey-3 ' +
      (className ? className : '')
    }
    type="text"
    name={name}
    value={inputValue}
    onChange={inputOnChange}
  />
);
