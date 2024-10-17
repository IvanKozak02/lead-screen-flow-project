const express = require('express');
const cors = require('cors');
const fs = require("fs");

const app = express();

app.use(express.json());

const leads = [
    {
        id: "00QQy00000CsC0TMAV",
        email: "vitalijohnson@example.com",
        phone: "+384554456335",
        lead_status: "Contacted",
        annual_revenue: "200000",
        rating: "Warm"
    },
    {
        id: "00QQy00000CsC0TJAS",
        email: "petersmith@example.com",
        phone: "+5465673451",
        lead_status: "Closed Won",
        annual_revenue: "100000",
        rating: "Hot"
    },
    {
        id: "00QQy00000CsC1TJAS",
        email: "johnsmith@example.com",
        phone: "+5432167890",
        lead_status: "In Review",
        annual_revenue: "150000",
        rating: "Warm"
    },
    {
        id: "00QQy00000CsC2TJAS",
        email: "maryjones@example.com",
        phone: "+5498765432",
        lead_status: "Closed Won",
        annual_revenue: "200000",
        rating: "Hot"
    },
    {
        id: "00QQy00000CsC3TJAS",
        email: "roberthall@example.com",
        phone: "+5487654321",
        lead_status: "Closed Lost",
        annual_revenue: "75000",
        rating: "Cold"
    },
    {
        id: "00QQy00000CsC4TJAS",
        email: "emilyclark@example.com",
        phone: "+5412345678",
        lead_status: "In Review",
        annual_revenue: "50000",
        rating: "Warm"
    },
    {
        id: "00QQy00000CsC5TJAS",
        email: "sarahbrown@example.com",
        phone: "+5476543210",
        lead_status: "Closed Won",
        annual_revenue: "300000",
        rating: "Hot"
    },
    {
        id: "00QQy00000CsC6TJAS",
        email: "davidjohnson@example.com",
        phone: "+5467891234",
        lead_status: "In Review",
        annual_revenue: "120000",
        rating: "Warm"
    },
    {
        id: "00QQy00000CsC7TJAS",
        email: "lindawilson@example.com",
        phone: "+5454321098",
        lead_status: "Closed Lost",
        annual_revenue: "60000",
        rating: "Cold"
    },
    {
        id: "00QQy00000CsC8TJAS",
        email: "jameswhite@example.com",
        phone: "+5443219876",
        lead_status: "In Review",
        annual_revenue: "80000",
        rating: "Warm"
    }
];


app.get('/', (req, res) => {
    const leadsConv = JSON.parse(fs.readFileSync('C://Users//Ivan//WebstormProjects//leads-screen-flow//data//leads-data.json', 'utf-8'))
    res.status(200).json(leadsConv);
})

app.post('/', (req, res) => {
    const leadData = JSON.parse(fs.readFileSync('C://Users//Ivan//WebstormProjects//leads-screen-flow//data//leads-data.json', 'utf-8'));
    leadData.push(req.body);
})

app.listen(3001, () => {
    console.log('APP IS RUNNING ON PORT 3001');
})

app.use(cors());



