import React from 'react';
import { DeleteBlock } from 'shared/components';

export default ({ handleDelete }) => (
  <DeleteBlock
    title="Supprimer cet élève"
    warningText="Attention, cette opération est irréversible"
    handleDelete={handleDelete}
    className="_mt30"
  />
);
