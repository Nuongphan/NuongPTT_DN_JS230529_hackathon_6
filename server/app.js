const express = require('express')
const app = express()
const cors = require("cors")
const connection = require("./src/config/dbConfig")
require("dotenv").config()
const port = process.env.PORT 
app.use(cors({ credentials: true, origin: "*", methods: "GET,POST,DELETE,PUT,PATCH,OPTIONS" }))
app.use(express.json())
app.use(express.urlencoded())
const Router = require("./src/router/index")
Router(app)
connection.connect(error => {
    if (error) {
        console.error('Error connecting to database: ' + error.stack);
        return;
    }
    console.log('Connected to database as id ' + connection.threadId);
})
app.listen(port, () => {  
    console.log(`listening on http://localhost:${port}`);
})