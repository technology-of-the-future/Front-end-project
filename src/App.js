import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Barra2 from './componentes/Barra2';
import RegistrarPersona from './componentes/RegistrarPersona';
import VerPersonas from './componentes/VerPersonas';
import RegistrarCiudad from './componentes/RegistrarCiudad';
import VerCiudad from './componentes/VerCiudad';
import Login from './componentes/Login';
import Footer from './componentes/Footer';

function App() {
  return (
    <Router>
    
    <Barra2/>
    <Route path='/login' exact component={Login}/>
    <Route path='/registrarPersona' exact component={RegistrarPersona}/>
    <Route path='/verPersonas' exact component={VerPersonas}/>
    <Route path='/registrarCiudad' exact component={RegistrarCiudad}/>
    <Route path='/verCiudad' exact component={VerCiudad}/>
    <Footer/>
    </Router>

  );
}

export default App;
