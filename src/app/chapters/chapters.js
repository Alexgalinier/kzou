import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './chapters.css';
import Skills from './skills/skills';
import Students from './students/students';
import Classrooms from './classrooms/classrooms';
import Levels from './levels/levels';
import Projects from './projects/projects';
import WorkingPlans from './working-plans/working-plans';

export default class Chapters extends Component {
  render() {
    const { isMenuDisplayed } = this.props;

    let chaptersClass = 'chapters';
    chaptersClass += isMenuDisplayed ? ' chapters-with-menu' : '';

    return (
      <div className={chaptersClass}>
        <div className="chapters-content _pl30 _pr30">
          <Switch>
            <Route path="/skills" exact component={Skills} />
            <Route path="/students" exact component={Students} />
            <Route path="/students/:_id" exact component={Students} />
            <Route path="/classrooms" exact component={Classrooms} />
            <Route path="/classrooms/:_id" exact component={Classrooms} />
            <Route path="/levels" exact component={Levels} />
            <Route path="/levels/:_id" exact component={Levels} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/working-plans" exact component={WorkingPlans} />
            <Redirect to="/skills" />
          </Switch>
        </div>
      </div>
    );
  }
}
