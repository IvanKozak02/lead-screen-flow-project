const express = require('express');
const leadRouter = require('./routes/lead-route');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use('/app/v1/leads',leadRouter);


app.listen(3001, () => {
    console.log('APP IS RUNNING ON PORT 3001');
})

app.use(cors());



