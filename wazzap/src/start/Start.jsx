import React from 'react'
import './start.css';

export default function Start({ instance, setInstance, token, setToken, start }) {
  return (
    <div className="start">
        <div className="input__item">
            <span>Instancia:</span>
            <input type="text" value={instance} onChange={e => setInstance(e.target.value)}/>
        </div>
        <div className="input__item">
            <span>Token:</span>
            <input type="text" value={token} onChange={e => setToken(e.target.value)}/>
        </div>

        <button onClick={start}>Iniciar</button>
    </div>
  )
}
