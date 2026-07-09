import React, { useState } from 'react';
import './ContadorInteractivo.css';

// Componente ContadorInteractivo
// - Usa únicamente useState para manejar el estado del contador y el color
// - Tiene botones para sumar, restar (no permite < 0) y reiniciar
// - Botones de color para cambiar el color del número
export default function ContadorInteractivo() {
  // Estado del número (empieza en 0)
  const [count, setCount] = useState(0);
  // Estado del color del número (empieza en negro)
  const [color, setColor] = useState('black');

  // Incrementa el contador
  const incrementar = () => {
    setCount(prev => prev + 1);
  };

  // Decrementa el contador, evitando que baje de 0
  const decrementar = () => {
    setCount(prev => Math.max(0, prev - 1));
  };

  // Reinicia el contador a 0
  const reiniciar = () => {
    setCount(0);
  };

  // Lista de colores disponibles
  const colores = [
    { nombre: 'Rojo', valor: 'red' },
    { nombre: 'Verde', valor: 'green' },
    { nombre: 'Azul', valor: 'blue' },
    { nombre: 'Amarillo', valor: 'goldenrod' }
  ];

  return (
    <div className="contador-card">
      <h2 className="contador-titulo">Contador Interactivo</h2>

      {/* Número grande con color dinámico */}
      <div
        className="contador-number"
        style={{ color }}
        aria-live="polite"
        aria-atomic="true"
      >
        {count}
      </div>

      {/* Controles de suma/resta/reinicio */}
      <div className="controls-row">
        <button
          className="btn btn-secondary"
          onClick={decrementar}
          disabled={count === 0} // evita restar si ya es 0
          aria-label="Restar"
        >
          -
        </button>

        <button
          className="btn btn-primary"
          onClick={incrementar}
          aria-label="Sumar"
        >
          +
        </button>

        <button
          className="btn btn-reset"
          onClick={reiniciar}
          aria-label="Reiniciar contador"
        >
          Reiniciar
        </button>
      </div>

      {/* Botones de selección de color */}
      <div className="color-row">
        {colores.map(c => (
          <button
            key={c.valor}
            className={`color-button ${color === c.valor ? 'active' : ''}`}
            style={{ backgroundColor: c.valor }}
            onClick={() => setColor(c.valor)}
            aria-label={`Cambiar color a ${c.nombre}`}
          />
        ))}

        {/* Botón para color negro por defecto */}
        <button
          className={`color-button ${color === 'black' ? 'active' : ''}`}
          style={{ backgroundColor: '#222' }}
          onClick={() => setColor('black')}
          aria-label="Color negro"
        />
      </div>

      {/* Nota visual rápida */}
      <p className="nota">El botón "-" está deshabilitado cuando el contador es 0.</p>
    </div>
  );
}
