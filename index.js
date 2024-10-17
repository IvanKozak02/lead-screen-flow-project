const express = require('express');
const cors = require('cors');
const fs = require("fs");

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    const leadData = JSON.parse(fs.readFileSync('C://Users//Ivan//WebstormProjects//leads-screen-flow//data//leads-data.json', 'utf-8'));
    if (leadData !== ''){
        res.status(200).json(leadData);
    }
})

app.post('/', (req, res) => {
    const leadData = JSON.parse(fs.readFileSync('C://Users//Ivan//WebstormProjects//leads-screen-flow//data//leads-data.json', 'utf-8'));
    leadData.push(req.body);
})

app.listen(3001, () => {
    console.log('APP IS RUNNING ON PORT 3001');
})

app.use(cors());



