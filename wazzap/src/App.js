import { useState } from 'react';
import './App.css';
import Main from './main/Main';
import Start from './start/Start';

function App() {

  const [token, setToken] = useState('');
  const [instance, setInstance] = useState('');
  const [message, setMessage] = useState('');
  const [number, setNumber] = useState('');

  const [hasStarted, setHasStarted]= useState(false);

  let data = {};

  const loadInfo = () => {
    console.log("Token: ", token, "Instance: ", instance);
    if(token.trim() == '' || instance.trim() == ''){
      alert("Debes llenar ambos campos")
    }
    else{
      setHasStarted(true);
    }
  };

  const send =() => {
    if(message.trim() == '' || number.trim() == ''){
      alert("Debes llenar ambos campos")
      return;
    }
    
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.ultramsg.com/"+instance+"/messages/chat",
      "method": "POST",
      "headers": {},
      "data": {
        "token": token,
        "to": "+521" + number.toString(),
        "body": message,
        "priority": "1",
        "referenceId": ""
      }
    }
    
    window['$'].ajax(settings).done(function (response) {
      console.log(response);
    });
  }

  return (
    <>
      {
        !hasStarted ? 
        <Start token={token} setToken={setToken} instance={instance} setInstance={setInstance} start={loadInfo} /> : 
        <Main setMessage={setMessage} message={message} number={number} setNumber={setNumber} send={send} />
      }
    </>
  );
}

export default App;
