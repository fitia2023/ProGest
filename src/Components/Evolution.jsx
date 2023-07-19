import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { traitement} from '../Controller/EvolutionControlle';
export default function Evolution(props) {
    const {id_projet,id_annee} = props;
    const [description, setDescription] = useState('');
    const [duree, setDuree]=useState('');
    
    const navigate = useNavigate();
    const handleChangeDescr=(e)=>{
        setDescription(e.target.value)
    }
    const handleChangeDure=(e)=>{
        setDuree(e.target.value)
    }
    const handleConfirm = async () => {
        try {
            await traitement(id_projet, id_annee, description, duree);
            navigate('/viewprojet/'+id_projet)
        } catch (error) {
            console.error(error);
        }
    };
    
    return (
        <div className="section text-center">
            <h4 className="mb-3 pb-3" style={{ color: 'white' }}>Evolution</h4>
            <div className="form-group">
                <input type="email" className="form-style" placeholder="Description du bug" 
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
                <Link className="btn mt-4" onClick={handleConfirm}>Confirmer</Link>
                &nbsp;&nbsp;&nbsp;
                <Link to='/'className="btn btn-outline-danger mt-4">Cancel</Link>
            </div>
        </div>
    )

}
