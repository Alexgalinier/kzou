import React from 'react';

export default ({ handleDelete }) => (
  <div className="l-card b-red">
    <h4>Supprimer cet élève</h4>
    <div className="l-flex">
      <div className="l-f1 pd-20">
        <p>Attention, cette opération est irréversible</p>
      </div>
      <div className="pd-20">
        <button className="button danger" onClick={handleDelete}>
          Supprimer
        </button>
      </div>
    </div>
  </div>
);
