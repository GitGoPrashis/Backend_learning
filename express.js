const express = require("express")

const app = express()

app.get("/", (req, res)=>{
res.send(`
    <h1>Hello World, This is my HomePage</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero a, fuga debitis eos ratione pariatur ea eum vitae quas voluptatem aliquam rem dignissimos possimus perspiciatis veniam cum voluptates excepturi necessitatibus, nulla dolor odio commodi expedita. Laboriosam dolores pariatur ut unde.</p>
    `)
})
app.get("/contact", (req, res)=>{
    res.send(`
        <h1>Contact page</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit maxime architecto id facilis, nihil doloremque. Quas nihil pariatur ad accusantium dolores recusandae dolore repellat ratione nobis nulla. Officiis nisi distinctio alias laborum. Aperiam nesciunt velit non earum molestias, animi mollitia!</p>
        <a href="/">Go to HomePage </a>
    `)
        
})

app.get("/service", (req, res)=>{
    res.send(`
        <h1>Service page</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit maxime architecto id facilis, nihil doloremque. Quas nihil pariatur ad accusantium dolores recusandae dolore repellat ratione nobis nulla. Officiis nisi distinctio alias laborum. Aperiam nesciunt velit non earum molestias, animi mollitia!</p>
      
    <a href="/">Go to HomePage </a>
    `)
        
})

app.listen(4000, ()=>{
    console.log("Server is Running..")
})