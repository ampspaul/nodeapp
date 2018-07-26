'use strict'
//console.log("welcome to nodeapp");
const express =require('express');
const app =express();

app.set('PORT', process.env.PORT || 3000);

app.get('/',(req,res,next)=>{
    res.send("hello from node app");
});

app.get('/dashbord',(req,res,next)=>{
    res.send("hello from node app dashord");
});
app.listen(app.get('PORT'),()=>{
    console.log("server running on port 3000");
});