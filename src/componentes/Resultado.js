import React from 'react';

const Resultado = ({ cantidad, plazo, total }) => (
  <div className='u-full-width resultado'>
    <h2>Resumen:</h2>
    <p>La cantidad solicitada es de: $ {cantidad.toFixed(2)}</p>
    <p>A pagar en: {plazo} meses</p>
    <p>Su pago mensual es de: $ {(total / plazo).toFixed(2)}</p>
    <p>Total a pagar: $ {total.toFixed(2)}</p>
  </div>
);

export default Resultado;
