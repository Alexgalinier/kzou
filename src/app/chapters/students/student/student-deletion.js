import React from 'react';
import Block from 'shared/components/block/Block';

export default ({ handleDelete }) => (
  <Block title="Supprimer cet élève" className="b1 bc2 mt30">
    <div className="l-flex">
      <div className="l-f1">
        <p>Attention, cette opération est irréversible</p>
      </div>
      <div>
        <button className="button danger" onClick={handleDelete}>
          Supprimer
        </button>
      </div>
    </div>
  </Block>
);
