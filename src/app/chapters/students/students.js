import React, { Component } from 'react';
import Actions from './students.actions';
import StudentsList from './students-list';
import StudentsDoc from './students-doc';
import StudentDeletion from './student/student-deletion';
import StudentInfos from './student/student-infos';
import StudentSkills from './student/student-skills';

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
        <div className="_fs30 _lh1 _pt35 _pb35">Elèves</div>
        <div className="_fx">
          <div className="layout-list _pr30 _br1 _bc-grey-1">
            <StudentsList
              students={students}
              filter={studentsFilter}
              handleFilterChange={this.studentsFilter}
            />
          </div>
          <div className="layout-content _pr30 _pl30 _grow">
            {this.detailView()}
          </div>
        </div>
      </div>
    );
  }
}
