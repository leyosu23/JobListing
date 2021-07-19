import React, { useState } from 'react';
import Axios from 'axios'

function App() {
  const [ID, setID] = useState("");
  const [Password, setPassword] = useState("");


  const addToList = () => {
    Axios.post("http://localhost:3001/signup", {
      ID: ID,
      Password: Password,
    });
  };

  console.log();
  
  return (
    <div className="App">

      <h2>Create a User</h2>


      <table>
        <thead >
          <tr>
            <th>ID</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> <input type="text" onChange={(event) => { setID(event.target.value); }} /></td>
            <td> <input type="text" onChange={(event) => { setPassword(event.target.value); }} /></td>
            <td><button onClick={addToList}>Sign Up</button></td>

          </tr>
        </tbody>
      </table>

     

    </div>
  );
}

export default App;
