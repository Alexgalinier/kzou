import React, { Component } from 'react';

export default class StudentInfos extends Component {
  constructor(props) {
    super(props);

    this.lastnameInput = null;
  }

  componentDidMount() {
    this.lastnameInput.focus();
  }

  saveClicked = e => {
    e.preventDefault();

    const { student, handleSave } = this.props;

    if (!student.id) {
      this.lastnameInput.focus();
      this.lastnameInput.select();
    }
    handleSave(e);
  };

  render() {
    const { student, handleInputChange } = this.props;

    return (
      <form className="form" action="">
        <h4>Informations</h4>
        <div className="form-content">
          <div className="form-entry">
            <label className="label" htmlFor="lastname">
              Nom
            </label>
            <input
              ref={_ => (this.lastnameInput = _)}
              className="input"
              type="text"
              name="lastname"
              value={student.lastname}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-entry">
            <label className="label" htmlFor="firstname">
              Prénom
            </label>
            <input
              className="input"
              name="firstname"
              value={student.firstname}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-actions">
            <button className="button" onClick={this.saveClicked}>
              {student._id ? 'Sauver' : 'Ajouter cet élève'}
            </button>
          </div>
        </div>
      </form>
    );
  }
}

/*
<div className="form-entry error">
  <label className="label" htmlFor="lastname">
    Nom
  </label>
  <input
    className="input"
    type="text"
    name="lastname"
    value={student.lastname}
    onChange={handleInputChange}
  />
  <div className="error-message">An error message</div>
</div>
*/