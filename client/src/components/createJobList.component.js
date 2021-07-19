import React, { useState } from 'react';
import Axios from 'axios'

function App() {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [deadline, setDeadline] = useState("");
  //const [newPosition, setNewPosition] = useState("");
  //const [jobList, setJobList] = useState([]);



  const addToList = () => {
    Axios.post("http://localhost:3001/insert", {
      Company: company,
      Position: position,
      Description: description,
      Duration: duration,
      Deadline: deadline,
    });
  };

  
  return (
    <div className="App">




      <h2>Create a new posting</h2>


      <table>
        <thead >
          <tr>
            <th>Company</th>
            <th>Position</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Deadline</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> <input type="text" onChange={(event) => { setCompany(event.target.value); }} /></td>
            <td> <input type="text" onChange={(event) => { setPosition(event.target.value); }} /></td>
            <td> <input type="text" onChange={(event) => { setDescription(event.target.value); }} /></td>
            <td> <input type="text" onChange={(event) => { setDuration(event.target.value); }} /></td>
            <td> <input type="text" onChange={(event) => { setDeadline(event.target.value); }} /></td>
            <td><button onClick={addToList}>Add to List</button></td>

          </tr>
        </tbody>
      </table>

     

    </div>
  );
}

export default App;
