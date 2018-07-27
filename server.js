'use strict'
//console.log("welcome to nodeapp");
const express =require('express');
const app =express();

//Port
app.set('PORT', process.env.PORT || 3000);

app.get('/',(req,res,next)=>{
    res.send("hello from node app");
});

app.get('/dashboard',(req,res,next)=>{
    res.send("hello from node app dashboard");
});
app.listen(app.get('PORT'),()=>{
    console.log("server running on port 3000");
});