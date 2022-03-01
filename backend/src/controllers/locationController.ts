import * as express from 'express';
import { Request, Response } from 'express-serve-static-core';
import Microlocation from '../models/microlocations';
import Street from '../models/streets';
import City from '../models/cities';


export class LocationController{


    insertMicrolocation=(req:express.Request, res:express.Response)=>{

        
        let microlocation=req.body.microlocation;
        

        Microlocation.insertMany([{
            
            "name":microlocation,
           
        }],(err, location)=>{
            if(!err) res.json(location);
            else console.log(err);
        })




    }
    getMicrolocations=(req:express.Request, res:express.Response)=>{
        Microlocation.find((err, locations)=>{
            if(!err) res.json(locations);
            else
            console.log(err);
        })
    }
    insertStreet=(req:express.Request, res:express.Response)=>{

        
        let street=req.body.street;
        

        Street.insertMany([{
            
            "name":street,
           
        }],(err, location)=>{
            if(!err) res.json(location);
            else console.log(err);
        })




    }
    getStreets=(req:express.Request, res:express.Response)=>{
        Street.find((err, locations)=>{
            if(!err) res.json(locations);
            else
            console.log(err);
        })
    }
    getCities=(req:express.Request, res:express.Response)=>{
        City.find((err, locations)=>{
            if(!err) res.json(locations);
            else
            console.log(err);
        })
    }


}