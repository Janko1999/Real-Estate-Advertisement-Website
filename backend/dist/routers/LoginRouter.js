"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginController_1 = require("../controllers/loginController");
const LoginRouter = express_1.default.Router();
LoginRouter.post('/login', (req, res) => {
    new loginController_1.LoginController().login(req, res);
});
LoginRouter.post('/register', (req, res) => {
    new loginController_1.LoginController().register(req, res);
});
LoginRouter.post('/update', (req, res) => {
    new loginController_1.LoginController().update(req, res);
});
LoginRouter.post('/findOne', (req, res) => {
    new loginController_1.LoginController().findOne(req, res);
});
LoginRouter.post('/findUsers', (req, res) => {
    new loginController_1.LoginController().findUsers(req, res);
});
LoginRouter.post('/findAllUsers', (req, res) => {
    new loginController_1.LoginController().findAllUsers(req, res);
});
LoginRouter.post('/updateStatus', (req, res) => {
    new loginController_1.LoginController().updateStatus(req, res);
});
LoginRouter.post('/deleteUser', (req, res) => {
    new loginController_1.LoginController().deleteUser(req, res);
});
LoginRouter.post('/findByEmail', (req, res) => {
    new loginController_1.LoginController().findByEmail(req, res);
});
LoginRouter.post('/changeEmail', (req, res) => {
    new loginController_1.LoginController().changeEmail(req, res);
});
LoginRouter.post('/changeAgency', (req, res) => {
    new loginController_1.LoginController().changeAgency(req, res);
});
LoginRouter.post('/changePhoneNumber', (req, res) => {
    new loginController_1.LoginController().changePhoneNumber(req, res);
});
LoginRouter.post('/changePassword', (req, res) => {
    new loginController_1.LoginController().changePassword(req, res);
});
LoginRouter.post('/changeTIme', (req, res) => {
    new loginController_1.LoginController().changeTime(req, res);
});
LoginRouter.post('/incFav', (req, res) => {
    new loginController_1.LoginController().incFav(req, res);
});
LoginRouter.post('/decFav', (req, res) => {
    new loginController_1.LoginController().decFav(req, res);
});
exports.default = LoginRouter;
//# sourceMappingURL=LoginRouter.js.map