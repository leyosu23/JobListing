import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import './App.css';

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
      <h1>CRUD</h1>

      <label>Company</label>
      <input
        type="text"
        onChange={(event) => {
          setCompany(event.target.value);
        }}
      />
      <label>Position</label>
      <input
        type="text"
        onChange={(event) => {
          setPosition(event.target.value);
        }}
      />
      <label>Description</label>
      <input
        type="text"
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <label>Duration</label>
      <input
        type="text"
        onChange={(event) => {
          setDuration(event.target.value);
        }}
      />
      <label>Deadline</label>
      <input
        type="text"
        onChange={(event) => {
          setDeadline(event.target.value);
        }}
      />
      <button onClick={addToList}>Add to List</button>
      <h1> Job List</h1>
      {jobList.map((val, key) => {
        return (
          <div key={key} className="job">
            <h1> {val.Company}  </h1>
            <h1> {val.Position} </h1>
            <h1> {val.Description} </h1>
            <h1> {val.Duration} </h1>
            <h1> {val.Deadline} </h1>

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
