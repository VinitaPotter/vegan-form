const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;


const app = express();
app.use(bodyParser.json());

const database = {
    vegans: [
        {
            id: '123',
            name: 'Alex',
            email: 'alex@gmail.com',
            veganSince: '1992',
            type: 'pure',
            date: new Date()
        },
        {
            id: '124',
            name: 'Grace',
            email: 'grace@gmail.com',
            veganSince: '1992',
            type: 'pure',
            date: new Date()
        },
        {
            id: '125',
            name: 'Tommy',
            email: 'tommy@gmail.com',
            veganSince: '1992',
            type: 'pure',
            date: new Date()
        }
    ]
};

app.get('/', (req, res) => {
    res.send("This is working");
})

app.post('/submit', (req, res) => {
    const { name, email, veganSince, type } = req.body;
    database.vegans.push({
        id: '125',
        name: name,
        email: email,
        veganSince: veganSince,
        type: type,
        date: new Date()
        
    });
    res.json(database.vegans[database.vegans.length -1]);
})

app.put('/graph', (req, res) => {
    if(req.body.email) {
        res.json("graph");
    } else {
        res.status(400).json("Error");
    }
})

app.listen(port, () => {
    console.log("Server is running on "+ port +" port");
})

// 1. root route 
// 2. submit form = post
// 3. graph = put 
