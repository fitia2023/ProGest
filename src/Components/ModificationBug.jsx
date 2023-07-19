import React, { useEffect, useState } from 'react'
import '../assets/maintenance.css';
import { useParams, Link, useNavigate } from 'react-router-dom';
import BugService from '../Services/BugService';
import { metreajour } from '../Controller/ViewBugControlle';
export default function ModificationBug() {
    const { id_bug, id_projet } = useParams();
    const [description, setDescription] = useState('');
    const [duree, setDuree] = useState('');
    const navigation = useNavigate();
    const handleChangeDescr = (e) => {
        setDescription(e.target.value)
    }
    const handleChangeDure = (e) => {
        setDuree(e.target.value)
    }
    useEffect(() => {
        BugService.getBugById(id_bug).then((res) => {
            let Bug = res.data;
            setDescription(Bug.description_bug)
            setDuree(Bug.duree_maintenance_bug)
        })
    }, [id_bug]);

    const HandleSubmite =async (e) => {
        e.preventDefault();
        try {
          const miseAJourReussie = await metreajour(id_bug, duree, description);
      
          if (miseAJourReussie) {
            // La mise à jour du bug a réussi
            navigation('/viewprojet/' + id_projet); // Remplacez par la navigation appropriée
          }
        } catch (error) {
          console.error(error);
        }

    }
    return (
        <div className="section">
            <div className="container">
                <div className="row full-height justify-content-center">
                    <div className="col-12 text-center align-self-center py-5">
                        <div className="section pb-5 pt-5 pt-sm-2 text-center">
                            <div className="card-3d-wrap mx-auto">
                                <div className="card-3d-wrapper">
                                    <div className="card-front">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h4 className="mb-4 pb-3" style={{ color: 'white' }}> Bug </h4>
                                                <div className="form-group">
                                                    <input type="text" className="form-style" placeholder="Description du bug"
                                                        value={description}
                                                        onChange={handleChangeDescr}
                                                    />
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input type="text" className="form-style" placeholder="Durée de la maintenance du bug en jour"
                                                        value={duree}
                                                        onChange={handleChangeDure}
                                                    />
                                                </div>
                                                <div>
                                                    <Link className="btn mt-4" onClick={ HandleSubmite}>Mettre à jour</Link>
                                                    &nbsp;&nbsp;&nbsp;
                                                    <Link to='/' className="btn btn-outline-danger mt-4">Cancel</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}