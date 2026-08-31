const express = require("express")
const path=require("path")
const app = express()

app.get("/", (req, res) => {
    const file=path.resolve("src/contact.html")
    console.log(file)

    
    res.sendFile(file)
})



app.listen(4000, () => {
    console.log("Server running on port 4000")
})