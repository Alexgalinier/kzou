import React, { Component } from 'react';
import Actions from './students.actions';
import StudentsList from './students-list';
import StudentsDoc from './students-doc';
import StudentDeletion from './student/student-deletion';
import StudentInfos from './student/student-infos';
import StudentSkills from './student/student-skills';
import './students.css';

export default class Students extends Component {
  constructor(props) {
    super(props);

    this.actions = Actions(this.setState.bind(this));

    this.state = {
      students: [],
      studentsFilter: '',
      selectedStudent: null,
    };
  }

  componentDidMount() {
    const studentId = this.props.match.params._id;

    if (studentId) {
      if (studentId === 'create') {
        this.actions.newStudent();
      } else {
        this.actions.loadStudent(studentId);
      }
    }

    this.actions.loadStudents();
  }

  componentWillReceiveProps(newProps) {
    const studentId = newProps.match.params._id;

    if (!studentId) {
      this.actions.clearStudent();
    } else if (studentId === 'create') {
      this.actions.newStudent();
    } else {
      this.actions.loadStudent(studentId);
    }
  }

  deleteStudent = () => {
    this.actions
      .deleteStudent(this.state.selectedStudent._id)
      .then(_ => this.props.history.push('/students'));
  };

  saveStudent = e => {
    e.preventDefault();

    const { selectedStudent } = this.state;

    if (!selectedStudent._id) {
      this.actions.createStudent(selectedStudent);
    } else {
      this.actions.updateStudent(selectedStudent);
    }
  };

  studentInfoChange = e => {
    const { selectedStudent } = this.state;
    this.actions.studentInfo(e.target.name, e.target.value, selectedStudent);
  };

  studentsFilter = e => {
    this.actions.studentsFilter(e.target.value);
  };

  detailView() {
    const { selectedStudent } = this.state;

    if (!selectedStudent) {
      return <StudentsDoc />;
    } else {
      let existingStudentComponents = '';
      if (selectedStudent._id) {
        existingStudentComponents = (
          <React.Fragment>
            <StudentSkills />
            <StudentDeletion handleDelete={this.deleteStudent} />
          </React.Fragment>
        );
      }

      return (
        <React.Fragment>
          <StudentInfos
            student={selectedStudent}
            handleInputChange={this.studentInfoChange}
            handleSave={this.saveStudent}
          />
          {existingStudentComponents}
        </React.Fragment>
      );
    }
  }

  render() {
    const { students, studentsFilter } = this.state;

    return (
      <div>
        <div className="chapter-title">Elèves</div>
        <div className="layout">
          <div className="layout-list">
            <StudentsList
              students={students}
              filter={studentsFilter}
              handleFilterChange={this.studentsFilter}
            />
          </div>
          <div className="layout-content">{this.detailView()}</div>
        </div>
      </div>
    );
  }
}
