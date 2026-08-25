const http = require("http")
const fs = require("fs")
http.createServer((req, res)=>{

    if(req.url == "/"){

    
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
    }
    else if(req.url == "/submit"){
res.write("<h1>Form Submitted SuccesFully</h1>")
res.end()
} else{
    res.write("<h1> page error </h1>")
    res.end()
}

   

}).listen(3000, ()=>{
    console.log("Server is running is the pot number 3000")
})
