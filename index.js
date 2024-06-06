import express from "express";
import slokas from "./slokas.js";
const app = express();
const port = 3000;
const sDate = "2024-06-06";
const today = new Date();
const startDate = new Date(sDate);
const keys = Object.keys(slokas);
app.use(express.static("public"));
 
function daysBetween(date1, date2) {
    // Ensure date1 is the earlier date
    if (date1 > date2) {
      [date1, date2] = [date2, date1]; // Swap dates if necessary
    }
  
    // Calculate the difference in milliseconds
    const diffInMs = date2.getTime() - date1.getTime();
  
    // Convert milliseconds to days and round down to the nearest whole day
    return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  }

  function getSloka(){
    var slokaNumber = daysBetween(today, startDate);
    var number = keys[slokaNumber];
    return slokas[number];
  }




app.get("/", (req, res)=>{
    res.render("index.ejs",{
        sloka : getSloka()
    });
})

app.listen(port, ()=>{
    console.log(`listening at port number ${port}`);
    console.log(getSloka());
})