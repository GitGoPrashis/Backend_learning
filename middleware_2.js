const express =  require("express")

const app = express()
 let fullname = prashis ;

const mymiddleware = (req, res, next)=>{
   
    if (req.query.fullname  ) {
        next()
    } else {
        res.send("Please Enter Your name")
    }

}

// app.use(mymiddleware)

app.get("/", mymiddleware, (req,  res)=>{
res.send(`hello, ${fullname}`)
})

app.listen(4000, ()=>{
    console.log("Server is running in 4000 port")
})



