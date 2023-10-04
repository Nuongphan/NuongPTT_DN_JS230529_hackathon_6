const express = require('express');
const app = express();
const sequelize = require('././src/config/dbConfig');
const port = process.env.PORT_SERVER
const Note= require("./src/models/noteappModel")
app.use(express.json())
app.use(express.urlencoded())
const cors = require("cors")
const Router = require("./src/router/index")
app.use(cors({ credentials: true, origin: "*", methods: "GET,POST,DELETE,PUT,PATCH,OPTIONS" }))
Router(app)

// Note.sync().then(()=>{
//     console.log('ok');
// })
app.listen(8000, () => {
    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
     }).catch((error) => {
        console.error('Unable to connect to the database: ', error);
     });
    console.log(`http://localhost:${port}`);
})