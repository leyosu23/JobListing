import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import Table from 'react-bootstrap/Table'

function App() {
  const [newPosition, setNewPosition] = useState("");
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      setJobList(response.data);
    });
  }, []);

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


      <h2> Job List</h2>
      
      {jobList.map((val, key) => {
        return (
          <div key={key} className="job">

            <Table striped bordered hover size="sm" responsive>
          <thead >
            <tr>
              <th>Company</th>
              <th>Position</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Deadline</th>
              <th colSpan="3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td> {val.Company}  </td>
            <td> {val.Position} </td>
            <td> {val.Description} </td>
            <td> {val.Duration} </td>
            <td> {val.Deadline} </td>
            <td>

            <input 
            type="text" 
            placeholder="New Job Position Name" 
            onChange={(event) => {
              setNewPosition(event.target.value);
            }}
            />

            </td>
            <td> <button onClick={() => updateJob(val._id)}>Update</button></td>
            <td> <button onClick={() => deleteJob(val._id)}>Delete</button></td>
            </tr>
          </tbody>
        </Table>

         
           
          </div>
        );
      })}

    </div>
  );
}

export default App;
