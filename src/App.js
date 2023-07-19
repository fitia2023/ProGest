import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AjoutEntrprise from './Components/AjoutEntrprise';
import Entreprises from './Components/Entreprises';
import AjoutProjet from './Components/AjoutProjet';
import Projets from './Components/Projets';
import Maintenance from './Components/Maintenance';
import AnneeProjet from './Components/AnneeProjet';
import ViewProjet from './Components/ViewProjet';
import ModificationBug from './Components/ModificationBug';
import ModificationEvolution from './Components/ModificationEvolution';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className='centralite'>
        <Routes>
          <Route exact path='/' element={<Projets />} />
          <Route exact path='/ajoutprojet/:id_projet' element={<Entreprises/>} />
          <Route exact path='/entreprise/:id_entreprise/projet/:id_projet' element={<AjoutEntrprise/>} />
          <Route exact path='/projet/:id_projet/entreprise/:id_entreprise' element={<AjoutProjet />}/>
          <Route exact path='/projet/:id_projet/maintenance/:id_annee' element={<Maintenance />}/>
          <Route exact path='/annee/:id_projet' element={<AnneeProjet/>} />
          <Route exact path='/viewprojet/:id_projet' element={<ViewProjet />}/>
          <Route exact path='/modificationBug/:id_bug/projet/:id_projet' element={<ModificationBug/>}/>
          <Route exact path='/modificationEvolution/:id_evolution/projet/:id_projet' element={<ModificationEvolution/>}/>
        </Routes>
        </div>
      </Router>
    </div >
  );
}

export default App;
