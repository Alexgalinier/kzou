import React, { Component } from 'react';
import { ListWithNavLink, HighlightFilter } from 'shared/components';

export default class StudentsList extends Component {
  constructor(props) {
    super(props);

    this.searchInput = null;
  }

  componentDidMount() {
    this.searchInput.focus();
  }

  render() {
    const { students, filter, handleFilterChange } = this.props;

    const studentsFiltered = students.filter(
      _ =>
        (_.lastname + ' ' + _.firstname).match(
          new RegExp('(' + filter + ')', 'gi')
        ) !== null
    );

    return (
      <ListWithNavLink
        filterRef={_ => (this.searchInput = _)}
        filterValue={filter}
        filterOnChange={handleFilterChange}
        addItemTitle="Ajouter un élève"
        addItemLinkTo={'/students/create'}
        items={studentsFiltered}
        itemLinkToFunc={_ => '/students/' + _._id}
        itemTitleFunc={_ => (
          <HighlightFilter
            value={_.lastname + ' ' + _.firstname}
            filter={filter}
          />
        )}
      />
    );
  }
}
