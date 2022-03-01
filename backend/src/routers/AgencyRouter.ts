import express from 'express';
import { AgencyController } from '../controllers/agencyController';


const AgencyRouter=express.Router();
AgencyRouter.post('/newAgency', (req,res)=>{
    new AgencyController().insert(req,res)
})

AgencyRouter.get('/getAll', (req,res)=>{
    new AgencyController().getAll(req,res)
})

export default AgencyRouter;