import React from 'react';
import { Block, DangerButton } from 'shared/components';

export default ({ handleDelete }) => (
  <Block title="Supprimer cet élève" className="_b1 _bc-red _mt30">
    <div className="_fx _items-center">
      <div className="_grow">
        <p>Attention, cette opération est irréversible</p>
      </div>
      <div>
        <DangerButton title="Supprimer" onClick={handleDelete} />
      </div>
    </div>
  </Block>
);
