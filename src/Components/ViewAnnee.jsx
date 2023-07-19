import React from 'react';
import ViewBug from './ViewBug';
import ViewEvolution from './ViewEvolution';

export default function ViewAnnee(props) {
    const { annee } = props;
    let total_bug = 0;
    let total_evolution = 0;
    return (
        <div className="col-lg-12 mb-2">
            <div className="service-item d-flex flex-column justify-content-center px-4 mb-4 shadow">
                <h4 className="mb-3 pt-2 text-center">Année :{annee.annee.ans}</h4>

                <div className="row">
                    <div className="col-lg-12 mb-4 table-container">
                        <table className="table table-bordered" style={{ width: '100%' }}>
                            <thead>
                                <tr>
                                    <th colSpan='3' className="text-center" style={{ backgroundColor: '#191970', color: 'white' }}><b> Bugs </b></th>
                                </tr>
                                <tr>
                                    <th style={{ width: '60%' }} className="text-center">Description</th>
                                    <th style={{ width: '20%' }} className="text-center">Jours</th>
                                    <th style={{ width: '20%' }} className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {annee.bugList.length === 0 ? (
                                    <tr>
                                        <th className="text-center">Néan</th>
                                        <th className='text-center'>0</th>
                                        <th></th>
                                    </tr>
                                ) : (
                                    annee.bugList.map((bug, index) => (
                                        <ViewBug key={index} bugs={bug} />
                                    ))
                                )}
                                <tr>
                                    <th className="text-center">TOTAL</th>

                                    {

                                        annee.bugList.length === 0 ? (
                                            <th className='text-center'>{total_bug}</th>
                                        ) : (
                                            annee.bugList.map((bug) => (
                                                total_bug += parseInt(bug.duree_maintenance_bug)

                                            )),
                                            <th className='text-center'>{total_bug}</th>
                                        )
                                    }
                                    <th></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-12 mb-4 table-container">
                        <table className="table table-bordered" style={{ width: '100%' }}>
                            <thead>
                                <tr>
                                    <th colSpan='3' className="text-center" style={{ backgroundColor: '#191970', color: 'white' }}><b> Evolutions </b></th>
                                </tr>
                                <tr>
                                    <th style={{ width: '60%' }} className="text-center">Description</th>
                                    <th style={{ width: '20%' }} className="text-center">Jours</th>
                                    <th style={{ width: '20%' }} className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {annee.evolutionList.length === 0 ? (
                                    <tr>
                                        <th className="text-center">Néan</th>
                                        <th className='text-center'>0</th>
                                        <th></th>
                                    </tr>
                                ) : (
                                    annee.evolutionList.map((evolution, index) => (
                                        <ViewEvolution key={index} evolution={evolution} />
                                    ))
                                )}
                                <tr>
                                    <th className="text-center">TOTAL</th>
                                    {

                                        annee.evolutionList.length === 0 ? (
                                            <th className='text-center'>{total_evolution}</th>
                                        ) : (
                                            annee.evolutionList.map((bug) => (
                                                total_evolution += parseInt(bug.duree_maintenance_evolution)

                                            )),
                                            <th className='text-center'>{total_evolution}</th>
                                        )
                                    }
                                    <th></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <p className="m-0">Durée totale : {annee.annee.duree_to_annee}/{annee.annee.projet.quotas} jrs</p>
                <p className="m-0">Prix :{annee.annee.prix_annee} RS </p>
                <p className="pb-3">Notifications : <span style={{ color: 'red' }}>{annee.annee.notif}</span></p>
            </div>
        </div >
    )

}
