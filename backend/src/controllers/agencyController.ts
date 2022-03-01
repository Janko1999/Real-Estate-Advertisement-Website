import * as express from 'express';
import Agency from '../models/agencies';


export class AgencyController{
    
    insert=(req:express.Request, res:express.Response)=>{
        let name:String=req.body.name;
        let address:String =req.body.address;
        let city:String=req.body.city;
        let phoneNumber:String=req.body.phoneNumber;
        let PIB:string=req.body.PIB;
       
        Agency.insertMany([
            {
                "name":name,
                "address":address,
                "city":city,
                "phoneNumber":phoneNumber,
                "PIB":PIB
               
              }
        ], (err, user)=>{
            if(err) console.log(err);
            else
            res.json(user);
        })
    }
    getAll=(req:express.Request, res:express.Response)=>{
        Agency.find((err,agencies)=>{
            if(!err){
                res.json(agencies);
            }
            
        })
    }
    
}