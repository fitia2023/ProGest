import React from 'react';
import { Link } from 'react-router-dom';
import { supprimer } from '../Controller/ViewBugControlle';
export default function ViewBug(props) {
    const { bugs } = props;
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await supprimer(bugs); // Attendre la résolution de la promesse
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <tr>
            <td>{bugs.description_bug}</td>
            <td className='text-center'>{bugs.duree_maintenance_bug}</td>
            <td className="text-center">
                <div className="btn-group" role="group">
                    <Link className="btn btn-primary mx-1" type="Link" style={{ backgroundColor: '#191970', color: 'white' }} to={'/modificationbug/'+bugs.id_bug+'/projet/'+bugs.annee.projet.id_projet}>Modifier</Link>
                    <button className="btn btn-primary mx-1" type="Link" style={{ backgroundColor: '#ff0000', color: 'white' }} onClick={handleClick}>Supprimer</button>
                </div>
            </td>
        </tr>
    )

}
