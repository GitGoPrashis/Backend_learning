// create an Express.js applicatiopn with two html filese for employees and student information. 
// Read file and display those datas.
// student information must include id name age and course  and at least 10 datas. In tabular formate.
// similarly employees info must include employee number, name and position. Mininum 10 datas

const express = require("express")
const path = require("path")

const app = express()

app.get("/", (req, res)=>{

    const filepath = path.join(__dirname, "src", "homepage.html")
    
    res.sendFile(filepath)
})

app.get("/student", (req, res)=>{

    const filepath = path.join(__dirname, "src", "student_info.html")
    
    res.sendFile(filepath)
})

app.get("/employee", (req, res)=>{

    const filepath = path.join(__dirname, "src", "employee_data.html")
    
    res.sendFile(filepath)
})



app.listen(4000, ()=>{
    console.log("server is running in 4000 port")
    
})