import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.css';

export default ({ showMenu, showHideMenu, isMobile }) => {
  let menuClass = 'menu';
  if (showMenu !== null) {
    menuClass += showMenu ? ' show' : ' hide';
  }

  let toggleMenuIcon = null;
  if (isMobile) {
    toggleMenuIcon = (
      <span onClick={showHideMenu} className="menu-icon-clone icon-close" />
    );
  }

  const onMenuItemClicked = isMobile ? showHideMenu : () => {};

  return (
    <div className={menuClass}>
      <div className="menu-logo-banner">
        <span className="menu-logo"> </span>
        <span className="menu-title">Kzou</span>
        {toggleMenuIcon}
      </div>
      <div className="menu-items">
        <div className="menu-item-group">
          <div className="menu-item-group-title">Administration</div>

          <NavLink
            to="/skills"
            className="menu-item"
            activeClassName="selected"
            onClick={onMenuItemClicked}
          >
            <span className="menu-icon icon-bubble_chart" /> Compétences
          </NavLink>
          <NavLink
            to="/students"
            className="menu-item"
            activeClassName="selected"
            onClick={onMenuItemClicked}
          >
            <span className="menu-icon icon-accessibility" /> Elèves
          </NavLink>
        </div>

        <div className="menu-item-group">
          <div className="menu-item-group-title">Travail</div>

          <NavLink
            to="/projects"
            className="menu-item"
            activeClassName="selected"
            onClick={onMenuItemClicked}
          >
            <span className="menu-icon icon-device_hub" /> Projets
          </NavLink>
          <NavLink
            to="/working-plans"
            className="menu-item"
            activeClassName="selected"
            onClick={onMenuItemClicked}
          >
            <span className="menu-icon icon-date_range" /> Plans de travail
          </NavLink>
        </div>
      </div>
    </div>
  );
};
