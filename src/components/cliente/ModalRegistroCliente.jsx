// ModalRegistroCliente.jsx
import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const ModalRegistroCliente = ({
  mostrarModal,
  setMostrarModal,
  nuevoCliente,
  manejarCambioInput,
  agregarCliente,
  errorCarga,
}) => {
  return (
    <Modal show={mostrarModal} onHide={() => setMostrarModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Nuevo Cliente</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formNombre">
            <Form.Label>Nombre del Cliente</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={nuevoCliente.nombre}
              onChange={manejarCambioInput}
              placeholder="Ingresa el nombre (máx. 20 caracteres)"
              maxLength={20}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formApellido">
            <Form.Label>Apellido del cliente</Form.Label>
            <Form.Control
              type="text"
              name="apellido"
              value={nuevoCliente.apellido}
              onChange={manejarCambioInput}
              placeholder="Ingrese el Apellido (máx. 20 caracteres)"
              maxLength={20}
              required
            />
            </Form.Group>
          <Form.Group className="mb-3" controlId="formCelular">
            <Form.Label>Celular del cliente</Form.Label>
            <Form.Control
              type="text"
              name="celular"
              value={nuevoCliente.celular}
              onChange={manejarCambioInput}
              placeholder="Ingrese el Celular (máx. 12 caracteres)"
              maxLength={12}
              required
            />
            </Form.Group>
          <Form.Group className="mb-3" controlId="formDireccion">
            <Form.Label>Direccion del cliente</Form.Label>
            <Form.Control
              type="text"
              name="direccion"
              value={nuevoCliente.direccion}
              onChange={manejarCambioInput}
              placeholder="Ingrese la Direccion (máx. 50 caracteres)"
              maxLength={50}
              required
            />
            </Form.Group>
          <Form.Group className="mb-3" controlId="formCedula">
            <Form.Label>Cedula del cliente</Form.Label>
            <Form.Control
              type="text"
              name="cedula"
              value={nuevoCliente.cedula}
              onChange={manejarCambioInput}
              placeholder="Ingrese la Cedula (máx. 20 caracteres)"
              maxLength={20}
              required
            />
          </Form.Group>
          {errorCarga && (
            <div className="text-danger mt-2">{errorCarga}</div>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => {
          setMostrarModal(false);
        }}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={agregarCliente}>
          Guardar Cliente
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalRegistroCliente