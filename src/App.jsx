import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Alert from './Alert'
import Listado from './Listado'
import Buscador from './Buscador'
import Formulario from './Formulario'
import Colaboradores from './Colaboradores';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'



function App() {
  const [colaboradores, setColaboradores] = useState(Colaboradores);
  const [mensajeAlerta, setMensajeAlerta] = useState('');
  const [tipoAlerta, setTipoAlerta] = useState('success'); 

  const agregarColaborador = (nuevoColaborador) => {
    if (nuevoColaborador.nombre.trim() === '' || nuevoColaborador.correo.trim() === '' || nuevoColaborador.edad.trim() === '' || nuevoColaborador.cargo.trim() === '' || nuevoColaborador.telefono.trim() === '') {
      setMensajeAlerta('Los campos se encuentran Vacios');
      setTipoAlerta('danger'); 
      return false;
    } else {
      setColaboradores([...colaboradores, nuevoColaborador]);
      setMensajeAlerta('Colaborador agregado exitosamente.');
      setTipoAlerta('success'); 
      return true;
    }
  };

  return (
    <div className="App">
      <h1>Lista de Colaboradores</h1>
      <Alert mensaje={mensajeAlerta} tipo={tipoAlerta}  />
      <Formulario agregarColaborador={agregarColaborador} />
      < Buscador/>
      <Listado colaboradores={colaboradores} />
    </div>
  );
}

export default App;







