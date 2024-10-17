const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

const leads = [
    {
        id: "00QQy00000CsC0T000",
        first_name: "Vitali",
        last_name: "Johnson",
        company: "PRT",
        email: "vitalijohnson@example.com",
        phone: "+384554456335",
        lead_status: "Contacted",
        annual_revenue: 200000,
        rating: "Warm"
    },
    {
        id: "00QQy00000CsC1U001",
        first_name: "Sophia",
        last_name: "Lee",
        company: "TechWave",
        email: "sophia.lee@example.com",
        phone: "+14151234567",
        lead_status: "Prospecting",
        annual_revenue: 500000,
        rating: "Hot"
    },
    {
        id: "00QQy00000CsC2V002",
        first_name: "James",
        last_name: "Smith",
        company: "Innovatech",
        email: "james.smith@example.com",
        phone: "+12345678901",
        lead_status: "Qualified",
        annual_revenue: 750000,
        rating: "Cold"
    },
    {
        id: "00QQy00000CsC3W003",
        first_name: "Emily",
        last_name: "Davis",
        company: "GreenWorld",
        email: "emily.davis@example.com",
        phone: "+447912345678",
        lead_status: "Contacted",
        annual_revenue: 300000,
        rating: "Warm"
    },
    {
        id: "00QQy00000CsC4X004",
        first_name: "Liam",
        last_name: "Brown",
        company: "Alpha Solutions",
        email: "liam.brown@example.com",
        phone: "+16135551234",
        lead_status: "Prospecting",
        annual_revenue: 1000000,
        rating: "Hot"
    },
    {
        id: "00QQy00000CsC5Y005",
        first_name: "Olivia",
        last_name: "Taylor",
        company: "BlueSky Corp",
        email: "olivia.taylor@example.com",
        phone: "+491234567890",
        lead_status: "Contacted",
        annual_revenue: 250000,
        rating: "Warm"
    },
    {
        id: "00QQy00000CsC6Z006",
        first_name: "Noah",
        last_name: "Wilson",
        company: "Sunrise Global",
        email: "noah.wilson@example.com",
        phone: "+8613812345678",
        lead_status: "Qualified",
        annual_revenue: 450000,
        rating: "Cold"
    },
    {
        id: "00QQy00000CsC7A007",
        first_name: "Mia",
        last_name: "White",
        company: "Zenith Solutions",
        email: "mia.white@example.com",
        phone: "+61398765432",
        lead_status: "Prospecting",
        annual_revenue: 600000,
        rating: "Hot"
    },
    {
        id: "00QQy00000CsC8B008",
        first_name: "William",
        last_name: "Harris",
        company: "NextGen Tech",
        email: "william.harris@example.com",
        phone: "+5511987654321",
        lead_status: "Contacted",
        annual_revenue: 350000,
        rating: "Warm"
    },
    {
        id: "00QQy00000CsC9C009",
        first_name: "Ava",
        last_name: "Martinez",
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



