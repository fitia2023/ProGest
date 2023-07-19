import React from 'react'
import { supprimer } from '../Controller/ViewEvolutionControlle';
import { Link } from 'react-router-dom';
export default function ViewEvolution(props) {
    const {evolution} = props
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await supprimer(evolution); // Attendre la résolution de la promesse
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <tr>
        <td>{evolution.description_evolution}</td>
        <td className='text-center'>{evolution.duree_maintenance_evolution}</td>
        <td className="text-center">
            <div className="btn-group" role="group">
                <Link className="btn btn-primary mx-1" type="button" style={{ backgroundColor: '#191970', color: 'white' }} to={'/modificationEvolution/'+evolution.id_evolution+'/projet/'+evolution.annee.projet.id_projet}>Modifier</Link>
                <button className="btn btn-primary mx-1" type="button" style={{ backgroundColor: '#ff0000', color: 'white' }} onClick={handleClick}>Supprimer</button>
            </div>
        </td>
    </tr>
    )
  
}
