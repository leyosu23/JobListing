import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [deadline, setDeadline] = useState("");
  const [newPosition, setNewPosition] = useState("");
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      setJobList(response.data);
    });
  }, []);

  const addToList = () => {
    Axios.post("http://localhost:3001/insert", {
      Company: company,
      Position: position,
      Description: description,
      Duration: duration,
      Deadline: deadline,
    });
  };

  const updateJob = (id) => {
    Axios.put("http://localhost:3001/update", {
      id: id, 
      newPosition: newPosition,
    })
  }

  const deleteJob = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`)
  }
  
  return (
    <div className="App">
      <h1>Create a new posting</h1>


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

      


     

      <h1> Job List</h1>
      
      {jobList.map((val, key) => {
        return (
          <div key={key} className="job">

            <table class="table table-sm">
          <thead >
            <tr>
              <th>Company</th>
              <th>Position</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Deadline</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td> {val.Company}  </td>
            <td> {val.Position} </td>
            <td> {val.Description} </td>
            <td> {val.Duration} </td>
            <td> {val.Deadline} </td>
            </tr>
          </tbody>
        </table>

            <input 
            type="text" 
            placeholder="New Job Position Name" 
            onChange={(event) => {
              setNewPosition(event.target.value);
            }}
            />
            <button onClick={() => updateJob(val._id)}>Update</button>
            <button onClick={() => deleteJob(val._id)}>Delete</button>
          </div>
        );
      })}

    </div>
  );
}

export default App;
