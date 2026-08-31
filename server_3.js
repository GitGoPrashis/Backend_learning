const express = require("express")
const path = require("path")
const app = express()


app.get("/", (req, res)=>{
    const filepath = path.join(__dirname, "src", "homepage.html")

    console.log(filepath)
    res.sendFile(filepath)
    

})


app.listen(4000, ()=>{
    console.log("server is running is 4000 port")
})