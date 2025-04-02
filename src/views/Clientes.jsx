// Importaciones necesarias para la vista
import React, { useState, useEffect } from 'react';
import TablaClientes from '../components/cliente/TablaClientes'; // Importa el componente de tabla
import ModalRegistroCliente from '../components/cliente/ModalRegistroCliente';
import { Container, Button } from "react-bootstrap";

// Declaración del componente Clientes
const Clientes = () => {
  // Estados para manejar los datos, carga y errores
  const [listaClientes, setListaClientes] = useState([]); // Almacena los datos de la API
  const [cargando, setCargando] = useState(true);            // Controla el estado de carga
  const [errorCarga, setErrorCarga] = useState(null);        // Maneja errores de la petición
  const [mostrarModal, setMostrarModal] = useState(false);
  const [nuevoCliente, setNuevoCliente] = useState({
    nombre: '',
    apellido: ''
  });

  const obtenerClientes = async () => { // Método renombrado a español
    try {
      const respuesta = await fetch('http://localhost:3000/api/clientes');
      if (!respuesta.ok) {
        throw new Error('Error al cargar los clientes');
      }
      const datos = await respuesta.json();
      setListaClientes(datos);    // Actualiza el estado con los datos
      setCargando(false);           // Indica que la carga terminó
    } catch (error) {
      setErrorCarga(error.message); // Guarda el mensaje de error
      setCargando(false);           // Termina la carga aunque haya error
    }
  };

  // Lógica de obtención de datos con useEffect
  useEffect(() => {
    obtenerClientes();            // Ejecuta la función al montar el componente
  }, []);                           // Array vacío para que solo se ejecute una vez


// Maneja los cambios en los inputs del modal
const manejarCambioInput = (e) => {
  const { name, value } = e.target;
  setNuevoCliente(prev => ({
    ...prev,
    [name]: value
  }));
};


// Manejo la inserción de un nuevo cliente
const agregarCliente = async () => {

  if (!nuevoCliente.nombre|| !nuevoCliente.apellido) {
  setErrorCarga("Por favor, completa todos los campos antes de guardar.");
  return;
  }

  try {
    const respuesta = await fetch('http://localhost:3000/api/registrarcategoria', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevoCliente),
    });

    if (!respuesta.ok) {
      throw new Error('Error al agregar el cliente');
    }

    await obtenerClientes(); // Refresca toda la lista desde el servidor
    setNuevoCliente({ nombre: '', apellido: '' });
    setMostrarModal(false);
    setErrorCarga(null);
  } catch (error) {
    setErrorCarga(error.message);
  }
};

  // Renderizado de la vista
  return (
    <>
      <Container className="mt-5">
        <br />
        <h4>Clientes</h4>
        <Button variant="primary" onClick={() => setMostrarModal(true)}>
          Nuevo Cliente
        </Button>
        <br/><br/>

        {/* Pasa los estados como props al componente TablaClientes */}
        <TablaClientes 
          clientes={listaClientes} 
          cargando={cargando} 
          error={errorCarga} 
        />

<ModalRegistroCliente
          mostrarModal={mostrarModal}
          setMostrarModal={setMostrarModal}
          nuevoCliente={nuevoCliente}
          manejarCambioInput={manejarCambioInput}
          agregarCliente={agregarCliente}
          errorCarga={errorCarga}
        />
        
      </Container>
    </>
    
  );
};


// Exportación del componente
export default Clientes;