import React, { Component } from 'react';
import { ListWithNavLink } from 'shared/components';

function highlightFilter(str, filter) {
  if (!filter) return str;

  let parts = str.split(new RegExp('(' + filter + ')', 'gi'));
  for (let i = 1; i < parts.length; i += 2) {
    parts[i] = (
      <span className="filter-match _bg-blue-1" key={i}>
        {parts[i]}
      </span>
    );
  }
  return <div>{parts}</div>;
}

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
        itemTitleFunc={_ =>
          highlightFilter(_.lastname + ' ' + _.firstname, filter)
        }
      />
    );
  }
}
