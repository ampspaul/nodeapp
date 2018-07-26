'use strict'
//console.log("welcome to nodeapp");
const express =require('express');
const app =express();

app.get('/',(req,res,next)=>{
    res.send("hello from node app");
});

app.get('/dashbord',(req,res,next)=>{
    res.send("hello from node app dashord");
});

app.listen(3000,()=>{
    console.log("server running on port 3000");
});