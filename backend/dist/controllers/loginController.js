"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const users_1 = __importDefault(require("../models/users"));
class LoginController {
    constructor() {
        this.login = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            users_1.default.findOne({ "username": username, "password": password, "status": "Accept" }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json(user);
            });
        };
        this.register = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            let firstname = req.body.firstname;
            let lastname = req.body.lastname;
            let birthday = req.body.birthday;
            let email = req.body.email;
            let phoneNumber = req.body.phoneNumber;
            let city = req.body.city;
            let agency = req.body.agency;
            let licenseNumber = req.body.licenseNumber;
            let status = req.body.status;
            let typeString = req.body.typeString;
            users_1.default.insertMany([
                {
                    "username": username,
                    "password": password,
                    "firstname": firstname,
                    "lastname": lastname,
                    "birthday": birthday,
                    "city": city,
                    "phoneNumber": phoneNumber,
                    "email": email,
                    "agency": agency,
                    "licenseNumber": licenseNumber,
                    "imageData": req.body.imageData,
                    "status": status,
                    "typeString": typeString,
                    "time": "0",
                    "favCount": 0
                }
            ], (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json(user);
            });
        };
        this.update = (req, res) => {
            let oldUsername = req.body.oldUsername;
            let username = req.body.username;
            let password = req.body.password;
            let firstname = req.body.firstname;
            let lastname = req.body.lastname;
            let birthday = req.body.birthday;
            let email = req.body.email;
            let phoneNumber = req.body.phoneNumber;
            let city = req.body.city;
            let agency = req.body.agency;
            let licenseNumber = req.body.licenseNumber;
            let status = req.body.status;
            let typeString = req.body.typeString;
            users_1.default.updateOne({ "username": oldUsername }, { $set: {
                    "username": username,
                    "password": password,
                    "firstname": firstname,
                    "lastname": lastname,
                    "birthday": birthday,
                    "city": city,
                    "phoneNumber": phoneNumber,
                    "email": email,
                    "agency": agency,
                    "licenseNumber": licenseNumber,
                    "imageData": req.body.imageData,
                    "status": status,
                    "typeString": typeString,
                }
            }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json(user);
            });
        };
        this.findOne = (req, res) => {
            let username = req.body.username;
            users_1.default.findOne({ "username": username }, (err, user) => {
                if (!err)
                    res.json(user);
                else
                    console.log(err);
            });
        };
        this.findByEmail = (req, res) => {
            let email = req.body.email;
            users_1.default.findOne({ "email": email }, (err, user) => {
                if (err)
                    res.json(null);
                else
                    res.json(user);
            });
        };
        this.findUsers = (req, res) => {
            let status = req.body.status;
            users_1.default.find({ "status": status }, (err, users) => {
                if (err)
                    res.json(null);
                else
                    res.json(users);
            });
        };
        this.updateStatus = (req, res) => {
            let status = req.body.status;
            let username = req.body.username;
            var query = { username: username };
            users_1.default.updateOne(query, { status: status }, (err, user) => {
                if (err)
                    res.json(null);
                else
                    res.json(user);
            });
        };
        this.findAllUsers = (req, res) => {
            let status = req.body.status;
            users_1.default.find({ "status": "Accept" }, (err, users) => {
                if (err)
                    res.json(null);
                else
                    res.json(users);
            });
        };
        this.deleteUser = (req, res) => {
            let username = req.body.username;
            users_1.default.deleteOne({ "username": username }, (err) => {
                if (err)
                    res.json(null);
            });
        };
        this.changeEmail = (req, res) => {
            let username = req.body.username;
            let email = req.body.email;
            users_1.default.updateOne({ "username": username }, { $set: { email: email } }, (err, user) => {
                if (!err)
                    res.json(user);
            });
        };
        this.changePhoneNumber = (req, res) => {
            let username = req.body.username;
            let phoneNumber = req.body.phoneNumber;
            users_1.default.updateOne({ "username": username }, { $set: { phoneNumber: phoneNumber } }, (err, user) => {
                if (!err)
                    res.json(user);
            });
        };
        this.changeAgency = (req, res) => {
            let username = req.body.username;
            let agency = req.body.agency;
            users_1.default.updateOne({ "username": username }, { $set: { agency: agency } }, (err, user) => {
                if (!err)
                    res.json(user);
            });
        };
        this.changePassword = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            users_1.default.updateOne({ "username": username }, { $set: { password: password } }, (err, user) => {
                if (!err)
                    res.json(user);
            });
        };
        this.changeTime = (req, res) => {
            let username = req.body.username;
            let time = req.body.time;
            users_1.default.updateOne({ "username": username }, { $set: { time: time } }, (err, user) => {
                if (!err)
                    res.json(user);
            });
        };
        this.incFav = (req, res) => {
            let username = req.body.username;
            let time = req.body.time;
            users_1.default.updateOne({ "username": username }, { $inc: { favCount: 1 } }, (err, user) => {
                if (!err)
                    res.json(user);
            });
        };
        this.decFav = (req, res) => {
            let username = req.body.username;
            let time = req.body.time;
            users_1.default.updateOne({ "username": username }, { $inc: { favCount: -1 } }, (err, user) => {
                if (!err)
                    res.json(user);
            });
        };
    }
}
exports.LoginController = LoginController;
//# sourceMappingURL=loginController.js.map