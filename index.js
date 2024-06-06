import express from "express";
import slokas from "./slokas.js";
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send(slokas.eightPointFive);
})

app.listen(port, ()=>{
    console.log(`listening at port number ${port}`);
})