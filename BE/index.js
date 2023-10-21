const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
var bodyParser = require("body-parser");
require('dotenv').config();
require('./connectDB');

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
const server = require("http").createServer(app);
server.listen(PORT);

// const userRoutes = require('./routes/user')

// app.use("/user", userRoutes);

app.get("/", async (req, res) => {
    res.status(200).json({
        status: 200,
        data: "Hola",
    });
});