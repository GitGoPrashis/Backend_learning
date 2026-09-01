// Middleware is a function that run in between the client request and server response. It is mainly use for:a.Authentication and Authorizationz
// checking permission
// error handling

const express =  require("express")

const app = express()

const mymiddleware = (req, res, next)=>{
    
    if (req.query.age >=18 ) {
        next()
    } else {
        res.send("You won't get access to the website")
        console.log("YOu won't get acccess to the website")
    }

}

// app.use(mymiddleware)

app.get("/", mymiddleware, (req,  res)=>{
res.send("Hello, today we are learning About middleware")
})

app.listen(4000, ()=>{
    console.log("Server is running in 4000 port")
})



