import './App.css';

import Logged from './Stacks/Logged';
import Auth from './Stacks/Auth';
import { useEffect, useState } from 'react';

function App() {
  const [logged, setLogged] = useState(false)
  const [user, setUser] = useState(null)
  
  useEffect(()=> {
    let user = JSON.parse(localStorage.getItem("CourseraUser"))
    setUser(user)
    setLogged(true)
  }, [user])

  // let logged = false

  return (
    <div className="App">
      {logged ? <Logged /> : <Auth />}
    </div>
  );
}

export default App;
