const express = require('express')
const app = express();


const middleware1=(req, res, next)=>{
    console.log("Middleware-1");
    next()

    
app.get("/",middleware1,(req,res)=>{
    res.send(" Main page with Middleware1 ")
})

const middleware2=(req, res, next)=>{
    console.log("Middleware-2");
    next()
}


app.use(middleware2);





app.get("/Page1",middleware1,(req,res)=>{
    res.send("<h1>page with middleware1 and middleware2</h1>")
})

app.get("/Page2",(req,res)=>{
    res.send(" <h1>Page2 with middleware2</h1> ")
})

app.get("/Page3",(req,res)=>{
    res.send("<h1>page3 with middleware 2</h1>")
})
}
app.listen(4001)
