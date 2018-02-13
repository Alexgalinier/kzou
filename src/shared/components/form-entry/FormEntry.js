import React from 'react';
import './FormEntry.css';
import Input from './../input/Input';

export default ({ label, name, inputValue, inputOnChange, inputRef }) => (
  <div className="form-entry _pb30">
    <label className="label _fs14 _lh1 _pb8" htmlFor={name}>
      {label}
    </label>
    <Input
      inputRef={inputRef}
      name={name}
      inputValue={inputValue}
      inputOnChange={inputOnChange}
    />
  </div>
);
