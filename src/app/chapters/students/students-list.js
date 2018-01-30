import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

function highlightFilter(str, filter) {
  if (!filter) return str;

  let parts = str.split(new RegExp('(' + filter + ')', 'gi'));
  for (let i = 1; i < parts.length; i += 2) {
    parts[i] = (
      <span className="filter-match" key={i}>
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

  componentWillReceiveProps(newProps) {
    if (document.activeElement.nodeName !== 'INPUT')
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
      <div>
        <div className="filters">
          <input
            ref={_ => this.searchInput = _}
            className="input"
            type="text"
            placeholder="Rechercher"
            value={filter}
            onChange={handleFilterChange}
          />
        </div>
        <div className="list-content">
          <NavLink className="card new-item" to={'/students/create'}>
            Ajouter un élève
          </NavLink>
          {studentsFiltered.map(_ => (
            <NavLink className="card" to={'/students/' + _._id} key={_._id}>
              {highlightFilter(_.lastname + ' ' + _.firstname, filter)}
            </NavLink>
          ))}
        </div>
      </div>
    )
  }
}