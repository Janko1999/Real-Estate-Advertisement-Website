import express from 'express';
import { LocationController } from '../controllers/locationController';

const LocationRouter=express.Router();

LocationRouter.post('/insertMicrolocation', (req,res)=>{
    new LocationController().insertMicrolocation(req,res)
})
LocationRouter.get('/getMicrolocations', (req,res)=>{
    new LocationController().getMicrolocations(req,res)
})
LocationRouter.post('/insertStreet', (req,res)=>{
    new LocationController().insertStreet(req,res)
})
LocationRouter.get('/getStreets', (req,res)=>{
    new LocationController().getStreets(req,res)
})
LocationRouter.get('/getCities', (req,res)=>{
    new LocationController().getCities(req,res)
})
export default  LocationRouter;