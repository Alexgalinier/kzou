import React from 'react';
import { Block, Paragraph } from 'shared/components';

export default () => {
  return (
    <Block title="Détails d'un niveau">
      <Paragraph>
        Un niveau permet de regrouper des élèves afin de les affecter tous à la fois (ex: leur ajouter ou enlever une compétence).
        En général, les niveaux sont utilisés pour faire des sous groupes au sein d'une même classe.
      </Paragraph>
      <Paragraph>
        Sélectionnez un niveau en cliquant sur son nom pour afficher ses détails.
        Vous pouvez retrouver rapidement un niveau en saisissant dans
        "Rechercher" une partie de son nom.
      </Paragraph>
      <Paragraph>
        Pour ajouter un nouveau niveau, il vous faut cliquer sur le bouton
        "Ajouter une niveau" en haut de la liste.
      </Paragraph>
    </Block>
  );
};
