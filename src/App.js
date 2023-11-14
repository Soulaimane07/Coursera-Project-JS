import './App.css';

import Logged from './Stacks/Logged';
import Auth from './Stacks/Auth';
import { useEffect, useState } from 'react';
import { getUserData } from './Components/Functions';

function App() {
  const [logged, setLogged] = useState(false)
  
  useEffect(()=> {
    let user = getUserData()
    
    if(user !== null | undefined){
      setLogged(true)
    } else {
      setLogged(false)
    }
  }, [])

  return (
    <div className="App">
      {logged ? <Logged /> : <Auth />}
    </div>
  );
}

export default App;
