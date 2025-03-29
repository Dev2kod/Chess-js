const express = require("express")
const io = require("socket.io")
const http = require("http")
const {Chess} = require("chess.js")

const app = express()

const server = http.createServer(app);
const io  = socket(server);

const chess = new Chess();


app.use(express.json);







app.listen(3000,()=>{console.log("App running on port 3000")})