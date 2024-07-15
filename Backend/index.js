const express = require('express');
const healthPackageRoutes = require('./Router/Router');

const app = express();

app.use(express.json()); // Middleware to parse JSON requests
var dotenv = require("dotenv");
dotenv.config();
var cors = require('cors')
app.use(cors());
require("./db/config")
app.use(healthPackageRoutes);
let port = process.env.PORT;

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})