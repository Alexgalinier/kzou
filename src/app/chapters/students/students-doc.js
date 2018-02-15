import React from 'react';
import Block from 'shared/components/block/Block';

export default ({ students }) => {
  return (
    <Block title="Détails d'un élève">
      <p>
        Sélectionnez un élève en cliquant sur son nom pour afficher ses détails.
        Vous pouvez retrouver rapidement un élève en saisissant dans
        "Rechercher" une partie de son nom de famille ou prénom.
      </p>
      <p>
        Pour ajouter un nouvel élève, il vous faut cliquer sur le bouton
        "Ajouter un élève" en haut de la liste.
      </p>
    </Block>
  );
};
