import React, { Component } from 'react';
import { ListWithNavLink, HighlightFilter } from 'shared/components';

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
      _ => _.name.match(new RegExp('(' + filter + ')', 'gi')) !== null
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
        itemTitleFunc={_ => <HighlightFilter value={_.name} filter={filter} />}
      />
    );
  }
}
