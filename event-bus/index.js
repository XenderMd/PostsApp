const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', (req, res)=>{
    const event=req.body;
    console.log(event);

    axios.post('http://localhost:4000/events', event).catch((error)=>{
        console.log(error.message)
    });
    axios.post('http://localhost:4001/events', event).catch((error)=>{
        console.log(error.message)
    });
    axios.post('http://localhost:4002/events', event).catch((error)=>{
        console.log(error.message)
    });
    axios.post('http://localhost:4003/events', event).catch((error)=>{
        console.log(error.message)
    });

    res.status(200).send({statu:'ok'});
});

app.listen(4005, ()=>{
    console.log('Listening on port 4005');
});