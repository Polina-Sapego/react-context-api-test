import { useState } from 'react';
import './App.css';
import UserContext from './context/UserContext';
import User from './componets/User';
import ChangeUser from './componets/ChangeUser';


function App() {
  const [user, setUser] = useState('Bogdan')

 const addUserHandler = (text) => {
  setUser([text])
 }

  return (
    <UserContext.Provider value={{user, setUser }}>
    <div className="App">
      <User />
      <ChangeUser addUser={addUserHandler}/>
    </div>
    </UserContext.Provider>
  );
}

export default App;
