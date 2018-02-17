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

export default class LevelList extends Component {
  constructor(props) {
    super(props);

    this.searchInput = null;
  }

  componentDidMount() {
    this.searchInput.focus();
  }

  render() {
    const { levels, filter, handleFilterChange } = this.props;

    const levelsFiltered = levels.filter(
      _ =>
        (_.name).match(
          new RegExp('(' + filter + ')', 'gi')
        ) !== null
    );

    return (
      <ListWithNavLink
        filterRef={_ => (this.searchInput = _)}
        filterValue={filter}
        filterOnChange={handleFilterChange}
        addItemTitle="Ajouter un niveau"
        addItemLinkTo={'/levels/create'}
        items={levelsFiltered}
        itemLinkToFunc={_ => '/levels/' + _._id}
        itemTitleFunc={_ =>
          highlightFilter(_.name, filter)
        }
      />
    );
  }
}
