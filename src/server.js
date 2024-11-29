const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors())
// app.use(express.json())

app.listen(1999,()=>{
    console.log("Listening in 1999");
    
})