import React, { useState, useEffect } from 'react';
import ProjetDTOService from '../Services/ProjetDTOService';
import { useParams } from 'react-router-dom';
import ViewAnnee from './ViewAnnee';

export default function ViewProjet() {
    const [projet, setProjet] = useState(null);
    const { id_projet } = useParams();

    useEffect(() => {
        if (!projet) { // Vérifie si les données n'ont pas déjà été récupérées
            ProjetDTOService.GetProjet(id_projet)
                .then((res) => setProjet(res.data));
        }
    }, [id_projet, projet]); // Ajoutez le state "projet" à la liste de dépendances

    if (!projet) {
        return <div>Loading...</div>; // Affichez un indicateur de chargement tant que les données sont en cours de récupération
    }


    return (
        <div>
            <h1 className="display-6 text-center my-3">Nom du projet {projet.projet.nom_projet}</h1>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                        <h2 className='text-center m-4'> Details</h2>
                        <div className='card'>
                            <div className='card-header'>
                                <ul className='list-group list-group-flush '>
                                    <li className='list-group-item'>
                                        <b>Nom de l'entreprise: </b>
                                        {projet.projet.entreprise.nom_entreprise}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Adresse de dl'entreprise: </b>
                                        {projet.projet.entreprise.adresse_entreprise}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Tel entreprise: </b>
                                        {projet.projet.entreprise.tel_entreprise}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Prix du projet: </b>
                                        {projet.projet.prix}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Durée de contrat: </b>
                                        {projet.projet.dure_contrat}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Quotas par année en nombre de jour:</b>
                                        {projet.projet.quotas}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-3">
                <div className="container pt-5 pb-3">
                    <div className="row">
                        {
                            projet.anneeDTOList.map(
                                annee =>
                                    
                                    <ViewAnnee key={annee.annee.id_annee} annee={annee} />
                                    
                            )
                        }
                    </div >
                </div >
            </div >
        </div >
    );

}

