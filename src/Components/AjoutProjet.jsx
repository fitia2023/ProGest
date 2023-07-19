import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ProjetsService from '../Services/ProjetsServices';

export default function AjoutProjet() {
    const navigate = useNavigate();
    const { id_projet, id_entreprise } = useParams();
    const [projet, setProjet] = useState({
        nom_projet: "",
        prix: "",
        dure_contrat: "",
        date_debut: "",
        quotas: ""
    });

    useEffect(() => {
        if (id_projet !== '_add') {
            ProjetsService.getProjetById(id_projet).then((res) => {
                let Projet = res.data;
                setProjet({
                    nom_projet: Projet.nom_projet,
                    prix: Projet.prix,
                    dure_contrat: Projet.dure_contrat,
                    date_debut: Projet.date_debut.slice(0, 10),
                    quotas: Projet.quotas
                });
            });
        }
    }, [id_projet]);

    const { nom_projet, prix, dure_contrat, date_debut, quotas } = projet;

    const onInputChange = (e) => {
        setProjet({ ...projet, [e.target.name]: e.target.value });
    };

    const saveProjet = (e) => {
        e.preventDefault();
        let projetjson = {
            nom_projet: projet.nom_projet,
            prix: projet.prix,
            dure_contrat: projet.dure_contrat,
            date_debut: projet.date_debut,
            quotas: projet.quotas,
            entreprise: {
                id_entreprise: id_entreprise
            }
        };
        if (id_projet ==='_add') {
            ProjetsService.createProjet(projetjson).then(() => {
                navigate('/');
            });
        }else{
            ProjetsService.updateProjet(id_projet, projetjson).then(()=>navigate('/'))
        }
        
    };

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Details projet</h2>
                <form onSubmit={saveProjet}>
                    <div className="mb-3">
                        <label htmlFor="nom_projet" className="form-label">
                            Nom du projet
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="nom_projet"
                            placeholder="Enter le nom du projet"
                            name="nom_projet"
                            value={nom_projet}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="prix" className="form-label">
                            Prix en Rs
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="prix"
                            placeholder="Enter prix"
                            name="prix"
                            value={prix}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dure_contrat" className="form-label">
                            Durée contrat en année
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="dure_contrat"
                            placeholder="Enter la durée"
                            name="dure_contrat"
                            value={dure_contrat}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date_debut" className="form-label">
                            Date de début
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            id="date_debut"
                            placeholder="Enter la date de début"
                            name="date_debut"
                            value={date_debut}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="quotas" className="form-label">
                            Quotas du projet en jour
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="quotas"
                            placeholder="Enter nombre"
                            name="quotas"
                            value={quotas}
                            onChange={onInputChange}
                        />
                    </div>

                    <button type="submit" className="btn btn-outline-primary">
                        Submit
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link className="btn btn-outline-danger" to="/ajoutprojet/list">
                        Cancel
                    </Link>
                </form>
            </div>
        </div>
    );
}