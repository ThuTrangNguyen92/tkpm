'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 5001;
const expressHandlebars = require('express-handlebars');

//cau hinh public static folder
app.use(express.static(__dirname+'/public'))

app.engine('hbs',expressHandlebars.engine({
    layoutDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname: 'hbs',
    defaultLayout:'layout',
    //handlebar co the lay thuoc tinh tu trong CSDL - true
    runtimeOptions: {allowProtoPropertiesByDefault: true},
    helpers: {
        /* createStarList,
        createPagination */
    },
    
}));
app.set('view engine','hbs');




app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/:page',(req,res)=>{
    res.render(req.params.page);
})

app.listen(port,(req,res)=>{
    console.log(`server is listening ${port}`)
})
