const express = require("express");
const mongoose = require("mongoose");
const bodyparsers = require("body-parser");
const routeManager = require('./server/routes')
const cors = require("cors");
const path = require("path")
const http=require('http');

const app = express();


require("dotenv").config({ path: "variables.env" });
app.use(cors());

mongoose.connect(process.env.URL, { useNewUrlParser: true ,useFindAndModify:true});
mongoose.connection.on("connected", () =>
  console.log("mongodb connected successfully.")
);
mongoose.connection.on("error", error => console.log("connection failed."));

app.use(
  bodyparsers.urlencoded({
    extended: true
  })
);

app.use(bodyparsers.json({}));

app.use(express.static(__dirname + '/assets/image'));
app.use('/static', express.static(path.join(__dirname, '/assets/image')))

app.use("/api", routeManager);
app.listen(process.env.PORT, () => 
{
console.log(path.join(__dirname, 'assets/image'))
});
