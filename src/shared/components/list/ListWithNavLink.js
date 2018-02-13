import React from 'react';
import { NavLink } from 'react-router-dom';
import './List.css';
import Input from './../input/Input';

export default ({
  filterRef,
  filterValue,
  filterOnChange,
  addItemTitle,
  addItemLinkTo,
  items,
  itemLinkToFunc,
  itemTitleFunc,
}) => (
  <div className="list">
    <div className="_pb20 _mb20 _bb1 _bc-grey-1">
      <Input
        inputRef={filterRef}
        inputValue={filterValue}
        inputOnChange={filterOnChange}
        placeholder="Rechercher"
      />
    </div>
    <div className="list-content">
      <NavLink
        className="card _lh40 _mb10 _pl16 _pr16 _black new-item"
        to={addItemLinkTo}
      >
        {addItemTitle}
      </NavLink>
      {items.map(_ => (
        <NavLink
          className="card _lh40 _mb10 _pl16 _pr16 _black"
          to={itemLinkToFunc(_)}
          key={_._id}
        >
          {itemTitleFunc(_)}
        </NavLink>
      ))}
    </div>
  </div>
);
