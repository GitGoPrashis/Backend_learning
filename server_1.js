// const express = require('express')
// const fs = require("fs")

// const app = express()

// app.get("/", (req, res)=>{
    
//      fs.readFile("src/homepage.html","",(err, data)=>{
//             if(err){
//                 res.writeHead(500, {"Content-Type": "index/html"})
//                 res.write("Internal Error")
//                 return
    
//             }
//             res.writeHead(200, {"Content-Type": "index/html"})
//         res.write(data)
       
//         })

// })



// app.listen(3000, ()=>{
// console.log("Server is running in port number 3000")
// })
const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
    fs.readFile("src/homepag.html", "", (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/html" });
            res.write(`
                internal error`);
            return res.end();
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
    });
});

app.get("/service", (req, res)=>{

    fs.readFile("src/service.html", "", (err, data)=>{
        if (err){
            res.writeHead(500, {"Content-Type": "text/html"});
            res.write("Internal Error");
              return res.end();
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
    });

        

    })

    app.get("/contact", (req, res)=>{
        fs.readFile("src/contact.html","", (err, data)=>{
            if(err){
                res.status(500).send("Internal Error")
            }
            res.write(data)
            res.end();

        })
    })

app.listen(3000, () => {
    console.log("Server is running on port number 3000");
});