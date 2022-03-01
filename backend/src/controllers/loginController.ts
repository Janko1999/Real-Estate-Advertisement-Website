import * as express from 'express';
import { Request, Response } from 'express-serve-static-core';
import User from '../models/users';


export class LoginController{
   

    login=(req:express.Request, res:express.Response)=>{
        let username:String=req.body.username;
        let password:String =req.body.password;
        User.findOne({"username":username, "password": password, "status": "Accept"}, (err, user)=>{
            if(err) console.log(err);
            else
            res.json(user);
        })
    }

    register=(req:express.Request, res:express.Response)=>{
        let username:String=req.body.username;
        let password:String =req.body.password;
        let firstname:String=req.body.firstname;
        let lastname:String=req.body.lastname;
        let birthday:string=req.body.birthday;
        let email:String=req.body.email;
        let phoneNumber:String=req.body.phoneNumber;
        let city:String=req.body.city;
        let agency:String=req.body.agency;
        let licenseNumber:String=req.body.licenseNumber;
        let status:String=req.body.status;
        let typeString:boolean=req.body.typeString;

        User.insertMany([
            {
                "username":username,
                "password":password,
                "firstname":firstname,
                "lastname":lastname,
                "birthday":birthday,
                "city":city,
                "phoneNumber":phoneNumber,
                "email":email,
                "agency":agency,
                "licenseNumber":licenseNumber,
                "imageData":req.body.imageData,
                "status":status,
                "typeString":typeString,
                "time": "0",
                "favCount":0
              }
        ], (err, user)=>{
            if(err) console.log(err);
            else
            res.json(user);
        })
    }
    update=(req:express.Request, res:express.Response)=>{
        let oldUsername:String=req.body.oldUsername;
        let username:String=req.body.username;
        let password:String =req.body.password;
        let firstname:String=req.body.firstname;
        let lastname:String=req.body.lastname;
        let birthday:string=req.body.birthday;
        let email:String=req.body.email;
        let phoneNumber:String=req.body.phoneNumber;
        let city:String=req.body.city;
        let agency:String=req.body.agency;
        let licenseNumber:String=req.body.licenseNumber;
        let status:String=req.body.status;
        let typeString:boolean=req.body.typeString;

        User.updateOne({"username":oldUsername},
            {   $set:{
                    "username":username,
                    "password":password,
                    "firstname":firstname,
                    "lastname":lastname,
                    "birthday":birthday,
                    "city":city,
                    "phoneNumber":phoneNumber,
                    "email":email,
                    "agency":agency,
                    "licenseNumber":licenseNumber,
                    "imageData":req.body.imageData,
                    "status":status,
                    "typeString":typeString,
                    
                    
                }
            }
        , (err, user)=>{
            if(err) console.log(err);
            else
            res.json(user);
        })
    }
    
    findOne=(req:express.Request, res:express.Response)=>{
        let username:String=req.body.username;
        User.findOne({"username":username}, (err, user)=>{
            if(!err) res.json(user);
            else
           
            console.log(err);       
         })
    }
    findByEmail=(req:express.Request, res:express.Response)=>{
        let email:String=req.body.email;
        User.findOne({"email":email}, (err, user)=>{
            if(err) res.json(null);
            else
            res.json(user);
        })
    }
    findUsers=(req:express.Request, res:express.Response)=>{
        let status:String=req.body.status;
        User.find({"status":status}, (err, users)=>{
            if(err) res.json(null);
            else
            res.json(users);
        })
    }
    updateStatus=(req:express.Request, res:express.Response)=>{
        let status:String=req.body.status;
        let username:String=req.body.username;
        var query = { username: username };
        User.updateOne(query, { status: status }, (err, user)=>{
            if(err) res.json(null);
            else
            res.json(user);

        })
       
    }
    findAllUsers=(req:express.Request, res:express.Response)=>{
        let status:String=req.body.status;
        User.find({"status":"Accept"}, (err, users)=>{
            if(err) res.json(null);
            else
            res.json(users);
        })
    }
    deleteUser=(req:express.Request, res:express.Response)=>{
        let username:String=req.body.username;
        User.deleteOne({"username":username}, (err)=>{
            if(err) res.json(null);
            
        })
    }

    changeEmail=(req: Request, res: Response)=> {
        let username=req.body.username;
        let email=req.body.email;
        User.updateOne({"username":username}, {$set:{email:email}},(err, user)=>{
            if(!err)
            res.json(user);
        })
    }
    changePhoneNumber=(req: Request, res: Response)=> {
        let username=req.body.username;
        let phoneNumber=req.body.phoneNumber;
        User.updateOne({"username":username}, {$set:{phoneNumber:phoneNumber}},(err, user)=>{
            if(!err)
            res.json(user);
        })
    }
    changeAgency=(req: Request, res: Response) =>{
        let username=req.body.username;
        let agency=req.body.agency;
        User.updateOne({"username":username}, {$set:{agency:agency}},(err, user)=>{
            if(!err)
            res.json(user);
        })
    }
    changePassword=(req: Request, res: Response)=> {
        let username=req.body.username;
        let password=req.body.password;
        User.updateOne({"username":username}, {$set:{password:password}},(err, user)=>{
            if(!err)
            res.json(user);
        })
    }

    changeTime=(req: Request, res: Response)=> {
        let username=req.body.username;
        let time=req.body.time;
        User.updateOne({"username":username}, {$set:{time:time}},(err, user)=>{
            if(!err)
            res.json(user);
        })
    }
    incFav=(req: Request, res: Response)=> {
        let username=req.body.username;
        let time=req.body.time;
        User.updateOne({"username":username}, {$inc:{favCount:1}},(err, user)=>{
            if(!err)
            res.json(user);
        })
    }
    decFav=(req: Request, res: Response)=> {
        let username=req.body.username;
        let time=req.body.time;
        User.updateOne({"username":username}, {$inc:{favCount:-1}},(err, user)=>{
            if(!err)
            res.json(user);
        })
    }

}