import React, { Component } from 'react';
import { ListWithNavLink, HighlightFilter } from 'shared/components';

export default class ClassroomList extends Component {
  constructor(props) {
    super(props);

    this.searchInput = null;
  }

  componentDidMount() {
    this.searchInput.focus();
  }

  render() {
    const { classrooms, filter, handleFilterChange } = this.props;

    const classroomsFiltered = classrooms.filter(
      _ => _.name.match(new RegExp('(' + filter + ')', 'gi')) !== null
    );

    return (
      <ListWithNavLink
        filterRef={_ => (this.searchInput = _)}
        filterValue={filter}
        filterOnChange={handleFilterChange}
        addItemTitle="Ajouter une classe"
        addItemLinkTo={'/classrooms/create'}
        items={classroomsFiltered}
        itemLinkToFunc={_ => '/classrooms/' + _._id}
        itemTitleFunc={_ => <HighlightFilter value={_.name} filter={filter} />}
      />
    );
  }
}
