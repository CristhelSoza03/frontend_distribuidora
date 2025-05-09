// Importaciones necesarias para el componente visual
import React from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Declaración del componente TablaProductos que recibe props
const TablaProductos = ({ productos, cargando, error }) => {
  // Renderizado condicional según el estado recibido por props
  if (cargando) {
    return <div>Cargando productos...</div>; // Muestra mensaje mientras carga
  }
  if (error) {
    return <div>Error: {error}</div>;         // Muestra error si ocurre
  }

  // Renderizado de la tabla con los datos recibidos
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>ID Producto</th>
          <th>Nombre Producto</th>
          <th>Descripcion</th>
          <th>Categoria</th>
          <th>Precio Unitario</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <tr key={producto.id_Producto}>
            <td>{producto.id_Product}</td>
            <td>{producto.nombre_producto}</td>
            <td>{producto.descripcion}</td>
            <td>{producto.categoria}</td>
            <td>{producto.precio_unitario}</td>
            <td>{producto.stock}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// Exportación del componente
export default TablaProductos;