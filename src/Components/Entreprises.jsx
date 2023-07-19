import React, { useEffect, useState } from 'react';
import EntrepriseService from '../Services/EntrepriseService';
import { Link, useParams } from 'react-router-dom';

const Entreprises = () => {
  const [entreprises, setEntreprises] = useState([]);
  const { id_projet } = useParams();
  let pro = true;
  if (id_projet !== 'list') {
    pro = false
  }
  useEffect(() => {
    EntrepriseService.getEntreprise().then((res) => {
      setEntreprises(res.data);
    });
  }, []);

  const delentreprise = (id) => {
    EntrepriseService.deleteEntreprise(id).then((res) => {
      if (res.data + ' efface reussi') {
        window.location.reload();
      }
    });
  };

  return (
    <div className='container'>
      <div className='py-6'>
        <div className='d-flex justify-content-center'>

          <h1 className='title'>Choisir entreprise</h1>

          <Link to={`/entreprise/_add/projet/${pro ? '_add' : id_projet}`} className='btn btn-outline-dark m-3'>
            Ajout entreprise
          </Link>
        </div>
        <div className='table-container'>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col' className='col-2'>
                  Nom de l'entreprise
                </th>
                <th scope='col' className='col-2'>
                  Adresse entreprise
                </th>
                <th scope='col' className='col-2'>
                  Tel entreprise
                </th>
                <th scope='col' className='col-2 text-center'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {entreprises.map((entreprise) => (
                entreprise.id_entreprise > 0 ? (
                  <tr key={entreprise.id_entreprise}>
                    <td>{entreprise.nom_entreprise}</td>
                    <td>{entreprise.adresse_entreprise}</td>
                    <td>{entreprise.tel_entreprise}</td>
                    <td>
                      <div className='d-flex justify-content-center'>
                        {
                          id_projet !== 'list' ? (
                            <div>
                              <Link className='btn btn-info mx-2' to={`/projet/${id_projet}/entreprise/${entreprise.id_entreprise}`}>
                                choisir
                              </Link>
                            </div>
                          ) : (
                            <div className='d-flex'>
                              <Link className='btn btn-info mx-2' to={`/projet/_add/entreprise/${entreprise.id_entreprise}`}>
                                choisir
                              </Link>

                              <Link className='btn btn-outline-primary mx-2' to={
                                `/entreprise/${entreprise.id_entreprise}/projet/_add`
                              }>
                                Edit
                              </Link>
                            </div>
                          )

                        }

                        <button className='btn btn-danger mx-2' onClick={() => delentreprise(entreprise.id_entreprise)}>
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ) : null
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Entreprises;
