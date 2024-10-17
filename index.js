const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

const leads = [
    {
        id: "00QQy00000CsC0T",
        name: "Vitali Johnson",
        company: "PRT",
        email: "vitalijohnson@example.com",
        phone: "+384554456335",
        lead_status: "Contacted",
        annual_revenue: 200000,
        rating: "Warm"
    },
    {
        id: "00QQy00000CsC1U",
        name: "Sophia Lee",
        company: "TechWave",
        email: "sophia.lee@example.com",
        phone: "+14151234567",
        lead_status: "Prospecting",
        annual_revenue: 500000,
        rating: "Hot"
    },
    {
        id: "00QQy00000CsC2V",
        name: "James Smith",
        company: "Innovatech",
        email: "james.smith@example.com",
        phone: "+12345678901",
        lead_status: "Qualified",
        annual_revenue: 750000,
        rating: "Cold"
    },
    {
        id: "00QQy00000CsC3W",
        name: "Emily Davis",
        company: "GreenWorld",
        email: "emily.davis@example.com",
        phone: "+447912345678",
        lead_status: "Contacted",
        annual_revenue: 300000,
        rating: "Warm"
    },
    {
        id: "00QQy00000CsC4X",
        name: "Liam Brown",
        company: "Alpha Solutions",
        email: "liam.brown@example.com",
        phone: "+16135551234",
        lead_status: "Prospecting",
        annual_revenue: 1000000,
        rating: "Hot"
    },
    {
        id: "00QQy00000CsC5Y",
        name: "Olivia Taylor",
        company: "BlueSky Corp",
        email: "olivia.taylor@example.com",
        phone: "+491234567890",
        lead_status: "Contacted",
        annual_revenue: 250000,
        rating: "Warm"
    },
    {
        id: "00QQy00000CsC6Z",
        name: "Noah Wilson",
        company: "Sunrise Global",
        email: "noah.wilson@example.com",
        phone: "+8613812345678",
        lead_status: "Qualified",
        annual_revenue: 450000,
        rating: "Cold"
    },
    {
        id: "00QQy00000CsC7A",
        name: "Mia White",
        company: "Zenith Solutions",
        email: "mia.white@example.com",
        phone: "+61398765432",
        lead_status: "Prospecting",
        annual_revenue: 600000,
        rating: "Hot"
    },
    {
        id: "00QQy00000CsC8B",
        name: "William Harris",
        company: "NextGen Tech",
        email: "william.harris@example.com",
        phone: "+5511987654321",
        lead_status: "Contacted",
        annual_revenue: 350000,
        rating: "Warm"
    },
    {
        id: "00QQy00000CsC9C",
        name: "Ava Martinez",
        company: "Future Horizons",
        email: "ava.martinez@example.com",
        phone: "+34912345678",
        lead_status: "Qualified",
        annual_revenue: 800000,
        rating: "Cold"
    }
];



app.get('/', (req, res) => {
        res.status(200).json(leads);
})


app.listen(3001, () => {
    console.log('APP IS RUNNING ON PORT 3001');
})

app.use(cors());



