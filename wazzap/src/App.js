import { useState, useEffect } from 'react';
import './App.css';
import Start from './start/Start';

function App() {

  const [token, setToken] = useState('');
  const [instance, setInstance] = useState('');

  const loadInfo = () => {
    console.log("Token: ", token, "Instance: ", instance);
  };

  return (
    <>
      <Start token={token} setToken={setToken} instance={instance} setInstance={setInstance} start={loadInfo} />
    </>
  );
}

export default App;
