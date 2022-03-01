import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import LoginRouter from './routers/LoginRouter';
import AgencyRouter from './routers/AgencyRouter';
import AdRouter from './routers/AdRouter'
import LocationRouter from './routers/LocationRouter'
const fileUpload = require('express-fileupload');
const app = express();

app.use(fileUpload());
app.use(bodyParser({limit: '100mb'}))
app.use(bodyParser.json())

app.use(cors());

mongoose.connect('mongodb://localhost:27017/PiaProjekat');
const connection=mongoose.connection;
connection.once('open', ()=>{
    console.log("Connection opened")
})
const Router=express.Router();
Router.use('/users', LoginRouter);
Router.use('/agencies', AgencyRouter);
Router.use('/ads', AdRouter);
Router.use('/location', LocationRouter);
app.use('/', Router);
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(4000, () => console.log(`Express server running on port 4000`));