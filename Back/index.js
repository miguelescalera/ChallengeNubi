const express = require("express")
const app = express()

app.use(express.json())
app.use(express.static(__dirname + "/public"))

app.listen(3000, ()=>{
    console.log("servidor corriendo en puerto 3000");
})