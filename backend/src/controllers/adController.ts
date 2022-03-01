import * as express from 'express';
import Ad from '../models/ad';
import Agency from '../models/agencies';



export class AdController{
    
    insert=(req:express.Request, res:express.Response)=>{
        
        let lokacija:string=req.body.lokacija;
        let tip:string=req.body.tip;;
        let sprat:string=req.body.sprat;
        let ukupnoSpratova:string=req.body.ukupnoSpratova;
        let opis:string=req.body.opis;
        let cena:string=req.body.cena;
        let grejanje:string=req.body.grejanje;
        let balkon:boolean=req.body.balkon;
        let terasa:boolean=req.body.terasa;
        let lodja:boolean=req.body.lodja;
        let klima:boolean=req.body.klima;
        let parking:boolean=req.body.parking;
        let lift:boolean=req.body.lift;
        let sobe:string=req.body.sobe;
        let povrsina:string=req.body.povrsina;
        let stanje:string=req.body.stanje;
        let podrum:boolean=req.body.podrum;
        let garaza:boolean=req.body.garaza;
        let internet:boolean=req.body.internet;
        let interfon:boolean=req.body.interfon;
        let telefon:boolean=req.body.telefon;
        let basta:boolean=req.body.basta;
        let username:string=req.body.username;
        let naziv:string=req.body.naziv;
        
       
        Ad.insertMany([
            {   
                "naziv":naziv, 
                "tip":tip,
                "sprat":sprat, 
                "ukupnoSpratova":ukupnoSpratova,
                "opis":opis,
                "cena":cena,
                "grejanje":grejanje, 
                "sobe":sobe, 
                "povrsina":povrsina, 
                "stanje":stanje, 
                "balkon":balkon, 
                "terasa":terasa, 
                "lodja":lodja, 
                "klima":klima,
                "parking":parking, 
                "lift":lift,
                "podrum":podrum, 
                "garaza":garaza, 
                "interfon":interfon, 
                "internet":internet,
                "telefon":telefon,
                "basta":basta,
                "username": username,
                "status": "Dostupno",
                "godina":req.body.godina,
                "imageData":req.body.imageData,
                "rezije":req.body.rezije,
                "busLines":req.body.busLines,
                "agency":req.body.agency,
                "avgPrice":"0",
                "agencyName":req.body.agencyName,
                "soldMonth":"",
                "city":req.body.city,
                "state":req.body.state,
                "microlocation":req.body.microlocation,
                "street":req.body.street
               
              }
        ], (err, ad)=>{
            // let file = req['files'].thumbnail;
            // console.log("File uploaded: ", file.name)
            if(err) console.log(err);
            else
            res.json(ad);
        })
    }
    getAds=(req:express.Request, res:express.Response)=>{
        Ad.find({"status":"Dostupno"},(err,ads)=>{
            if(!err){
                res.json(ads);
            }
            
        })
    }
    getSoldAds=(req:express.Request, res:express.Response)=>{
        Ad.find({"status":"Prodato"},(err,ads)=>{
            if(!err){
                res.json(ads);
            }
            
        })
    }
    

    getMyAds=(req:express.Request, res:express.Response)=>{
        let username:string=req.body.username;
        Ad.find({"username":username},(err,ads)=>{
            if(!err){
                res.json(ads);
            }
            
        })
    }
    sellAd=(req:express.Request, res:express.Response)=>{
        let username:string=req.body.username;
        let naziv:string=req.body.name;
        Ad.updateOne({"username":username, "naziv":naziv},{"status":"Prodato"},(err,ad)=>{
            if(!err){
                res.json(ad);
            }
            
        })
    }

    addToFavourites=(req:express.Request, res:express.Response)=>{
        let username=req.body.username;
        let adUser=req.body.adUser
        let name=req.body.name
        Ad.updateOne({"username":adUser, "naziv":name}, {$push:{'users':username}},(err, ad)=>{
            if(!err) res.json(ad);
        })
        
    }
    removeFromFavourites=(req:express.Request, res:express.Response)=>{
         
        let username=req.body.username
        let adUser=req.body.adUser
        let name=req.body.name
        Ad.updateOne({"username":adUser, "naziv":name},{ $pull:{ users: username}},(err,ad)=>{
            if(!err) res.json(ad);
        })
               
              
      
    }
    getFavourites=(req:express.Request, res:express.Response)=>{
         
        let username=req.body.username;
        
        Ad.find({"users":username, "status":"Dostupno"},(err,ads)=>{
            if(!err){
                res.json(ads);
            }
            
        })
               
              
      
    }

    insertPicture=(req:express.Request, res:express.Response)=>{
        
        let username=req.body.username;
        let image=req.body.image
        let name=req.body.name
        Ad.updateOne({"username":username, "naziv":name}, {$push:{'imageData':image}},(err, ad)=>{
            if(!err) res.json(ad);
        })
        
    }

    changeAd=(req:express.Request, res:express.Response)=>{
        let username=req.body.username;
        let naziv=req.body.naziv;
        let ad=req.body.ad;
        Ad.updateOne({"username":username, "naziv":naziv}, 
        {$set:{
            "naziv":ad.naziv,
            
            "tip":ad.tip,
            "sprat":ad.sprat, 
            "ukupnoSpratova":ad.ukupnoSpratova,
            "opis":ad.opis,
            "cena":ad.cena,
            "grejanje":ad.grejanje, 
            "sobe":ad.sobe, 
            "povrsina":ad.povrsina, 
            "stanje":ad.stanje, 
            "balkon":ad.balkon, 
            "terasa":ad.terasa, 
            "lodja":ad.lodja, 
            "klima":ad.klima,
            "parking":ad.parking, 
            "lift":ad.lift,
            "podrum":ad.podrum, 
            "garaza":ad.garaza, 
            "interfon":ad.interfon, 
            "internet":ad.internet,
            "telefon":ad.telefon,
            "basta":ad.basta,
            "username": username,
            "status": "Dostupno",
            "godina":ad.godina,
            
            "rezije":ad.rezije,
            "busLines":ad.busLines,
            "city":ad.city,
            "state":ad.state,
            "microlocation":ad.microlocation,
            "street":ad.street
            
        }},(err, ad)=>{
            if(!err) res.json(ad);
            else
            console.log(err);
        })
    }

    getAgency=(req:express.Request, res:express.Response)=>{
        let name=req.body.name;
        Agency.findOne({"name":name},(err,agency)=>{
            if(!err) res.json(agency);
            else
            console.log(err);
        })
    }

    getAdsByLocation=(req:express.Request, res:express.Response)=>{
        let location=req.body.location;
        let tip=req.body.tip;
        Ad.find({"microlocation":location, "tip":tip},(err, ads)=>{
            if(!err) res.json(ads);
            else
            console.log(err);
        })
    }
    getAdsByAgency=(req:express.Request, res:express.Response)=>{
        let agency=req.body.agencyName;
        
        Ad.find({"agencyName":agency},(err, ads)=>{
            if(!err) res.json(ads);
            else
            console.log(err);
        })
    }
    
    updateAverage=(req:express.Request, res:express.Response)=>{
        let location=req.body.location;
        let avgPrice=req.body.avgPrice;
        let tip=req.body.tip;
        Ad.updateMany({"microlocation":location, "tip":tip},{$set:{"avgPrice":avgPrice}},(err, ads)=>{
            if(!err) res.json(ads);
            else
            console.log(err);
        })
    }

    setDate=(req:express.Request, res:express.Response)=>{
        let name=req.body.name;
        let username=req.body.username;
        let date=req.body.date;
        Ad.updateOne({"naziv":name, "username":username},{"soldMonth":date},(err, ad)=>{
            if(!err) res.json(ad);
            else
            console.log(err);
        })
    }
   
    
}