import React from 'react';

export default ({ students }) => {
  return (
    <React.Fragment>
      <div className="l-card mg-0">
        <h4>Détails d'un élève</h4>
        <div className="pd-20">
          <p>
            Sélectionnez un élève en cliquant sur son nom pour afficher ses détails.
            Vous pouvez retrouver rapidement un élève en saisissant dans
            "Rechercher" une partie de son nom de famille ou prénom.
          </p>
          <p>
            Pour ajouter un nouvel élève, il vous faut cliquer sur le bouton
            "Ajouter un élève" en haut de la liste.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};
