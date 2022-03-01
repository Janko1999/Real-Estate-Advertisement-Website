import express from 'express';
import { AdController } from '../controllers/adController';

const AdRouter=express.Router();
AdRouter.post('/newAd', (req,res)=>{
    new AdController().insert(req,res)
})
AdRouter.get('/getAds', (req,res)=>{
    new AdController().getAds(req,res)
})
AdRouter.get('/getSoldAds', (req,res)=>{
    new AdController().getSoldAds(req,res)
})
AdRouter.post('/getMyAds', (req,res)=>{
    new AdController().getMyAds(req,res)
})
AdRouter.post('/sellAd', (req,res)=>{
    new AdController().sellAd(req,res)
})
AdRouter.post('/addToFavourites', (req,res)=>{
    new AdController().addToFavourites(req,res)
})
AdRouter.post('/removeFromFavourites', (req,res)=>{
    new AdController().removeFromFavourites(req,res)
})
AdRouter.post('/getFavourites', (req,res)=>{
    new AdController().getFavourites(req,res)
})
AdRouter.post('/insertPicture', (req,res)=>{
    new AdController().insertPicture(req,res)
})
AdRouter.post('/changeAd', (req,res)=>{
    new AdController().changeAd(req,res)
})
AdRouter.post('/getAgency', (req,res)=>{
    new AdController().getAgency(req,res)
})
AdRouter.post('/getAdsByLocation', (req,res)=>{
    new AdController().getAdsByLocation(req,res)
})
AdRouter.post('/updateAverage', (req,res)=>{
    new AdController().updateAverage(req,res)
})
AdRouter.post('/getAdsByAgency', (req,res)=>{
    new AdController().getAdsByAgency(req,res)
})
AdRouter.post('/setDate', (req,res)=>{
    new AdController().setDate(req,res)
})
export default AdRouter;