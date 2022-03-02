import React from 'react'
import './start.css';

export default function Start() {
  return (
    <div className="start">
        <div className="input__item">
            <span>Instancia:</span>
            <input type="text"/>
        </div>
        <div className="input__item">
            <span>Token:</span>
            <input type="text"/>
        </div>

        <button>Iniciar</button>
    </div>
  )
}
