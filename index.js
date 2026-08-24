const http = require("http")
const fs = require("fs")
http.createServer((req, res)=>{
    fs.readFile("src/index.html", "", (err, data)=>{
        if(err){
            res.writeHead(500, {"content-type": "text/plain"})
            res.write("Internal Error")
            return

        }
        res.writeHead(200, {"content-type": "text/html"})
    res.write(data)
    res.end()

    })

}).listen(3000, ()=>{
    console.log("Server is running is the pot number 3000")
})