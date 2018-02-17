import React, { Component } from 'react';
import Actions from './levels.actions';
import LevelsList from './levels-list';
import LevelsDoc from './levels-doc';
import LevelDeletion from './level/level-deletion';
import LevelInfos from './level/level-infos';
import { RessourceLayout } from 'shared/components';

export default class Levels extends Component {
  constructor(props) {
    super(props);

    this.actions = Actions(this.setState.bind(this));

    this.state = {
      levels: [],
      levelsFilter: '',
      selectedLevel: null,
    };
  }

  componentDidMount() {
    const levelId = this.props.match.params._id;

    if (levelId) {
      if (levelId === 'create') {
        this.actions.newLevel();
      } else {
        this.actions.loadLevel(levelId);
      }
    }

    this.actions.loadLevels();
  }

  componentWillReceiveProps(newProps) {
    const levelId = newProps.match.params._id;

    if (!levelId) {
      this.actions.clearLevel();
    } else if (levelId === 'create') {
      this.actions.newLevel();
    } else {
      this.actions.loadLevel(levelId);
    }
  }

  deleteStudent = () => {
    this.actions
      .deleteLevel(this.state.selectedLevel._id)
      .then(_ => this.props.history.push('/levels'));
  };

  saveStudent = e => {
    e.preventDefault();

    const { selectedLevel } = this.state;

    if (!selectedLevel._id) {
      this.actions.createLevel(selectedLevel);
    } else {
      this.actions.updateLevel(selectedLevel);
    }
  };

  levelInfoChange = e => {
    const { selectedLevel } = this.state;
    this.actions.levelInfo(e.target.name, e.target.value, selectedLevel);
  };

  levelsFilter = e => {
    this.actions.levelsFilter(e.target.value);
  };

  detailView() {
    const { selectedLevel } = this.state;

    if (!selectedLevel) {
      return <LevelsDoc />;
    } else {
      let existingLevelComponents = '';
      if (selectedLevel._id) {
        existingLevelComponents = (
          <React.Fragment>
            <LevelDeletion handleDelete={this.deleteStudent} />
          </React.Fragment>
        );
      }

      return (
        <React.Fragment>
          <LevelInfos
            level={selectedLevel}
            handleInputChange={this.levelInfoChange}
            handleSave={this.saveStudent}
          />
          {existingLevelComponents}
        </React.Fragment>
      );
    }
  }

  render() {
    const { levels, levelsFilter } = this.state;

    return (
      <RessourceLayout
        title="Niveaux"
        list={
          <LevelsList
            levels={levels}
            filter={levelsFilter}
            handleFilterChange={this.levelsFilter}
          />
        }
        content={this.detailView()}
      />
    );
  }
}
