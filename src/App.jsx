import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import { useState, useEffect } from "react"

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLocalStorage = () => { 
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS);
    }

    obtenerLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(px => px.id !== id);
    setPacientes(pacientesActualizados);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario pacientes={pacientes} paciente={paciente} setPacientes={setPacientes} setPaciente={setPaciente} />
        <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} />
      </div>
    </div>
  )
}

export default App
