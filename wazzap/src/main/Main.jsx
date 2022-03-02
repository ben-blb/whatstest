import React from 'react'
import './main.css'

export default function Main({ setMessage, message, send, number, setNumber}) {
  return (
    <div className="start">
        <div className="input__item">
            <span>Numero:</span>
            <input type="number" onChange={e => setNumber(e.target.value)} value={number} />
        </div>
        <div className="input__item">
            <span>Mensaje:</span>
            <textarea name="a" id="a" cols="30" rows="10" value={message} onChange={e => setMessage(e.target.value)} ></textarea>
        </div>

        <button onClick={send}>Iniciar</button>
    </div>
  )
}
