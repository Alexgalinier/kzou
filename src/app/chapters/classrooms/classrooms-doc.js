import React from 'react';
import { Block, Paragraph } from 'shared/components';

export default () => {
  return (
    <Block title="Détails d'une classe">
      <Paragraph>
        Une classe permet de regrouper des élèves afin de les affecter tous à la
        fois (ex: leur ajouter ou enlever une compétence).
      </Paragraph>
      <Paragraph>
        Sélectionnez une classe en cliquant sur son nom pour afficher ses
        détails. Vous pouvez retrouver rapidement une classe en saisissant dans
        "Rechercher" une partie de son nom.
      </Paragraph>
      <Paragraph>
        Pour ajouter une nouvelle classe, il vous faut cliquer sur le bouton
        "Ajouter une classe" en haut de la liste.
      </Paragraph>
    </Block>
  );
};
