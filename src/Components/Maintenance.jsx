import React from 'react';
import '../assets/maintenance.css';
import { useParams } from 'react-router-dom';
import Bug from './Bug';
import Evolution from "./Evolution";
export default function Maintenance() {

    const { id_projet, id_annee } = useParams();

    return (
        <div className="section">
            <div className="container">
                <div className="row full-height justify-content-center">
                    <div className="col-12 text-center align-self-center py-5">
                        <div className="section pb-5 pt-5 pt-sm-2 text-center">
                            <h6 className="mb-0 pb-3">
                                <span>Bug </span>
                                <span>Evolution</span>
                            </h6>
                            <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                            <label htmlFor="reg-log"></label>
                            <div className="card-3d-wrap mx-auto">
                                <div className="card-3d-wrapper">
                                    <div className="card-front">
                                        <div className="center-wrap">
                                            <Bug id_projet = {id_projet} id_annee={id_annee}/>
                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <div className="center-wrap">
                                            <Evolution id_projet = {id_projet} id_annee={id_annee}/>
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
