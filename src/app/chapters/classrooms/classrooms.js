import React, { Component } from 'react';
import Actions from './classrooms.actions';
import ClassroomsList from './classrooms-list';
import ClassroomsDoc from './classrooms-doc';
import ClassroomDeletion from './classroom/classroom-deletion';
import ClassroomInfos from './classroom/classroom-infos';
import { RessourceLayout } from 'shared/components';

export default class Classrooms extends Component {
  constructor(props) {
    super(props);

    this.actions = Actions(this.setState.bind(this));

    this.state = {
      classrooms: [],
      classroomsFilter: '',
      selectedClassroom: null,
    };
  }

  componentDidMount() {
    const classroomId = this.props.match.params._id;

    if (classroomId) {
      if (classroomId === 'create') {
        this.actions.newClassroom();
      } else {
        this.actions.loadClassroom(classroomId);
      }
    }

    this.actions.loadClassrooms();
  }

  componentWillReceiveProps(newProps) {
    const classroomId = newProps.match.params._id;

    if (!classroomId) {
      this.actions.clearClassroom();
    } else if (classroomId === 'create') {
      this.actions.newClassroom();
    } else {
      this.actions.loadClassroom(classroomId);
    }
  }

  deleteStudent = () => {
    this.actions
      .deleteClassroom(this.state.selectedClassroom._id)
      .then(_ => this.props.history.push('/classrooms'));
  };

  saveStudent = e => {
    e.preventDefault();

    const { selectedClassroom } = this.state;

    if (!selectedClassroom._id) {
      this.actions.createClassroom(selectedClassroom);
    } else {
      this.actions.updateClassroom(selectedClassroom);
    }
  };

  classroomInfoChange = e => {
    const { selectedClassroom } = this.state;
    this.actions.classroomInfo(e.target.name, e.target.value, selectedClassroom);
  };

  classroomsFilter = e => {
    this.actions.classroomsFilter(e.target.value);
  };

  detailView() {
    const { selectedClassroom } = this.state;

    if (!selectedClassroom) {
      return <ClassroomsDoc />;
    } else {
      let existingClassroomComponents = '';
      if (selectedClassroom._id) {
        existingClassroomComponents = (
          <React.Fragment>
            <ClassroomDeletion handleDelete={this.deleteStudent} />
          </React.Fragment>
        );
      }

      return (
        <React.Fragment>
          <ClassroomInfos
            classroom={selectedClassroom}
            handleInputChange={this.classroomInfoChange}
            handleSave={this.saveStudent}
          />
          {existingClassroomComponents}
        </React.Fragment>
      );
    }
  }

  render() {
    const { classrooms, classroomsFilter } = this.state;

    return (
      <RessourceLayout
        title="Classes"
        list={
          <ClassroomsList
            classrooms={classrooms}
            filter={classroomsFilter}
            handleFilterChange={this.classroomsFilter}
          />
        }
        content={this.detailView()}
      />
    );
  }
}
