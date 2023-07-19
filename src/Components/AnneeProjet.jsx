import React, { useEffect, useState } from 'react';
import '../assets/annee.css';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ProjetsService from '../Services/ProjetsServices';
import AnneeControlle from '../Controller/AnneeControlle';


const AnneeProjet = () => {
    const { id_projet } = useParams();
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeValue, setActiveValue] = useState('');
    const [annee, setAnnee] = useState('');
    const [duree, setDuree] = useState('');
    const [projet, setProjet] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

        ProjetsService.getProjetById(id_projet).then((res) => {
            let year = res.data.date_debut.substring(0, 4)
            let dur = res.data.dure_contrat
            setProjet(res.data)
            setAnnee(parseInt(year, 10))
            setDuree(parseInt(dur, 10))
        })

    }, [id_projet])

    const length = duree;
    const longueurtable = () => {
        let longueurTable = 0;

        for (let i = 1; i < length; i++) {
            longueurTable += 5;
        }

        return longueurTable + 'vw';
    };

    const handleItemClick = (index) => {
        setActiveIndex(index);
        setActiveValue(annee + index);
    };

    const subannee = () => {
        AnneeControlle.traitementannee(projet, activeValue)
            .then((id_annee) => {
                if (id_annee) {
                    navigate('/projet/' + id_projet + '/maintenance/' + id_annee);
                }
            })
            .catch((error) => {
                console.log(error);
                // Gérer l'erreur ici si nécessaire
            });
    };
    

    return (
        <div className="border rounded shadow">
            <div className="Interieur">
                <h1>Année du bug ou maintenance : {activeValue}</h1>
                <div className="flex-parent">
                    <div className="input-flex-container" style={{ width: longueurtable() }}>
                        {Array.from({ length }, (_, index) => (
                            <div
                                key={index}
                                className={`input ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => handleItemClick(index)}
                            >
                                <span data-year={annee + index}></span>
                            </div>
                        ))}
                    </div>
                    <input type='hidden' name='annee' value={activeValue} />
                    <div className='m-2 '>
                        <button className='btn btn-outline-primary' onClick={subannee}>suivant</button>
                        &nbsp;&nbsp;&nbsp;
                        <Link className='btn btn-outline-danger' to={'/'}>Cancel</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnneeProjet;
