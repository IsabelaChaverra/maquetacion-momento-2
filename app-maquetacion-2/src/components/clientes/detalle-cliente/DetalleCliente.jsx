import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./DetalleCliente.css";
import clientes from '../../../data/clientes.js'

const DetalleCliente = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cliente = location.state?.cliente;

  const handleredireccionarLista = () => {
    const resultados = clientes;
    navigate('/clientes', { state: { resultados } });
  };

  if (!cliente) {
    return (
      <div className="detalle-cliente-container">
        <p>Cliente no encontrado.</p>
        <button onClick={() => navigate("/")}>Volver</button>
      </div>
    );
  }

  return (
    <div className="detalle-cliente-container">
      <div className="contenido-detalle">
        <div className="imagen-cliente">
          <div className="placeholder-imagen">Imagen</div>
        </div>
        <div className="info-cliente">
          <p>
            <strong>Nombre:</strong> {cliente.nombre}
          </p>
          <p>
            <strong>Email:</strong> {cliente.email}
          </p>
          <p>
            <strong>Teléfono:</strong> {cliente.telefono}
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            vitae fermentum purus. Cras in dolor lobortis, convallis elit vel,
            sagittis lorem.
          </p>
          <p>
            Fusce tincidunt, nulla sed faucibus porttitor, arcu orci dapibus
            leo, eu tincidunt diam ipsum vel ex.
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Donec sollicitudin ullamcorper nunc nec
            luctus.
          </p>
          <p>
            Duis nec viverra metus. Ut ac nulla sit amet lacus luctus imperdiet
            at sed lacus.
          </p>
          <p>
            Sed posuere leo nec turpis porttitor porta. Nam dapibus, lorem at
            convallis lacinia, augue velit tincidunt nisi, eget malesuada leo
            est a nisl.
          </p>
        </div>
      </div>

      <div className="boton-regreso">
        <button onClick={() => handleredireccionarLista()}>Listado Clientes</button>
      </div>
    </div>
  );
};

export default DetalleCliente;
