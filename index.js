'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

//cau hinh public static folder
app.use(express.static(__dirname+'/public'))

app.get('/',(req,res)=>{
    res.send('hello');
})

app.listen(port,(req,res)=>{
    console.log(`server is listening ${port}`)
})
