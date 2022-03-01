import express from 'express';
import { LoginController } from '../controllers/loginController';

const LoginRouter=express.Router();
LoginRouter.post('/login', (req,res)=>{
    new LoginController().login(req,res)
})
LoginRouter.post('/register', (req,res)=>{
    new LoginController().register(req,res)
})
LoginRouter.post('/update', (req,res)=>{
    new LoginController().update(req,res)
})
LoginRouter.post('/findOne', (req,res)=>{
    new LoginController().findOne(req,res)
})
LoginRouter.post('/findUsers', (req,res)=>{
    new LoginController().findUsers(req,res)
})
LoginRouter.post('/findAllUsers', (req,res)=>{
    new LoginController().findAllUsers(req,res)
})
LoginRouter.post('/updateStatus', (req,res)=>{
    new LoginController().updateStatus(req,res)
})
LoginRouter.post('/deleteUser', (req,res)=>{
    new LoginController().deleteUser(req,res)
})
LoginRouter.post('/findByEmail', (req,res)=>{
    new LoginController().findByEmail(req,res)
})
LoginRouter.post('/changeEmail', (req,res)=>{
    new LoginController().changeEmail(req,res)
})
LoginRouter.post('/changeAgency', (req,res)=>{
    new LoginController().changeAgency(req,res)
})
LoginRouter.post('/changePhoneNumber', (req,res)=>{
    new LoginController().changePhoneNumber(req,res)
})
LoginRouter.post('/changePassword', (req,res)=>{
    new LoginController().changePassword(req,res)
})
LoginRouter.post('/changeTIme', (req,res)=>{
    new LoginController().changeTime(req,res)
})
LoginRouter.post('/incFav', (req,res)=>{
    new LoginController().incFav(req,res)
})
LoginRouter.post('/decFav', (req,res)=>{
    new LoginController().decFav(req,res)
})
export default LoginRouter;