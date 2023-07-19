import React from 'react'
import ProjetsService from '../Services/ProjetsServices';
import { Link } from 'react-router-dom';
class Projets extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            Projets: []
        }
    }

    componentDidMount() {
        ProjetsService.getProjets().then((res) => {
            this.setState({ Projets: res.data });
        });
    }
    supprimerprojet=(id_projet)=>{
        ProjetsService.deleteProjet(id_projet).then(
            ()=>  {window.location.reload()}
        )
    }
    render() {
        return (

            <div className='container'>
                <div className='py-4'>
                    <div className='table-container'>
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th scope="col">N°</th>
                                    <th scope="col" >Nom du projet</th>
                                    <th scope="col">Entreprise</th>
                                    <th scope="col" >Tel entreprise</th>
                                    <th scope="col" className='text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Projets.map(
                                        projets =>
                                            <tr key={projets.id_projet}>
                                                <td> {projets.id_projet} </td>
                                                <td> {projets.nom_projet} </td>
                                                <td> {projets.entreprise.nom_entreprise}</td>
                                                <td> {projets.entreprise.tel_entreprise}</td>
                                                <td>
                                                    <div className='d-flex justify-content-center'>
                                                    <Link className='btn btn-primary mx-2' to={`/entreprise/${projets.entreprise.id_entreprise}/projet/${projets.id_projet}`}>Modifier</Link>
                                                    <Link className='btn btn-outline-primary mx-2' to={`/annee/${projets.id_projet}`}>Maintenance</Link>
                                                    <button className='btn btn-danger mx-2' onClick={
                                                        ()=>{ this.supprimerprojet(projets.id_projet)}
                                                    }>Delete</button>
                                                    <Link className='btn btn-outline-info mx-2' to={`/viewprojet/${projets.id_projet}`}>View</Link>
                                                    </div>
                                                </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }

}


export default Projets
