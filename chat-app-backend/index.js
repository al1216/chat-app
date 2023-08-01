const express = require("express");
const app = express();
const dotEnv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const url = require("url");
dotEnv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req,res) => {
    res.json({message: "All operational !"});
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server running on port ${process.env.SERVER_PORT}`);
})