import React, { Component } from 'react';
import './App.css';
import './../shared/icon-font/style.css';
import { BrowserRouter } from 'react-router-dom';
import Menu from './menu/menu';
import Chapters from './chapters/chapters';
import Avatar from './avatar/avatar';
import photo from './../shared/img/frodon.jpg';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
    this.resize = this.resize.bind(this);

    this.state = {
      isMobile: isMobile(),
      isMenuDisplayed: !isMobile(),
      showMenu: null,
    };
  }

  resize() {
    this.setState({ isMobile: isMobile(), isMenuDisplayed: !isMobile() });
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  toggleMenu() {
    this.setState(prevState => ({
      showMenu: !prevState.isMenuDisplayed,
      isMenuDisplayed: !prevState.isMenuDisplayed,
    }));
  }

  render() {
    const isMenuDisplayed = this.state.isMenuDisplayed,
      isMobile = this.state.isMobile,
      showMenu = this.state.showMenu;

    return (
      <BrowserRouter>
        <div className="App">
          <Menu
            isMobile={isMobile}
            showMenu={showMenu}
            showHideMenu={this.toggleMenu}
          />
          <Avatar name="Frodon Sacquet" photo={photo} />
          <Chapters isMenuDisplayed={isMenuDisplayed} />
        </div>
      </BrowserRouter>
    );
  }
}

function isMobile() {
  return document.body.clientWidth <= 800;
}
