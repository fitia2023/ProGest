import React, { useState, useEffect, useCallback } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import EntrepriseService from '../Services/EntrepriseService';

export default function AjoutEntreprise() {
  let navigate = useNavigate();
  const { id_entreprise, id_projet } = useParams();
  const [nom_entreprise, setNomEntreprise] = useState('');
  const [adresse_entreprise, setAdresseEntreprise] = useState('');
  const [tel_entreprise, setTelEntreprise] = useState('');
  const navigateCallback = useCallback(navigate, [navigate]);

  useEffect(() => {
    if (id_entreprise === '_add') {
      setNomEntreprise('');
      setAdresseEntreprise('');
      setTelEntreprise('');
    } else {
      EntrepriseService.getEntrepriseId(id_entreprise).then((res) => {
        let entreprise = res.data;
        setNomEntreprise(entreprise.nom_entreprise);
        setAdresseEntreprise(entreprise.adresse_entreprise);
        setTelEntreprise(entreprise.tel_entreprise);
  
        if (entreprise && entreprise.nom_entreprise === null) {
          navigateCallback('/ajoutprojet/' + id_projet);
        }
      });
    }
  }, [id_entreprise, id_projet, navigateCallback]);
  

  const onChangenom = (event) => {
    setNomEntreprise(event.target.value);
  };

  const onChangeadresse = (event) => {
    setAdresseEntreprise(event.target.value);
  };

  const onChangetel = (event) => {
    setTelEntreprise(event.target.value);
  };

  const saveentreprise = (e) => {
    e.preventDefault();
    let entreprise = {
      nom_entreprise: nom_entreprise,
      adresse_entreprise: adresse_entreprise,
      tel_entreprise: tel_entreprise,
    };
    JSON.stringify(entreprise);
    if (id_entreprise === '_add') {
      EntrepriseService.createEntreprise(entreprise).then((res) => {
        console.log(res);
        navigate('/ajoutprojet/list');
      });
    } else {
      EntrepriseService.updateEntreprise(id_entreprise, entreprise).then(
        (res) => console.log(res)
      );
      navigate('/ajoutprojet/list');
    }
  };

  const suivant = (e) =>{
    e.preventDefault();
    let entreprise = {
        nom_entreprise: nom_entreprise,
        adresse_entreprise: adresse_entreprise,
        tel_entreprise: tel_entreprise,
      };
      if (id_entreprise ==='_add') {
        EntrepriseService.createEntreprise(entreprise).then((res) => {
          console.log(res);
          navigate('/ajoutprojet/'+id_projet);
        });
      }else{
        JSON.stringify(entreprise);
        EntrepriseService.updateEntreprise(id_entreprise, entreprise).then(
          (res) => console.log(res)
        );
        navigate('/projet/'+id_projet+'/entreprise/'+id_entreprise)
      }
      
  }

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Details entreprise</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              nom d'entreprise
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter le nom d'entreprise"
              name="nom_entreprise"
              value={nom_entreprise}
              onChange={onChangenom}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Adresse d'entreprise
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter adresse d'entreprise"
              name="adresse_entreprise"
              value={adresse_entreprise}
              onChange={onChangeadresse}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Tel d'entreprise
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter tel d'entreprise"
              name="tel_entreprise"
              value={tel_entreprise}
              onChange={onChangetel}
            />
          </div>

          <div>
            { id_projet === '_add' ? (
              <div className='d-flex justify-content-center'>
                <button
                  type="submit"
                  className="btn btn-outline-primary"
                  onClick={saveentreprise}
                >
                  Submit
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link className="btn btn-outline-danger" to={'/ajoutprojet/list'}>
                  Cancel
                </Link>
              </div>
            ) : (
                <div className='d-flex justify-content-center'>

                <button
                  type="submit"
                  className="btn btn-outline-primary"
                  onClick={suivant}
                >
                  Suivant
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link className="btn btn-outline-danger" to={'/'}>
                  Cancel
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link className='btn btn-outline-info' to={'/ajoutprojet/'+id_projet } > Autre entreprise </Link>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
