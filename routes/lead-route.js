const fs = require('fs');
const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    const leadData = JSON.parse(fs.readFileSync('C://Users//Ivan//WebstormProjects//leads-screen-flow//data//leads-data.json', 'utf-8'));
    if (leadData !== ''){
        res.status(200).json(leadData);
    }
})

router.post('/', (req, res) => {
    const leadData = JSON.parse(fs.readFileSync('C://Users//Ivan//WebstormProjects//leads-screen-flow//data//leads-data.json', 'utf-8'));
    leadData.push(req.body);
})

module.exports = router;