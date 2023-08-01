const express = require("express");
const app = express();
const dotEnv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const url = require("url");
const Hyperswarm = require("hyperswarm");
const goodbye = require("graceful-goodbye");
const crypto = require("hypercore-crypto");
const b4a = require("b4a");
const fs = require("fs");
dotEnv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "All operational !" });
});

app.get("/api/get-peer-id", (req, res) => {
  fs.readFile("peerId.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    }
    if (data.length == 0) {
      const topic = crypto.randomBytes(32);
      const id = b4a.toString(topic, "hex");
      fs.writeFileSync("peerId.txt", id, (err) => {
        if (err) {
          console.log(err);
        }
      });
      res.json({ id: id });
    } else {
      res.json({ id: data });
    }
  });
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server running on port ${process.env.SERVER_PORT}`);
});
