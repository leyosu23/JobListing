const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const JobModel = require('./models/Job');

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://newuser:RKCOVTRVw18zD5DC@joblisting.t9wkx.mongodb.net/jobListing?retryWrites=true&w=majority", 
    {
        useNewUrlParser: true,
    }
);

app.post("/insert", async (req,res) => {
    const company = req.body.Company
    const position = req.body.Position
    const description = req.body.Description
    const duration = req.body.Duration
    const deadline = req.body.Deadline
  

    const job = new JobModel({ Company: company, Position: position , Description:description, Duration:duration, Deadline:deadline });

    try{
        await job.save();
        res.send("inserted data");
    }
    catch(err) {
        console.log(err)
    }
})

app.put("/update", async (req,res) => {
    const id = req.body.id
    const newPosition = req.body.newPosition

    try{
        await JobModel.findById(id, (err, updatedJob) => {
            updatedJob.Position = newPosition
            updatedJob.save();
            res.send("update");
        })
    }
    catch(err) {
        console.log(err)
    }
})

app.delete("/delete/:id", async (req,res) => {
    const id = req.params.id;
    await JobModel.findByIdAndRemove(id).exec();
    res.send("deleted");
});

app.get("/read", async (req,res) => {
  JobModel.find({}, (err, result) => {
      if(err){
          res.send(err)
      }
      res.send(result);

  } )
})


app.listen(3001, ()=> {
    console.log('Server running on 3001')
})