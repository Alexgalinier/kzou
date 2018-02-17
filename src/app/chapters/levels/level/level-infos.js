import React, { Component } from 'react';
import { Block, Button, FormEntry, FormActions } from 'shared/components';

export default class LevelInfos extends Component {
  constructor(props) {
    super(props);

    this.nameInput = null;
  }

  componentDidMount() {
    this.nameInput.focus();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.level._id !== newProps.level._id)
      this.nameInput.focus();
  }

  saveClicked = e => {
    e.preventDefault();

    const { level, handleSave } = this.props;

    if (!level._id) {
      this.nameInput.focus();
      this.nameInput.select();
    }
    handleSave(e);
  };

  render() {
    const { level, handleInputChange } = this.props;

    return (
      <Block title="Informations">
        <form>
          <FormEntry
            label="Nom"
            name="name"
            inputRef={_ => (this.nameInput = _)}
            inputValue={level.name}
            inputOnChange={handleInputChange}
          />

          <FormActions>
            <Button
              title={level._id ? 'Sauver' : 'Ajouter ce niveau'}
              onClick={this.saveClicked}
            />
          </FormActions>
        </form>
      </Block>
    );
  }
}
