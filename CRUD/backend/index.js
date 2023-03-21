const express = require('express');

const morgan= require('morgan');
const createError = require('http-error');
const cors = require('cors');



const app = express();

app.use(morgan('dev'));
app.use(cors);
app.use(express.json())
app.use(express.urlencoded({extented:true}));

app.listen(5003,()=>{console.log("app is running on 5000 port")});

