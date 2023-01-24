const express= require('express');
const app= express();
const port=8000;
const db=require('./config/mongoose');
const bodyParser = require('body-parser');
const productRouter = require('./routes/product');

app.use(bodyParser.json());

require('dotenv/config');
 
const api = process.env.API_URL;
//use the body
app.use(express.urlencoded({extended:true}));

app.use(`${api}/product`, productRouter);



app.listen(port,function(err){
    if(err){ console.log("error in starting server"); return;}
    console.log("listening to the port ", port);
})