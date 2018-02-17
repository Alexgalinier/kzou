import React, { Component } from 'react';
import { Block, Button, FormEntry, FormActions } from 'shared/components';

export default class ClassroomInfos extends Component {
  constructor(props) {
    super(props);

    this.nameInput = null;
  }

  componentDidMount() {
    this.nameInput.focus();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.classroom._id !== newProps.classroom._id)
      this.nameInput.focus();
  }

  saveClicked = e => {
    e.preventDefault();

    const { classroom, handleSave } = this.props;

    if (!classroom._id) {
      this.nameInput.focus();
      this.nameInput.select();
    }
    handleSave(e);
  };

  render() {
    const { classroom, handleInputChange } = this.props;

    return (
      <Block title="Informations">
        <form>
          <FormEntry
            label="Nom"
            name="name"
            inputRef={_ => (this.nameInput = _)}
            inputValue={classroom.name}
            inputOnChange={handleInputChange}
          />

          <FormActions>
            <Button
              title={classroom._id ? 'Sauver' : 'Ajouter cette classe'}
              onClick={this.saveClicked}
            />
          </FormActions>
        </form>
      </Block>
    );
  }
}
