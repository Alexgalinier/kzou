import React, { Component } from 'react';
import { Block, Button, FormEntry, FormActions } from 'shared/components';

export default class StudentInfos extends Component {
  constructor(props) {
    super(props);

    this.lastnameInput = null;
  }

  componentDidMount() {
    this.lastnameInput.focus();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.student._id !== newProps.student._id)
      this.lastnameInput.focus();
  }

  saveClicked = e => {
    e.preventDefault();

    const { student, handleSave } = this.props;

    if (!student._id) {
      this.lastnameInput.focus();
      this.lastnameInput.select();
    }
    handleSave(e);
  };

  render() {
    const { student, handleInputChange } = this.props;

    return (
      <Block title="Informations">
        <form>
          <FormEntry
            label="Nom"
            name="lastname"
            inputRef={_ => (this.lastnameInput = _)}
            inputValue={student.lastname}
            inputOnChange={handleInputChange}
          />

          <FormEntry
            label="Prénom"
            name="firstname"
            inputValue={student.firstname}
            inputOnChange={handleInputChange}
          />

          <FormActions>
            <Button
              title={student._id ? 'Sauver' : 'Ajouter cet élève'}
              onClick={this.saveClicked}
            />
          </FormActions>
        </form>
      </Block>
    );
  }
}
