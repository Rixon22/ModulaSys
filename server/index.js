const express = require('express')
const app = express()
const port = 3000
const routes = require('./api/endpoints'); // Fix the file name to 'endpoints' with correct casing
const cors = require('cors');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"]
}));

app.use('/', routes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
