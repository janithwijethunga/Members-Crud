const express = require("express");
const cors = require("cors");
const app = express();

const dbconfig = require('./db');

const membersRoutes = require("./Routes/membersRoute"); // Importing member routes

app.use(cors());
app.use(express.json());

// Using the router object with app.use()
app.use("/api/members", membersRoutes);

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Node server started using nodemon`));
