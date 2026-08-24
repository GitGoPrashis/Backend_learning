const http =require("http");
http.createServer((req,res)=>{

    res.setHeader("Content-Type","text/html")
    res.write("<h1> Hello, My name is Prashis </h1>")

    res.end()
}).listen(3000, ()=>{
    console.log("Server is Running")
})