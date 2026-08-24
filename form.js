const http = require("http");
http.createServer((req, res) => {
    console.log(req.url)
    res.setHeader("Content-Type", "text/html",)
    if(req.url === "/"){
      res.write(` 
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>this is the home</title>
    <h1> This the our homepage </h1>
</head>
<body>
    
</body>
</html> 
`)
res.end()
    }
    else if(req.url ==="/contact"){ 
        res.write(`
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>this the the contact form</title>
</head>
<body>
<form action ="/submit" method = "post">
<input type="text" placeholder = "Enter Your Full name" name ="name"/> <br/>
<input type="email" placeholder = "Enter Your email"name ="eamil"/> <br />
<textarea placeholder = "Enter Your message" name ="message"> </textarea> <br/>
<button> send Message</button>
</form>
    
</body>
</html>
            `)
            res.end()
    }
else if(req.url == "/submit"){
res.write("<h1>Form Submitted SuccesFully</h1>")
res.end()
}

    else{
        res.write("Page Not found")
        res.end()

    }

    
}).listen(4000, () => {
    console.log("Server is Running")
})