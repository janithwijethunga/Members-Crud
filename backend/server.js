const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app =express();


const dbconfig = require('./db');

const membersRoutes = require("./Routes/membersRoute")

app.use(cors()); 
app.use(express.json())

app.use("/api/members", membersRoutes);

const port = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

app.use("api/members", membersRoutes);

app.listen(port,()=>console.log(`Node server started using nodemon`));